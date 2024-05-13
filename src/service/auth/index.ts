import request from "../config";
import { Request } from "../../interface/auth";

const auth: Request = {
    sign_in: (data) => request.post("/login", data),
}

export default auth