import "../style.scss";

interface ICoffeeCategory {
  name: string;
  image: string;
}

export const DrinkCategory = ({ name, image }: ICoffeeCategory) => {
  return (
      <div className="category">
        <div className="category__image">
          <img
            className="category__image-png"
            src={"http://127.0.0.1:8000" + image}
            alt="foto"
          />
        </div>
        <a className="category__content">
          <h4 className="category__name">{name}</h4>
        </a>
      </div>
  );
};
