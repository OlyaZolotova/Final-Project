import { useAppDispatch } from "../../hooks/useAppDispatch";
import { addToCart } from "../../store/reducers/cartSlice";
import { addToFavorites } from "../../store/reducers/favorites";


interface IItem {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  number_of_drink_glass_sizes: number;
  slug: string;
}

function Item({
  id,
  name,
  image,
  price,
  description,
  number_of_drink_glass_sizes,
  slug,
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
              <p className="drink__description">{description}</p>
            </div>
            <div className="drink__column">
              <button
                className="drink__button"
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
              <button
                className="drink__button"
                onClick={() =>
                  dispatch(
                    addToFavorites({
                      slug,
                      id,
                      name,
                      image,
                      price,
                    })
                  )
                }
              >
                Add to Fav
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
