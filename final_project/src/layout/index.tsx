import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useContext } from "react";
import { LOCAL_STORAGE_KEYS } from "../constants/LocalStorageKeys";
// import { authService } from "../services/auth";
import { useDispatch, useSelector } from "react-redux";
// import { setUser } from "../store/actions/user";
import "./style.scss";
import { ThemeProvider, useTheme } from "../hooks/useTheme";
import { Theme } from "../constants/Theme";
import { Header } from "./Header";
import { Footer } from "./Footer";
import clsx from "clsx";

export const Root = () => {

  const themeValue = useTheme();

  return (
      <ThemeProvider value={themeValue}>
        <div
          className={clsx("wrapper", {
            "wrapper-dark": themeValue.theme === Theme.dark,
          })}
        >
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
  );
};
