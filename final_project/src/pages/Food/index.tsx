import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./style.scss";

const FoodProduct = () => {
  const [foodproduct, setFoodProduct] = useState([{
    id: 0,
    name: "",
    image: "",
  }]);

  const params = useParams();
  console.log(params);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/v1/food-product/${params.id}/`)
      .then((response) => {
        console.log(response.data);
        setFoodProduct(response.data);
      });
  }, [params.id]);

  return (
    <>
      {foodproduct.map((product) => (
        <div className="product__container">
          <div className="product__wrap">
            <div className="product">
              <div className="product__image">
                <img
                  className="product__image-png"
                  src={product.image}
                  alt="foto"
                />
              </div>
              <div className="product__content">
                <h4 className="product__name">{product.name}</h4>
              </div>
            </div>
          </div>
        </div>
      ))}
      ;
    </>
  );
};

export default FoodProduct;
