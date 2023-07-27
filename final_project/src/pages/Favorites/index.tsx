import React, { useState, useEffect } from "react";

const Favorites = () => {
//   const [favorites, setFavorites] = useState([]);

//   useEffect(() => {
//     // Получите параметры из URL
//     const searchParams = new URLSearchParams(props.location.search);
//     const productId = searchParams.get("productId");

//     if (productId) {
//       // Поиск товара по его идентификатору (productId) и добавление в избранное
//       const product = 
//         setFavorites([...favorites, product]);
//     }
//   }, []);

  return (
    <div>
      <h1>Избранное</h1>
      {/* {favorites.length === 0 ? (
        <p>Нет добавленных товаров в избранное</p>
      ) : (
        <ul>
          {favorites.map((product, index) => (
            <li key={index}>{product.name}</li>
          ))}
        </ul>
      )} */}
    </div>
  );
};

export default Favorites;
