import "./cartItem.scss";
import {
  decrementQuantity,
  removeItem,
  incrementQuantity,
} from "../../../store/reducers/cartSlice";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faChevronUp,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

interface ICartItem {
  id?: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

function CartItem({ id, image, name, price, quantity }: ICartItem) {
  const dispatch = useAppDispatch();

  return (
    <div className="cartItem">
      <div className="cartItem__image">
        <img className="cartItem__image-png" src={image} alt="item" />
      </div>
      <p className="cartItem__title">{name}</p>
      <div className="cartItem__count">
        <a onClick={() => dispatch(incrementQuantity(id))}>
          <FontAwesomeIcon icon={faChevronUp} />
        </a>
        <p>{quantity}</p>
        <a onClick={() => dispatch(decrementQuantity(id))}>
          <FontAwesomeIcon icon={faChevronDown} />
        </a>
      </div>
      <div className="cartItem__price">
        <p className="cartItem__price-value">{price}$</p>
      </div>
      <div className="cartItem__controls">
        <a
          className="cartItem__removeButton"
          onClick={() => dispatch(removeItem(id))}
        >
          <FontAwesomeIcon
            className="cartItem__removeButton-svg"
            icon={faTrash}
          />
        </a>
      </div>
    </div>
  );
}

export default CartItem;
