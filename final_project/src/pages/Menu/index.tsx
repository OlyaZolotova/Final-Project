
import "./style.scss";
import Drinks from "./Categories/Drinks/DrinksCategories";
import Food  from "./Categories/Food/FoodCategories";

const Menu = () => {
  return (
    <div>
      <Drinks/>
      <Food/>
    </div>
  );
};

export default Menu;
