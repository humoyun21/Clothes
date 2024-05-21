import request from '../config'
import {Request} from '../../interface/products'

const product: Request = {
    get_products: (params) => request.get("/products", {params}),
    get_product: (id) => request.get(`/product/${id}`),
    delete_product: (id) => request.delete(`/product/${id}`),
    // update_product: (data) => request.put("/product", data),
    create_product: (data) => request.post("/product", data),
}

export default product;