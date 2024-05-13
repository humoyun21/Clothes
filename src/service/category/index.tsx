import request from "../config";
import { Request } from "../../interface/category";

const category: Request = {
    create_category: (data) => request.post("/category", data),
    update_category: (data) => request.put("category", data),
    get_category: (params) => request.get("/categories", {params}),
    delete_category: (id) => request.delete(`/category/${id}`),
    
}

export default category