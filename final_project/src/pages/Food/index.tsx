import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./style.scss";
import { Link } from "react-router-dom";
import { Routes } from "../../constants/Routes";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Item from "./Item";
import { ShoppingCart } from "@mui/icons-material";

const FoodProduct = () => {
  const [foodproduct, setFoodProduct] = useState([
    {
      id: 0,
      name: "",
      image: "",
      price: 0,
      description: "",
      number_of_drink_glass_sizes: 0,
      slug: "",
    },
  ]);
  const navigate = useNavigate();

  const { cart } = useSelector((state: RootState) => state.cart);

  const getTotalQuantity = (): number => {
    let total = 0;
    cart.map((item: any) => {
      total += item.quantity;
    });
    return total;
  };

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
        <div className="product">
          <div className="product__links">
            <Link to={Routes.Home}>
              <a className="product__link">Main</a>
            </Link>
            <p className="product__link">/</p>
            <Link to={Routes.Menu}>
              <a className="product__link">Menu</a>
            </Link>
            <p className="product__link">/</p>
            <Link to={Routes.FoodFromCategory}>
              <a className="product__link">Food</a>
            </Link>
            <p className="product__link">/</p>
            <p className="product__link">{product.name}</p>
          </div>
          <Item
            slug={product.slug}
            id={product.id}
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            description={product.description}
            number_of_drink_glass_sizes={product.number_of_drink_glass_sizes}
          />
          <div className="shopping-cart" onClick={() => navigate("/cart")}>
            <ShoppingCart id="cartIcon" />
            <p>{getTotalQuantity() || 0}</p>
          </div>
        </div>
      ))}
      ;
    </>
  );
};

export default FoodProduct;
