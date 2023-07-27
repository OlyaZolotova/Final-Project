import { Button, CircularProgress } from "@mui/material";
import { Form, Formik } from "formik";
import { DefaultTextField } from "../../components";
import * as Yup from "yup";
import { authService } from "../../services/auth";
import { useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { Routes } from "../../constants/Routes";

const RegisterSchema = Yup.object().shape({
  username: Yup.string().min(4, "Too shoort name").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Too short password. At least 8 characters")
    .required("Required"),
});

const initialValues = {
  username: "",
  email: "",
  password: "",
};

type FormikValues = typeof initialValues;

const Register = () => {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (values: FormikValues) => {
    try {
      setIsLoading(true);

      const { data: user } = await authService.register(values);

      setUser(user);
    } catch (error) {
      console.dir(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (user) {
    return <h1>Dear {user.username}, pls verify your email</h1>;
  }

  return (
    <div className="register">
      <h2 className="register__title">Registretion</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={RegisterSchema}
        onSubmit={onSubmit}
      >
        <Form className="register__form">
          <DefaultTextField
            className="register__text"
            label="Username"
            variant="outlined"
            placeholder="Username"
            name="username"
          />
          <DefaultTextField
            className="register__text"
            label="Email"
            variant="outlined"
            name="email"
          />
          <DefaultTextField
            className="register__text"
            label="Password"
            variant="outlined"
            type="password"
            name="password"
          />
          <Button
            // className="form__button"
            color="secondary"
            variant="contained"
            type="submit"
            endIcon={
              isLoading ? <CircularProgress color="secondary" /> : undefined
            }
          >
            Register
          </Button>
        </Form>
      </Formik>
      <Link to={Routes.Login}>
        <a className="register__link">If you are already registered please login.</a>
      </Link>
    </div>
  );
};

export default Register;
