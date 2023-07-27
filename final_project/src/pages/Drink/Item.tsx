import { useAppDispatch } from "../../hooks/useAppDispatch";
import { addToCart } from "../../store/reducers/cartSlice";


interface IItem {
  id?: number;
  name: string;
  price: number;
  description: string;
  image: string;
  number_of_drink_glass_sizes: number;
}

function Item({
  id,
  name,
  image,
  price,
  description,
  number_of_drink_glass_sizes,
}: IItem) {
  const dispatch = useAppDispatch();

  return (
    <div className="item">
      <div className="drink__wrapper">
        <div className="drink__wrap">
          <div className="drink__image">
            <img className="drink__image-png" src={image} alt="foto" />
          </div>
          <div className="drink__info">
            <h4 className="drink__name">{name}</h4>
            <p className="drink__price">{price}$</p>
          </div>
        </div>
      </div>
      <div className="drink__content">
        <div className="container">
          <div className="drink__columns">
            <div className="drink__column">
              <div className="drink__size">{number_of_drink_glass_sizes}</div>
              <div className="drink__description">{description}</div>
            </div>
            <div className="drink__column">
              <div className="drink__milk">{price}</div>
              <div className="drink__syrup">{price}</div>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() =>
          dispatch(
            addToCart({
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
    </div>
  );
}

export default Item;
