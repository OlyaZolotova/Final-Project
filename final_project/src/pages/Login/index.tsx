import { Button, CircularProgress } from "@mui/material";
import { Formik, Form } from "formik";
import { useEffect, useState } from "react";
import { DefaultTextField } from "../../components";
import { authService } from "../../services/auth";
import * as Yup from "yup";
import { LOCAL_STORAGE_KEYS } from "../../constants/LocalStorageKeys";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/reducers/user";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../constants/Routes";
import "./style.scss";

const LoginSchema = Yup.object().shape({
  username: Yup.string().min(4, "Too shoort name").required("Required"),
  password: Yup.string().required("Required"),
});

const initialValues = {
  username: "",
  password: "",
};

type FormikValues = typeof initialValues;

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useSelector((store: any) => store.user);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onSubmit = async (values: FormikValues) => {
    try {
      setIsLoading(true);

      const { data: accessRefreshTokens } =
        await authService.getAccessRefreshTokens(values);

      localStorage.setItem(
        LOCAL_STORAGE_KEYS.ACCESS_TOKEN,
        accessRefreshTokens.access
      );
      localStorage.setItem(
        LOCAL_STORAGE_KEYS.REFRESH_TOKEN,
        accessRefreshTokens.refresh
      );

      const { data: user } = await authService.getCurrentUser();
      console.log(user); // Вывод данных пользователя в консоль

      dispatch(setUser(user));
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      return navigate(Routes.Home);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // console.log(id)

  return (
    <div className="login">
      <h2 className="login__title">Login</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={LoginSchema}
      >
        <Form
          className="login__form"
          style={{
            marginTop: 30,
            display: "flex",
            flexDirection: "column",
            maxWidth: 400,
          }}
        >
          <DefaultTextField
            className="register__text"
            label="Username"
            variant="outlined"
            placeholder="Username"
            name="username"
          />
          <DefaultTextField
            label="Password"
            variant="outlined"
            type="password"
            name="password"
          />
          <Button
            variant="contained"
            type="submit"
            endIcon={
              isLoading ? <CircularProgress color="secondary" /> : undefined
            }
          >
            Login
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
