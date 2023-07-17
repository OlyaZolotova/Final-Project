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

export const Header = () => {
  const { theme } = useContext<any>(ThemeContext);

  const user = useSelector((store: any) => store.user);

  return (
    <header className="header">
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
              <li className="header__menu-list">
                <a className="header__menu-link" href="#works">
                  coffee constructor
                </a>
              </li>
              <li className="header__menu-list">
                <a className="header__menu-link" href="#team">
                  contacts
                </a>
              </li>
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
            <a className="header__icon" href="#">
              <FontAwesomeIcon
                className="header__icon-svg"
                icon={faMagnifyingGlass}
              />
            </a>
            <a className="header__icon" href="#">
              <FontAwesomeIcon className="header__icon-svg" icon={faUser} />
            </a>
            {/* <FontAwesomeIcon className="header__icon" icon={faSun} /> */}
            <a className="header__icon" href="#">
              <FontAwesomeIcon
                className="header__icon-svg"
                icon={faBasketShopping}
              />
            </a>
            <a className="header__icon" href="#">
              <FontAwesomeIcon className="header__icon-svg" icon={faHeart} />
            </a>
            <ThemeSwitcher />
          </div>
          {/* <h3 className="header__username">{user && user?.username}</h3> */}
        </div>
      </div>
    </header>
  );
};
