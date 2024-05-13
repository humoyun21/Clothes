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
  getData: (params: GetProduct) => Promise<any>;
  createProduct: (data: createProduct) => Promise<any>;
}
export interface Request {
  get_products: (data: GetProduct) => any;
  create_product: (data: createProduct) => any;
}