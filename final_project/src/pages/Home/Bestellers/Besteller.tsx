import "./style.scss";


interface IBestseller {
  name: string;
  price: number;
  description: string;
  image: string;
}

export const Bestseller = ({ name, price, description, image}: IBestseller) => {


  return (
      <div className="bestseller">
        <div className="bestseller__image">
          <img
            className="bestseller__image-png"
            src={"http://127.0.0.1:8000" + image}
            alt="foto"
          />
        </div>
        <div className="bestseller__content">
          <p className="bestseller__price">{price} $</p>
          <h4 className="bestseller__name">{name}</h4>
          <p className="bestseller__description">{description}</p>
        </div>
      </div>
  );
};

