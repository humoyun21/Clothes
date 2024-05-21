import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextField, IconButton, InputAdornment, Button } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { signInValidationSchema } from "@validation";
import { Signin } from "@auth-interface";
// import { SignInModal } from "../../components/modals";
import { auth } from "@service";
import { useNavigate } from "react-router-dom";
import Notification from "@notification";
import { useState, useEffect } from "react";
import { getDataFromCookie, setDataToCookie } from "@data-service";
import "./style.scss";

const index = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  // const [modal, setModal] = useState(false);
  const initialValues: Signin = {
    email: "",
    password: "",
  };
  const handleSubmit = async (values: Signin) => {
    try {
      const response = await auth.sign_in(values);
      console.log(response);
      if (response.status === 200) {
        setDataToCookie("token", response?.data?.access_token);
        setDataToCookie("refresh_token", response?.data?.refresh_token);
        navigate("/admin-panel");
        Notification({
          title: "Successfully login",
          type: "success",
        });
      } 
    } catch (error:any) {
      if (error.response.status === 400) {
        Notification({
          title: error?.response?.data?.message,
          type: "error",
        });
      } else if (error.response.status === 404) {
        Notification({
          title: "Email not found",
          type: "error",
        });
      }
      console.error(error);
    }
  };
  const login = () => {
    if (getDataFromCookie("token")) {
      navigate("/admin-panel");
    }
  };
  useEffect(() => {
    login();
  }, []);
  return (
    <>
      {/* <SignInModal
        open={modal}
        handleClose={() => {
          false;
        }}
      /> */}
      <div className="h-screen flex-col flex items-center justify-center gap-8 p-5">
        <h1 className="text-[35px] font-bold sm:text-[40px] md:text-[50px]">
          Login
        </h1>
        <div className="max-w-[600px]">
          <Formik
            initialValues={initialValues}
            validationSchema={signInValidationSchema}
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
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  disabled={isSubmitting}
                  className="mt-5"
                >
                  {isSubmitting ? "Submitting" : "Login"}
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default index;
