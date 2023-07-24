import "./style.scss";
import { Link } from "react-router-dom";
import { Routes } from "../../../constants/Routes";

export const Categories = () => {
  return (
    <div className="categories">
      <Link to={Routes.Menu}>
        <a className="categories__wrap">
          <img className="categories__jpg" src="/coffee.jpg" />
          <div className="categories__content">
            <h5 className="categories__title">drinks</h5>
            <p className="categories__text">Go on page</p>
          </div>
        </a>
      </Link>
      <Link to={Routes.Menu}>
        <a className="categories__wrap">
          <img className="categories__jpg" src="/food.jpg" />
          <div className="categories__content">
            <h5 className="categories__title">food</h5>
            <p className="categories__text">Go on page</p>
          </div>
        </a>
      </Link>
    </div>
  );
};

