import { useEffect } from "react";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { RootState } from "../../../../store";
import { foodcategories } from "../../../../store/actions/foodcategory";
import { FoodCategory } from "./FoodCategory";
import "../style.scss";

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
          <h3 className="category__title">Food</h3>
          <div className="category__wrap">
            {foodcategory.map((category: any) => (
              <FoodCategory
                key={category.id}
                name={category.name}
                image={category.image}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Food;
