import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./layout";
import { Routes } from "./constants/Routes";
import Home from "./pages/Home";
// import Register from "./pages/Register";
// import Verify from "./pages/Verify";
// import Login from "./pages/Login";
import Menu from "./pages/Menu/index";
import DrinksFromCategory from "./pages/DrinksFromCategory";
import Drink from "./pages/Drink";
import FoodFromCategory from "./pages/FoodFromCategory";
import FoodProduct from "./pages/Food";
import SearchBar from "./layout/Search/Search";
import Information from "./pages/Information";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Verify from "./pages/Verify";

// sass installation: npm install node-sass

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: Routes.Home,
        element: <Home />,
      },
      {
        path: Routes.Register,
        element: <Register />,
      },
      {
        path: Routes.Login,
        element: <Login />,
      },
      {
        path: Routes.Verify,
        element: <Verify />,
      },
      {
        path: Routes.Menu,
        element: <Menu />,
      },
      {
        path: Routes.DrinksFromCategory,
        element: <DrinksFromCategory />,
      },
      {
        path: Routes.Drink,
        element: <Drink />,
      },
      {
        path: Routes.FoodFromCategory,
        element: <FoodFromCategory />,
      },
      {
        path: Routes.FoodProduct,
        element: <FoodProduct />,
      },
      {
        path: Routes.SearchBar,
        element: <SearchBar />,
      },
      {
        path: Routes.Information,
        element: <Information />,
      },
    ],
  },
]);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
