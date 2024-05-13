import request from '../config'
import {Request} from '../../interface/products'

const product: Request = {
    get_products: (params) => request.get("/products", {params}),
    create_product: (data) => request.post("/product", data),
}

export default product;