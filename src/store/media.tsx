import { create } from "zustand";
import { MediaStore } from "../interface/media";
import { media } from "@service";
import Notification from "@notification";

const useMediaStore = create<MediaStore>(() => ({
  
  postMedia: async (id:any, data: any) => {
    try {
      const response = await media.post_media(id, data);
      if (response.status === 200) {
        Notification({
          title: "Media successfully created",
          type: "success",
        });
      }
    } catch (error) {
      Notification({
        title: "Something went wrong",
        type: "error",
      });
      console.error(error);
    }
  },
  getMedia: async (id) => {
    try {
      const response = await media.get_media(id);
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      Notification({
        title: "Something went wrong",
        type: "error",
      });
      console.error(error);
    }
  }
}));

export default useMediaStore;
