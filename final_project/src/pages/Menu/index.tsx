
import "./style.scss";
import Drinks from "./Categories/Drinks/DrinksCategories";
import Food  from "./Categories/Food/FoodCategories";

const Menu = () => {
  return (
    <div className="category__wrapper">
      <h2 className="category__title">Menu</h2>
      <Drinks/>
      <Food/>
    </div>
  );
};

export default Menu;
