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
      <div className="product__wrapper">
        <div className="product__wrap">
          <div className="product__image">
            <img className="product__image-png" src={image} alt="foto" />
          </div>
          <div className="product__info">
            <h4 className="product__name">{name}</h4>
            <p className="product__price">{price}$</p>
          </div>
        </div>
      </div>
      <div className="product__content">
        <div className="container">
          <div className="product__columns">
            <div className="product__column">
              <p className="product__description">{description}</p>
            </div>
            <div className="product__column">
              <button
                className="product__button"
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
                className="product__button"
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
