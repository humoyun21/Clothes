export interface GetProduct {
  limit: number;
  page: number;
}
export interface createProduct {
  age_max: any;
  age_min: any;
  category_id?: string;
  color: string;
  cost: any;
  count: any;
  description: string;
  discount: any;
  for_gender: string;
  made_in: string;
  product_name: string;
  size: any;
}
export interface ProductsStore {
  data: any[];
  isLoading: boolean;
  totalCount: number;
  getData: (params: GetProduct) => Promise<any>;
  createProduct: (data: createProduct) => Promise<any>;
  getProduct: (id: string | undefined) => any;
  deleteProduct: (id: string | undefined) => any;
}
export interface Request {
  get_products: (data: GetProduct) => any;
  create_product: (data: createProduct) => any;
  get_product: (id: string | undefined) => any;
  delete_product: (id: string | undefined) => any;
}
