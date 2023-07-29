import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { FavoritesItem } from "./FavoritesItem";
import "./index.scss";

const Favorites = () => {
  const { favorites } = useSelector((state: RootState) => state.favorites);

  return (
    <div className="favorites">
      <div className="container">
        <div className="favorites__wrap">
          <h2 className="favorites__title">Favorites</h2>
          {favorites.map((product: any) => (
            <FavoritesItem
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
