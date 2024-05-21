import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import edit from "../../../assets/edit-icon.svg";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button, FormControlLabel, FormLabel, IconButton, InputAdornment, Radio, RadioGroup, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { createUser } from "../../../interface/user";
import { userValidationSchema } from "@validation";
import useUsersStore from "../../../store/users";
import { getDataFromCookie } from "@data-service";

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

export default function BasicModal({ data }: any) {
  const { updateData } = useUsersStore();
  const [open, setOpen] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const access_token = getDataFromCookie("token");
  const refresh_token = getDataFromCookie("refresh_token");
  const initialValues: createUser = {
    email: data.email,
    password: "",
    first_name: data.first_name,
    last_name: data.last_name,
    gender: data.gender,
    age: data.age,
    phone_number: data.phone_number,
  };
  // console.log(data);
  const handleSubmit = async (values: any) => {
    const payload = {
      ...values,
      access_token: access_token,
      refresh_token: refresh_token,
      id: data.id,
    };
    updateData({ ...payload });
    handleClose();
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
          <Typography
            id="modal-modal-title"
            className="text-center"
            variant="h6"
            component="h2"
          >
            Edit User
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
                  type="text"
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
                <Field
                  as={TextField}
                  label="Age"
                  name="age"
                  type="number"
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  helperText={
                    <ErrorMessage
                      name="age"
                      component="span"
                      className="text-[red] text-[15px]"
                    />
                  }
                />
                <Field
                  as={TextField}
                  type="text"
                  label="Phone number"
                  name="phone_number"
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  helperText={
                    <ErrorMessage
                      name="phone_number"
                      component="span"
                      className="text-[red] text-[15px]"
                    />
                  }
                />
                <Field
                  as={RadioGroup}
                  aria-label="gender"
                  name="gender"
                  className="flex items-center mb-3"
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
                </Field>
                <ErrorMessage
                  name="gender"
                  component="p"
                  className="mb-3 text-red-500 text-center"
                />
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
