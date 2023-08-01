import { useContext } from "react";
import { NavPanel } from "../NavPanel";
import "./style.scss";
import { ThemeContext } from "../../hooks/useTheme";
import { Theme } from "../../constants/Theme";
import { clsx } from "clsx";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHeart,
  faBasketShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { Link } from "react-router-dom";
import { Routes } from "../../constants/Routes";
import { useState } from "react";
import { useEffect } from "react";
import { ShoppingCart } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store";

export const Header = () => {
  const { theme } = useContext<any>(ThemeContext);

  // const user = useSelector((store: any) => store.user);

  // const headerStyle = {
  //   backgroundColor: "",
  // };

  // if (window.location.pathname === "/") {
  //   headerStyle.backgroundColor = "transparent";
  // } else {
  //   headerStyle.backgroundColor = "black";
  // }
  const [headerStyle, setHeaderStyle] = useState({ backgroundColor: "" });

  useEffect(() => {
    const updateHeaderStyle = () => {
      if (window.location.pathname === "/") {
        setHeaderStyle({ backgroundColor: "transparent" });
      } else {
        setHeaderStyle({ backgroundColor: "black" });
      }
    };

    updateHeaderStyle(); // Вызываем функцию сразу для установки начального стиля

    // Добавляем слушатель события изменения маршрута
    window.addEventListener("popstate", updateHeaderStyle);

    // Очищаем слушатель при размонтировании компонента
    return () => {
      window.removeEventListener("popstate", updateHeaderStyle);
    };
  }, []);

  const { cart } = useSelector((state: RootState) => state.cart);

  const getTotalQuantity = (): number => {
    let total = 0;
    cart.map((item: any) => {
      total += item.quantity;
    });
    return total;
  };



  return (
    <header className="header" style={headerStyle}>
      <div className="container">
        <div
          className={clsx("header__wrapper", {
            "header__wrapper-dark": theme === Theme.dark,
          })}
        >
          <Link to={Routes.Home}>
            <a className="header__wrap" href="#">
              <img className="header__logo" src="/Group 1.svg" />
            </a>
          </Link>
          <nav className="header__nav">
            <ul className="header__menu">
              <Link to={Routes.Menu}>
                <li className="header__menu-list">
                  <a className="header__menu-link" href="#features">
                    menu
                  </a>
                </li>
              </Link>
              <Link to={Routes.CoffeeBuilder}>
                <li className="header__menu-list">
                  <a className="header__menu-link" href="#works">
                    coffee builder
                  </a>
                </li>
              </Link>
              <Link to={Routes.Information}>
                <li className="header__menu-list">
                  <a className="header__menu-link" href="#team">
                    information
                  </a>
                </li>
              </Link>
            </ul>
            {/* <div class="hamburger">
              <svg
                class="hamburger__icon"
                width="24"
                height="18"
                viewBox="0 0 24 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0H24V3H0V0ZM0 7.5H24V10.5H0V7.5ZM0 15H24V18H0V15Z"
                  fill="white"
                />
              </svg>
            </div> */}
          </nav>
          <div className="header__wrapper-icon">
            <Link to={Routes.SearchBar}>
              <a className="header__icon" href="#">
                <FontAwesomeIcon
                  className="header__icon-svg"
                  icon={faMagnifyingGlass}
                />
              </a>
            </Link>
            <Link to={Routes.Register}>
              <a className="header__icon" href="#">
                <FontAwesomeIcon className="header__icon-svg" icon={faUser} />
              </a>
            </Link>
            <Link to={Routes.Cart}>
              <a className="header__icon" href="#">
                <FontAwesomeIcon
                  className="header__icon-svg"
                  icon={faBasketShopping}
                />
                <p className="header__text">{getTotalQuantity() || 0}</p>
              </a>
            </Link>
            <Link to={Routes.Favorites}>
              <a className="header__icon" href="#">
                <FontAwesomeIcon className="header__icon-svg" icon={faHeart} />
              </a>
            </Link>
            <ThemeSwitcher />
          </div>
          {/* <h3 className="header__username">{user && user?.username}</h3> */}
        </div>
      </div>
    </header>
  );
};
