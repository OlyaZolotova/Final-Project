// import { removeItem } from "../../store/reducers/favorites";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { removeItem } from "../../store/reducers/favorites";
import "./favoritesItem.scss";
import { addToCart } from "../../store/reducers/cartSlice";


interface IFavoritesItem {
  id: number;
  name: string;
  price: number;
  image: string;
  slug: string;
}

export const FavoritesItem = ({ id, image, name, price, slug }: IFavoritesItem) => {
  const dispatch = useAppDispatch();
  return (
    <div className="favoritesItem">
      <div className="favoritesItem__image">
        <img className="favoritesItem__image-png" src={image} alt="item" />
      </div>
      <p className="favoritesItem__title">{name}</p>
      <div className="favoritesItem__price">
        <p className="favoritesItem__price-value">{price}$</p>
      </div>
      <button
        className="favoritesItem__button"
        onClick={() =>
          dispatch(
            addToCart({
              slug,
              id,
              name,
              image,
              price,
            })
          )
        }
      >
        Add to Cart
      </button>
      <div className="favoritesItem__controls">
        <a
          className="favoritesItem__removeButton"
          onClick={() => dispatch(removeItem(id))}
        >
          <FontAwesomeIcon
            className="favoritesItem__removeButton-svg"
            icon={faTrash}
          />
        </a>
      </div>
    </div>
  );
};

