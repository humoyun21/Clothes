import request from "../config";
import { Request } from "@auth-interface";

const auth: Request = {
    sign_in: (data) => request.post("/login", data),
}

export default auth