import { useContext } from "react";
import "./style.scss";
import { ThemeContext } from "../../hooks/useTheme";
import { Theme } from "../../constants/Theme";
import { clsx } from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  const { theme } = useContext<any>(ThemeContext);

  return (
    <footer
      className={clsx("footer", {
        "footer-dark": theme === Theme.dark,
      })}
    >
        <div className="container">
      <div className="footer__top">
        <div className="footer__content">
          <article className="footer__info">
            <h3 className="footer__title">Location</h3>
            <p className="footer__text">
              220012, Minsk, Independence Avenue, 90
            </p>
          </article>
          <article className="footer__info">
            <h3 className="footer__title footer__title-center">social media</h3>
            <div className="footer__icons">
              <a className="footer__icon">
                <FontAwesomeIcon
                  className="footer__icon-svg"
                  icon={faTelegram}
                />
              </a>
              <a className="footer__icon">
                <FontAwesomeIcon className="footer__icon-svg"  icon={faInstagram} />
              </a>
              <a className="footer__icon">
                <FontAwesomeIcon
                  className="footer__icon-svg"
                  icon={faFacebook}
                />
              </a>
            </div>
          </article>
          <article className="footer__info">
            <h3 className="footer__title">About GoldStar</h3>
            <p className="footer__text">
              Cozy coffee shop in the heart of Minsk
            </p>
          </article>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <p className="footer__bottom-text">
            Copyright © 2023 GoldStar. All Rights Reserved Made with 
            <span className="footer__bottom-white"> by Olga Zolotova</span>
          </p>
        </div>
      </div>
      </div>
    </footer>
  );
};
