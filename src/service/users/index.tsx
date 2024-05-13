import { Request } from "../../interface/user";
import request from "../config";

const auth: Request = {

    delete_user: (id) => request.delete(`/user/${id}`),
    get_users: (params) => request.get("/users", {params}),
    create_user: (data) => request.post("/user", data),

}

export default auth