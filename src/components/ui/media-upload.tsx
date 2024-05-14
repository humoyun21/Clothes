import * as React from "react";
import axios from "axios";
import { getDataFromCookie } from "@data-service";
import Notification from "@notification";

export default function InputFileUpload({ data }: any) {
  const [image, setImage] = React.useState({});
  const handleImageChange = (event: any) => {
    setImage(event.target.files[0]);
  };
  const uploadImage = async (e:any) => {
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
      <form className="flex flex-col gap-y-1" onSubmit={uploadImage}>
        <input type="file" required onChange={handleImageChange} />
        <button
          className="bg-[#1976D2] text-white font-self-bold py-2 px-4 rounded duration-150 active:bg-[#1976d2bc]"
        >
          Upload image
        </button>
      </form>
    </>
  );
}