import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./style.scss";
import { Link } from "react-router-dom";
import { Routes } from "../../constants/Routes";
import { ShoppingCart } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Item from "./Item";
// import CupChoose from "./CupChoose";

const Drink = () => {
  const [drink, setDrink] = useState([
    {
      id: 0,
      name: "",
      image: "",
      price: 0,
      description: "",
      number_of_drink_glass_sizes: 0,
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

  // const [cupSizes, setCupSizes] = useState([]);

  const params = useParams();
  console.log(params);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/v1/drink/${params.id}/`)
      .then((response) => {
        setDrink(response.data);
        console.log(response.data);
        // setCupSizes(
        //   Array.from({ length: response.data.number_of_drink_glass_sizes })
        // );
      });
  }, []);

  return (
    <>
      {drink.map((product) => (
        <div className="drink">
          <div className="drink__links">
            <Link to={Routes.Home}>
              <a className="drink__link">Main</a>
            </Link>
            <p className="drink__link">/</p>
            <Link to={Routes.Menu}>
              <a className="drink__link">Menu</a>
            </Link>
            <p className="drink__link">/</p>
            <Link to={Routes.DrinksFromCategory}>
              <a className="drink__link">Drinks</a>
            </Link>
            <p className="drink__link">/</p>
            <p className="drink__link">{product.name}</p>
          </div>
          <Item
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
    </>
  );
};

export default Drink;
