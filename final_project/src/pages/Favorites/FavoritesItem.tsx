// import { removeItem } from "../../store/reducers/favorites";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import "./favoritesItem.scss";

interface IFavoritesItem {
  id?: number;
  name: string;
  price: number;
  image: string;
}

export const FavoritesItem = ({ id, image, name, price }: IFavoritesItem) => {
  const dispatch = useAppDispatch();
  return (
    <div className="favoritesItem">
      <div className="favoritesItem__image">
        <img className="favoritesItem__image-png" src={image} alt="item" />
      </div>
      <p className="favoritesItem__title">{name}</p>
      <div className="favoritesItem__price">
        <p className="cartItem__price-value">{price}$</p>
      </div>
      <div className="favoritesItem__controls">
        {/* <a
          className="favoritesItem__removeButton"
          onClick={() => dispatch(removeItem(id))}
        >
          <FontAwesomeIcon
            className="favoritesItem__removeButton-svg"
            icon={faTrash}
          />
        </a> */}
      </div>
    </div>
  );
};

