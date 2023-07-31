import { useEffect } from "react";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { RootState } from "../../../../store";
import { foodcategories } from "../../../../store/actions/foodcategory";
import { FoodCategory } from "./FoodCategory";
import { Link } from "react-router-dom";
import { Routes } from "../../../../constants/Routes";
import "../style.scss";
import { foodcategorySlice } from "../../../../store/reducers/foodcategory";

export const Food = () => {
  const {
    foodcategory,
    loading: isLoading,
    error,
  } = useSelector((state: RootState) => state.foodcategory);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(foodcategories());
  }, []);

  // useEffect(() => {
  //   const savedFoodCategory = window.localStorage.getItem("foodcategory");
  //   if (savedFoodCategory) {
  //     dispatch(
  //       foodcategorySlice.actions.setFoodCategory(
  //         JSON.parse(savedFoodCategory)
  //       )
  //     );
  //   }
  // }, [dispatch]);

  if (error) {
    return (
      <div>
        <h1>{error}</h1>
      </div>
    );
  }

  return (
    <div>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div className="category__container category__container-food">
          <h3 className="category__subtitle">Food</h3>
          <div className="category__wrap">
            {foodcategory.map((category: any) => (
              <Link
                to={Routes.FoodFromCategory.replace(":slug", category.slug)}
              >
                <FoodCategory
                  key={category.id}
                  name={category.name}
                  image={category.image}
                />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Food;
