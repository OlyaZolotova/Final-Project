import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./style.scss";
import { Link } from "react-router-dom";
import { Routes } from "../../constants/Routes";

const SearchProduct = () => {
  const [products, setProducts] = useState([
    {
      id: 0,
      name: "",
      image: "",
      slug: "",
    },
  ]);

  const { productSlug } = useParams();

  useEffect(() => {
    axios
      .all([
        axios.get(`http://127.0.0.1:8000/api/v1/drink/${productSlug}`),
        axios.get(`http://127.0.0.1:8000/api/v1/food/${productSlug}`),
      ])
      .then((responses) => {
        const drinksResponse = responses[0].data;
        const foodResponse = responses[1].data;
        const allProducts = [...drinksResponse, ...foodResponse];

        setProducts(allProducts);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [[productSlug]]);

  return (
    <>
      {products.map((product) => (
        <div className="products__container">
          <div className="products__wrap">
            <div className="products">
              <div className="products__image">
                <img
                  className="products__image-png"
                  src={product.image}
                  alt="foto"
                />
              </div>
              <div className="products__content">
                <h4 className="products__name">{product.name}</h4>
              </div>
            </div>
          </div>
        </div>
      ))}
      ;
    </>
  );
};

export default SearchProduct;
