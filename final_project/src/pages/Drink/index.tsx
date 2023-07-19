import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./style.scss";

const Drink = () => {
  const [drink, setDrink] = useState([
    {
      id: 0,
      name: "",
      image: "",
      price: 0,
      description: "",
    },
  ]);

  const params = useParams();
  console.log(params);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/v1/drink/${params.id}/`)
      .then((response) => {
        console.log(response.data);
        setDrink(response.data);
      });
  }, [params.id]);

  return (
    <>
      {drink.map((product) => (
        <div className="drink">
          <div className="drink__wrapper">
            <div className="drink__wrap">
              <div className="drink__image">
                <img
                  className="drink__image-png"
                  src={product.image}
                  alt="foto"
                />
              </div>
              <div className="drink__info">
                <h4 className="drink__name">{product.name}</h4>
                <p className="drink__price">{product.price}$</p>
              </div>
            </div>
          </div>
          <div className="drink__content">
            <div className="container">
              <div className="drink__columns">
                <div className="drink__column">
                  <div className="drink__size">{product.price}</div>
                  <div className="drink__description">
                    {product.description}
                  </div>
                </div>
                <div className="drink__column">
                  <div className="drink__milk">{product.price}</div>
                  <div className="drink__syrup">{product.price}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      ;
    </>
  );
};

export default Drink;
