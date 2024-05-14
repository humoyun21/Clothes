import * as Yup from "yup";

export const signInValidationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/, "Password must be at least 6 characters").required("Password is required"),
})

// ---------- User --------------------

export const userValidationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    gender: Yup.string().required("Gender is required"),
    password: Yup.string().required("Password is required"),
})

// -------------- Category -----------------

export const categoryValidationSchema = Yup.object().shape({
    category_name: Yup.string().required("Category is required"),
})

// -------------- Product -----------------

export const productValidationSchema = Yup.object().shape({
    product_name: Yup.string().required("Product name is required"),
    cost: Yup.number().required("Cost is required"),
    count: Yup.number().required("Count is required"),
    description: Yup.string().required("Description is required"),
    for_gender: Yup.string().required("Gender is required"),
    category_id: Yup.string().required("Product category is required"),
    age_max: Yup.number().required("Max age is required"),
    age_min: Yup.number().required("Min age is required"),
    size: Yup.number().required("Size is required"),
    color: Yup.string().required("Color is required"),
    made_in: Yup.string().required("Made in is required"),
    discount: Yup.number().required("Discount is required"),
})