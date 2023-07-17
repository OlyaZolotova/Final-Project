import { useTheme } from "../../hooks/useTheme";
import { Theme } from "../../constants/Theme";
import { useContext } from "react";
import { ThemeContext } from "../../hooks/useTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export const ThemeSwitcher = () => {
  const { theme, changeTheme } = useContext<any>(ThemeContext);

  return (
    <a
      className="header__icon"
      onClick={
        theme === Theme.light
          ? changeTheme(Theme.dark)
          : changeTheme(Theme.light)
      }
    >
      {theme === Theme.light ? (
        <FontAwesomeIcon className="header__icon-svg" icon={faMoon} />
      ) : (
        <FontAwesomeIcon className="header__icon-svg" icon={faSun} />
      )}
    </a>
  );
};
