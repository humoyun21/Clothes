export interface GetUser {
  limit: number;
  page: number;
}
export interface createUser {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  gender: any;
}
export interface UsersStore {
  data: any[];
  isLoading: boolean;
  getData: (params: GetUser) => Promise<any>;
  createData: (data: createUser) => Promise<any>;
  deleteData: (data: number) => Promise<any>;
}
export interface Request {
  get_users: (data: GetUser) => any;
  create_user: (data: createUser) => any;
  delete_user: (data: number) => any;
}