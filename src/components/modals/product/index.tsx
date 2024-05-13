import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Field, Form, Formik } from "formik";
import { TextField } from "@mui/material";
import { createProduct } from "../../../interface/products";
import Radio from "../../ui/gender";
import useProductsStore from "../../../store/products";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  borderRadius: 1.3,
  bgcolor: "background.paper",
  border: "2px solid #fff",
  boxShadow: 24,
  p: 4,
  outline: "none",
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const {createProduct, getData} = useProductsStore()
  const [params] = React.useState({
    page: 1,
    limit: 10,
  });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const initialValues: createProduct = {
    product_name: "",
    color: "",
    size: "",
    made_in: "",
    category_id: "",
    cost: "",
    discount: "",
    count: "",
    description: "",
    age_max: "",
    age_min: "",
    for_gender: "",
  };
  const handleSubmit = async (data: any) => {
    createProduct(data)
    getData(params)
    handleClose();
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Add product
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            className="text-center"
            variant="h6"
            component="h2"
          >
            Add product
          </Typography>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({ isSubmitting }) => (
              <Form>
                <div className="grid grid-cols-2 gap-x-5 justify-between items-center">
                  <Field
                    name="product_name"
                    type="text"
                    as={TextField}
                    label="Product name"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                  />
                  <Field
                    name="color"
                    type="text"
                    as={TextField}
                    label="Color"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                  />
                  <Field
                    name="size"
                    type="number"
                    as={TextField}
                    label="Size"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                  />
                  <Field
                    name="made_in"
                    type="text"
                    fullWidth
                    as={TextField}
                    label="Made in"
                    margin="normal"
                    variant="outlined"
                  />
                  <Field
                    name="category_id"
                    type="text"
                    fullWidth
                    as={TextField}
                    label="Category"
                    margin="normal"
                    variant="outlined"
                  />
                  <Field
                    name="cost"
                    type="number"
                    as={TextField}
                    label="Cost"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                  />
                  <Field
                    name="discount"
                    type="number"
                    as={TextField}
                    label="Discount"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                  />
                  <Field
                    name="count"
                    type="number"
                    as={TextField}
                    label="Count"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                  />
                  <Field
                    name="description"
                    type="text"
                    as={TextField}
                    label="Description"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                  />
                  <Field
                    name="age_max"
                    type="number"
                    as={TextField}
                    label="Age max"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                  />
                  <Field
                    name="age_min"
                    type="number"
                    as={TextField}
                    label="Age min"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                  />
                <Field className="mb-10" name="for_gender" type="text" fullWidth as={Radio} />
                </div>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  disabled={isSubmitting}
                  className="mt-5"
                >
                  {isSubmitting ? "Adding..." : "Add"}
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>
    </div>
  );
}
