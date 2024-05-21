import { create } from "zustand";
import { CategoryStore } from "../interface/category";
import { category } from "@service";
import Notification from "@notification";

const useCategoryStore = create<CategoryStore>((set) => ({
  data: [],
  isLoading: false,
  totalCount: 1,
  getCategory: async (params: any) => {
    try {
      set({ isLoading: true });
      const response = await category.get_category(params);
      console.log(response);
      if (response.status === 200) {
        response?.data?.categories?.forEach((item: any, index: number) => {
          item.index = index + 1;
        });
        set({
          totalCount: Math.ceil(response.data.total_count / params.limit),
          data: response?.data?.categories,
        });
      }
      set({ isLoading: false });
      return response?.data?.categories;
    } catch (error) {
      console.error(error);
    }
  },
  createCategory: async (data: any) => {
    try {
      const response = await category.create_category(data);
      if (response.status === 201) {
        set((state) => ({
          data: [...state.data, response?.data],
        }));
        Notification({
          title: "Category successfully created",
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
  updateCategory: async (data: any) => {
    try {
      const response = await category.update_category(data);
      if (response.status === 200) {
        response?.data?.categories?.forEach((item: any, index: number) => {
          item.index = index + 1;
        });
        set((state) => ({
          data: state.data.map((item: any) =>
            item.category_id === data.category_id ? data : item
          ),
        }));
        Notification({
          title: "Category successfully updated",
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
  deleteCategory: async (id: any) => {
    try {
      const response = await category.delete_category(id);
      if (response.status === 200) {
        set((state) => ({
          data: state.data.filter((item: any) => item.category_id !== id),
        }));
        Notification({
          title: "Category successfully deleted",
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
}));

export default useCategoryStore;
