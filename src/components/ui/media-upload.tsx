import * as React from "react";
import axios from "axios";
import { getDataFromCookie } from "@data-service";
import Notification from "@notification";

import { ImageUpdate } from "@modals";

export default function InputFileUpload({ data }: any) {
  const [image, setImage] = React.useState({});
  const handleImageChange = (event: any) => {
    setImage(event.target.files[0]);
  };
  const uploadImage = async (e: any) => {
    e.preventDefault();
    const formData: any = new FormData();
    formData.append("file", image);
    try {
      const response = await axios.post(
        `http://store.go-clothes.uz:5555/v1/media/upload-photo?id=${data}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${getDataFromCookie("token")}`, // Include authorization token in the request header
          },
        }
      );
      if (response.status === 200) {
        Notification({
          title: "Successfully upload image",
          type: "success",
        });
      }
    } catch (error) {
      console.error(error);
      Notification({
        title: "Something went wrong",
        type: "error",
      });
    }
  };
  return (
    <>
      <button className="px-[6px] py-[7px] border border-gray-300 active:bg-gray-300 duration-150 bg-gray-200 rounded-md">
        <ImageUpdate change={handleImageChange} upload={uploadImage} />
      </button>
    </>
  );
}
