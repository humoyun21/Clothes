import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ErrorMessage, Field, Form, Formik } from "formik";
import {
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { createProduct } from "../../../interface/products";
import FormLabel from "@mui/material/FormLabel";
import useProductsStore from "../../../store/products";
import { productValidationSchema } from "@validation";
import useCategoryStore from "../../../store/category";

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
  const { createProduct, getData } = useProductsStore();
  const { getCategory, data } = useCategoryStore();
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
    await createProduct(data);
    await getData(params);
    handleClose();
  };
  const categories = () => {
    getCategory(params);
  };
  return (
    <div>
      <div onClick={() => categories()}>
        <Button variant="contained" onClick={handleOpen}>
          Add product
        </Button>
      </div>
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
            sx={{ mb: 2 }}
          >
            Add product
          </Typography>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={productValidationSchema}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="grid grid-cols-2 gap-y-3 gap-x-5 justify-between items-center">
                  <Field
                    name="product_name"
                    type="text"
                    as={TextField}
                    label="Product name"
                    fullWidth
                    margin="none"
                    variant="outlined"
                    helperText={
                      <ErrorMessage
                        name="product_name"
                        component="span"
                        className="text-[red] text-[15px]"
                      />
                    }
                  />
                  <Field
                    name="color"
                    type="text"
                    as={TextField}
                    label="Color"
                    fullWidth
                    margin="none"
                    variant="outlined"
                    helperText={
                      <ErrorMessage
                        name="color"
                        component="span"
                        className="text-[red] text-[15px]"
                      />
                    }
                  />
                  <Field
                    name="size"
                    type="number"
                    as={TextField}
                    label="Size"
                    fullWidth
                    margin="none"
                    variant="outlined"
                    helperText={
                      <ErrorMessage
                        name="size"
                        component="span"
                        className="text-[red] text-[15px]"
                      />
                    }
                  />
                  <Field
                    name="made_in"
                    type="text"
                    fullWidth
                    as={TextField}
                    label="Made in"
                    select
                    margin="none"
                    variant="outlined"
                    helperText={
                      <ErrorMessage
                        name="made_in"
                        component="span"
                        className="text-[red] text-[15px]"
                      />
                    }
                  >
                    <MenuItem value="Uzbekistan">Uzbekistan</MenuItem>
                    <MenuItem value="Turkey">Turkey</MenuItem>
                    <MenuItem value="China">China</MenuItem>
                  </Field>
                  <Field
                    name="category_id"
                    type="text"
                    as={TextField}
                    label="Category"
                    select
                    className="relative"
                    margin="none"
                    variant="outlined"
                    fullWidth
                    helperText={
                      <ErrorMessage
                        name="category_id"
                        component="span"
                        className="text-[red] text-[15px]"
                      />
                    }
                  >
                    <MenuItem value="">Select category</MenuItem>
                    {data?.map((item: any, index: number) => (
                      <MenuItem key={index} value={item.category_id}>
                        {item.category_name}
                      </MenuItem>
                    ))}
                  </Field>
                  <Field
                    name="cost"
                    type="number"
                    as={TextField}
                    label="Cost"
                    fullWidth
                    margin="none"
                    variant="outlined"
                    helperText={
                      <ErrorMessage
                        name="cost"
                        component="span"
                        className="text-[red] text-[15px]"
                      />
                    }
                  />
                  <Field
                    name="discount"
                    type="number"
                    as={TextField}
                    label="Discount"
                    fullWidth
                    margin="none"
                    variant="outlined"
                    helperText={
                      <ErrorMessage
                        name="discount"
                        component="span"
                        className="text-[red] text-[15px]"
                      />
                    }
                  />
                  <Field
                    name="count"
                    type="number"
                    as={TextField}
                    label="Count"
                    fullWidth
                    margin="none"
                    variant="outlined"
                    helperText={
                      <ErrorMessage
                        name="count"
                        component="span"
                        className="text-[red] text-[15px]"
                      />
                    }
                  />
                  <Field
                    name="description"
                    type="text"
                    as={TextField}
                    label="Description"
                    fullWidth
                    margin="none"
                    variant="outlined"
                    helperText={
                      <ErrorMessage
                        name="description"
                        component="span"
                        className="text-[red] text-[15px]"
                      />
                    }
                  />
                  <Field
                    name="age_max"
                    type="number"
                    as={TextField}
                    label="Age max"
                    fullWidth
                    margin="none"
                    variant="outlined"
                    helperText={
                      <ErrorMessage
                        name="age_max"
                        component="span"
                        className="text-[red] text-[15px]"
                      />
                    }
                  />
                  <Field
                    name="age_min"
                    type="number"
                    as={TextField}
                    label="Age min"
                    fullWidth
                    margin="none"
                    variant="outlined"
                    helperText={
                      <ErrorMessage
                        name="age_min"
                        component="span"
                        className="text-[red] text-[15px]"
                      />
                    }
                  />
                  <Field
                    as={RadioGroup}
                    aria-label="for_gender"
                    name="for_gender"
                    className="flex items-center mb-3"
                    margin="none"
                  >
                    <FormLabel id="demo-row-radio-buttons-group-label">
                      Gender
                    </FormLabel>
                    <div className="flex items-center justify-between">
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                    </div>
                    <ErrorMessage
                      name="for_gender"
                      component="span"
                      className="text-[red] text-[15px]"
                    />
                  </Field>
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
