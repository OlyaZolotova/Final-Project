import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { FavoritesItem } from "./FavoritesItem";
import "./index.scss";
import { useEffect } from "react";
import { setUser } from "../../store/reducers/user";
import { authService } from "../../services/auth";
import { LOCAL_STORAGE_KEYS } from "../../constants/LocalStorageKeys";
import { useAppDispatch } from "../../hooks/useAppDispatch";

const Favorites = () => {
  const { favorites } = useSelector((state: RootState) => state.favorites);

const { username } = useSelector((state: RootState) => state.user);

const dispath = useAppDispatch();

const authUser = async () => {
  const accessToken = localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);

  if (accessToken) {
    try {
      const { data } = await authService.getCurrentUser();

      dispath(setUser(data));
    } catch (error) {}
  }
};

useEffect(() => {
  authUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

console.log(username);

if (!username) {
  return <p>Войдите в личный кабинет</p>;
}

  return (
    <div className="favorites">
      <div className="container">
        <div className="favorites__wrap">
          <h2 className="favorites__title">Favorites</h2>
          {favorites.map((product: any) => (
            <FavoritesItem
              slug={product.slug}
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
