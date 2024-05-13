// --------- Authorization  -------------

export interface Signin {
    email: string,
    password: string,
}

export interface Request{
    sign_in:(data:Signin)=>any,
}


// ------------------------------------