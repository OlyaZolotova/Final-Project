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
    <div className="drinks__container">
      <div className="drinks__wrap">
        {food.map((item) => (
          <Link
            to={Routes.FoodProduct.replace(":id", item.id.toString())}
            key={item.id}
          >
            <div className="drinks">
              <div className="drinks__image">
                <img
                  className="drinks__image-png"
                  src={item.image}
                  alt="foto"
                />
              </div>
              <div className="drinks__content">
                <h4 className="drinks__name">{item.name}</h4>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FoodFromCategory;
