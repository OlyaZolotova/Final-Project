import { useEffect } from "react";
import { useSelector } from "react-redux";
import { drinkscategories } from "../../../../store/actions/coffeecategory";
import { CircularProgress } from "@mui/material";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { RootState } from "../../../../store";
import { DrinkCategory } from "./DrinkCategory";
import { Link } from "react-router-dom";
import { Routes } from "../../../../constants/Routes";
import "../style.scss";

export const Drinks = () => {
  const {
    coffeecategory,
    loading: isLoading,
    error,
  } = useSelector((state: RootState) => state.coffeecategory);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(drinkscategories());
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
        <div className="category__container">
          <h3 className="category__subtitle">Drinks</h3>
          <div className="category__wrap">
            {coffeecategory.map((category: any) => (
              <Link
                style={{
                  textDecoration: "none",
                  color: "black"
                }}
                to={Routes.DrinksFromCategory.replace(":slug", category.slug)}
              >
                <DrinkCategory
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

export default Drinks;
