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
        <div className="drinks__container">
          <div className="drinks__wrap">
            <div className="drinks">
              <div className="drinks__image">
                <img
                  className="drinks__image-png"
                  src={product.image}
                  alt="foto"
                />
              </div>
              <a className="drinks__content">
                <h4 className="drinks__name">{product.name}</h4>
              </a>
            </div>
          </div>
        </div>
      ))}
      ;
    </>
  );
};

export default FoodProduct;
