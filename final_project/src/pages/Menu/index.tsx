import "./style.scss";
import Drinks from "./Categories/Drinks/DrinksCategories";
import Food from "./Categories/Food/FoodCategories";
import { useState, useEffect } from "react";

const Menu = () => {
  // const [dataLoaded, setDataLoaded] = useState(false);

  // useEffect(() => {
  //   if (!dataLoaded) {
  //     setDataLoaded(true)
  //   }
  // }, [dataLoaded]);

  return (
    <div className="category__wrapper">
      <h2 className="category__title">Menu</h2>
      <Drinks />
      <Food />
    </div>
  );
};

export default Menu;
