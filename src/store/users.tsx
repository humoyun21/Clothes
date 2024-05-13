import { create } from "zustand";
import { user } from "@service";
import { UsersStore } from "../interface/user";
import Notification from "@notification";

const useUsersStore = create<UsersStore>((set) => ({
  data: [],
  isLoading: false,
  getData: async (params: any) => {
    try {
      set({ isLoading: true });
      const response = await user.get_users(params);
      if (response.status === 200) {
        response?.data?.user?.forEach((item: any, index: number) => {
          item.index = index + 1;
        });
        set({ data: response?.data?.user });
      }
      set({ isLoading: false });
    } catch (error) {
      console.log(error);
    }
  },
  createData: async (data: any) => {
    try {
      const response = await user.create_user(data);
      if (response.status === 201) {
        Notification({
          title: "User successfully created",
          type: "success",
        });
      }
    } catch (error) {
      console.log(error);
    }
  },
  deleteData: async (id: any) => {
    try {
      const response = await user.delete_user(id);
      if (response.status === 200) {
        set((state) => ({ data: state.data.filter((item: any) => item.id!== id) }));
        Notification({
          title: "User successfully deleted",
          type: "success",
        });
      }
    } catch (error) {
      Notification({
        title: "Something went wrong",
        type: "error",
      })
      console.log(error);
    }
  },
  // updateData: async (data: any) => {
  //   try {
  //     const response = await user.update_user(data)
  //     console.log(response);
  //     // if (response.status === 200) {
  //     //   Notification({
  //     //     title: "User successfully updated",
  //     //     type: "success",
  //     //   });
  //     // }
  //   } catch (error) {
  //     Notification({
  //       title: "Something went wrong",
  //       type: "error",
  //     })
  //     console.log(error);
  //   }
  // }
}));

export default useUsersStore;