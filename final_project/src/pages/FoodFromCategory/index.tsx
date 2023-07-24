import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./style.scss";
import { Link } from "react-router-dom";
import { Routes } from "../../constants/Routes";

const FoodFromCategory = () => {
  const [food, setFood] = useState([
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
      .get(`http://127.0.0.1:8000/api/v1/food-from-category/${params.slug}/`)
      .then((response) => {
        console.log(response.data);
        setFood(response.data);
      });
  }, [params.slug]);

  return (
    <div className="food__container">
      <div className="food__links">
        <Link to={Routes.Home}>
          <a className="food__link">Main</a>
        </Link>
        <p className="food__link">/</p>
        <Link to={Routes.Menu}>
          <a className="food__link">Menu</a>
        </Link>
        <p className="food__link">/</p>
        <p className="food__link">Food</p>
      </div>
      <div className="food__wrap">
        {food.map((item) => (
          <>
            <Link
              to={Routes.FoodProduct.replace(":id", item.id.toString())}
              key={item.id}
            >
              <div className="food">
                <div className="food__image">
                  <img
                    className="food__image-png"
                    src={item.image}
                    alt="foto"
                  />
                </div>
                <div className="food__content">
                  <h4 className="food__name">{item.name}</h4>
                </div>
              </div>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default FoodFromCategory;
