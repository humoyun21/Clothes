import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { TextField } from "@mui/material";
import { CreateCategory } from "../../../interface/category";
import useCategoryStore from "../../../store/category";
import { ModalProps } from "@global-interface";
import { categoryValidationSchema } from "../../../utils/validations";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  borderRadius: 1.3,
  bgcolor: "background.paper",
  border: "2px solid #fff",
  boxShadow: 24,
  p: 3,
  outline: "none",
};

export default function BasicModal({ open, handleClose, item }: ModalProps) {
  const { createCategory, updateCategory } = useCategoryStore();
  const initialValues: CreateCategory = {
    category_name: item.category_name || "",
  };
  const handleSubmit = (values: any) => {
    if (!item.category_id) {
      createCategory(values);
    } else {
      updateCategory({...values, category_id: item.category_id });
    }
    handleClose();
  };
  return (
    <>
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
            {!item.category_id ? "Add category" : "Edit category"}
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={categoryValidationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field
                  name="category_name"
                  type="text"
                  as={TextField}
                  label="Category name"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  helperText={
                    <ErrorMessage
                      name="category_name"
                      component="span"
                      className="text-[red] text-[15px]"
                    />
                  }
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  disabled={isSubmitting}
                  className="mt-5"
                >
                  {!item.category_id
                    ? isSubmitting
                      ? "Adding..."
                      : "Add"
                    : isSubmitting
                    ? "Editing..."
                    : "Edit"}
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>
    </>
  );
}
