import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./style.scss";
import { Link } from "react-router-dom";
import { Routes } from "../../constants/Routes";

const DrinksFromCategory = () => {
  const [drinks, setDrinks] = useState([
    {
      id: 0,
      slug: "",
      name: "",
      image: "",
    },
  ]);

  const params = useParams();
  console.log(params);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/v1/drinks-from-category/${params.slug}/`)
      .then((response) => {
        setDrinks(response.data);
      });
  }, [params.slug]);

  return (
    <div className="drinks__container">
      <div className="drinks__links">
        <Link to={Routes.Home}>
          <a className="drinks__link">Main</a>
        </Link>
        <p className="drinks__link">/</p>
        <Link to={Routes.Menu}>
          <a className="drinks__link">Menu</a>
        </Link>
        <p className="drinks__link">/</p>
        <p className="drinks__link">Food</p>
      </div>
      <div className="drinks__wrap">
        {drinks.map((drink) => (
          <Link
            to={Routes.Drink.replace(":id", drink.id.toString())}
            key={drink.id}
          >
            <div className="drinks">
              <div className="drinks__image">
                <img
                  className="drinks__image-png"
                  src={drink.image}
                  alt="foto"
                />
              </div>
              <div className="drinks__content">
                <h4 className="drinks__name">{drink.name}</h4>
              </div>
            </div>
          </Link>
        ))}
        ;
      </div>
    </div>
  );
};

export default DrinksFromCategory;
