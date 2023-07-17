import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DrinksFromCategory = () => {
  const [drinks, setDrinks] = useState({
    slug: "",
    name: "",
    image: "",
  });

  const params = useParams();
  console.log(params);

  useEffect(() => {
    axios
      .get(
        `http://127.0.0.1:8000/api/v1/drinks-from-category/${params.slug}/`
      )
      .then((response) => {
        setDrinks(response.data);
      });
  }, []);


  return (
    <div className="container">
      <div className="drink">
        <h1 className="drinks__title">{drinks.name}</h1>
        <div className="drinks__image">
          <img className="drinks__image-jpg" src={drinks.image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DrinksFromCategory;
