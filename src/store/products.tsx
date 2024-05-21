import { create } from "zustand";
import { product } from "@service";
import { ProductsStore } from "../interface/products";
import Notification from "@notification";

const useProductsStore = create<ProductsStore>((set) => ({
  data: [],
  isLoading: false,
  totalCount: 1,
  getData: async (params: any) => {
    try {
      set({ isLoading: true });
      const response = await product.get_products(params);
      if (response.status === 200) {
        set({
          totalCount: Math.ceil(response.data.total_count / params.limit),
          data: response?.data?.products,
        });
      }
      set({ isLoading: false });
      return response;
    } catch (error: any) {
      const message = error?.message;
      Notification({
        title: `${message}`,
        type: "error",
      });
      console.error(error);
    }
  },
  createProduct: async (data: any) => {
    try {
      const response = await product.create_product(data);
      if (response.status === 201) {
        Notification({
          title: "Product successfully created",
          type: "success",
        });
      }
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  },
  getProduct: async (id: string | undefined) => {
    try {
      const response = await product.get_product(id);
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.error(error);
    }
  },
  deleteProduct: async (id: string | undefined) => {
    try {
      const response = await product.delete_product(id);
      console.log(response);
      if (response.status === 200) {
        Notification({
          title: "Product successfully deleted",
          type: "success",
        });
      }
      return response;
    } catch (error) {
      Notification({
        title: "Something went wrong",
        type: "error",
      });
      console.error(error);
    }
  },
}));

export default useProductsStore;
