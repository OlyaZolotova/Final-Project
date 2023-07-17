import "./style.scss";



export const Categories = () => {
  return (
    <div className="categories">
      <a className="categories__wrap" href="#">
        <img className="categories__jpg" src="/coffee.jpg" />
        <div className="categories__content">
          <h5 className="categories__title">coffee</h5>
          <p className="categories__text">Go on page</p>
        </div>
      </a>
      <a className="categories__wrap" href="#">
        <img className="categories__jpg" src="/food.jpg" />
        <div className="categories__content">
          <h5 className="categories__title">food</h5>
          <p className="categories__text">Go on page</p>
        </div>
      </a>
    </div>
  );
};

