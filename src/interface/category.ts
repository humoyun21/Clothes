export interface GetCategory {
    page: number;
    limit: number;
}
export interface CreateCategory {
    category_name: string;
}

export interface Request {
    get_category: (data: GetCategory) => any;
    delete_category: (id: number) => any;
    create_category: (data: CreateCategory) => any;
    update_category: (data: CreateCategory) => any;
}

export interface CategoryStore {
    data: any[];
    isLoading: boolean;
    totalCount: number;
    getCategory: (data: GetCategory) => Promise<any>;
    deleteCategory: (id: number) => Promise<any>;
    createCategory: (data: CreateCategory) => Promise<any>;
    updateCategory: (data: CreateCategory) => Promise<any>;
}