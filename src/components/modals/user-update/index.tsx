import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import edit from "../../../assets/edit-icon.svg";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import Radio from '../../ui/gender'
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { createUser } from "../../../interface/user";
import { userValidationSchema } from "@validation";

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
  p: 2,
  outline: "none",
};

export default function BasicModal({data}:any) {
  const [open, setOpen] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const initialValues: createUser = {
    email: data.email || "",
    password: data.password || "",
    first_name: data.first_name || "",
    last_name: data.last_name || "",
    gender: data.gender || "",
  };
  const handleSubmit = async (values:any) => {
    
    console.log(values);
  };

  return (
    <div>
      <img
        className="border border-gray-300 p-[9px] rounded-md active:bg-gray-300 duration-150 bg-gray-200 cursor-pointer"
        src={edit}
        alt="delate"
        onClick={handleOpen}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" className='text-center' variant="h6" component="h2">
            Add user
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={userValidationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field
                  name="email"
                  type="email"
                  as={TextField}
                  label="Email"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  helperText={
                    <ErrorMessage
                      name="email"
                      component="span"
                      className="text-[red] text-[15px]"
                    />
                  }
                />
                <Field
                  name="password"
                  type={showPassword ? "text" : "password"}
                  as={TextField}
                  label="Password"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  helperText={
                    <ErrorMessage
                      name="password"
                      component="span"
                      className="text-[red] text-[15px]"
                    />
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Field
                  name="first_name"
                  type="text"
                  as={TextField}
                  label="First name"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  helperText={
                    <ErrorMessage
                      name="email"
                      component="span"
                      className="text-[red] text-[15px]"
                    />
                  }
                />
                <Field
                  name="last_name"
                  type= "text"
                  as={TextField}
                  label="Last name"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  helperText={
                    <ErrorMessage
                      name="last_name"
                      component="span"
                      className="text-[red] text-[15px]"
                    />
                  }
                />
                <Radio />
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
