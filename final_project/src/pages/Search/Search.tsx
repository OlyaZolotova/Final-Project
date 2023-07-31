import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Routes } from "../../constants/Routes";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import "./style.scss";

const debounce = (callback: (...args: any) => void, ms: number) => {
  let timerId: NodeJS.Timeout;

  return (...args: any[]) => {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      callback(...args);
    }, ms);
  };
};

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<any[]>([]);
  const [isLoading, setLoading] = useState(false);

  const navigate = useNavigate();
  const goToPage = () => navigate(`/search?query=${search}`);

  const handleSearch = (e: any) => {
    e.preventDefault();

    goToPage();

    setSearch("");
  };

  const Products = async (value: string) => {
    let data1;
    let data2;

    try {
      const drinksArray = await axios.get(
        "http://127.0.0.1:8000/api/v1/drinks/"
      );
      const foodArray = await axios.get("http://127.0.0.1:8000/api/v1/food/");

      data1 = drinksArray.data.drinks;
      data2 = foodArray.data.food;
    } catch (error) {
      console.log("Ошибка при выполнении запроса", error);
    }

    const filteredProducts = [...data1, ...data2].filter((products) =>
      products.name.toLowerCase().includes(value.toLowerCase())
    );

    setProducts(filteredProducts);
  };

  const onChangeInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
  };

  const debouncedRequest = useMemo(() => debounce(Products, 100), [Products]);

  useEffect(() => {
    if (search) {
      setLoading(true);
    } else {
      setLoading(false);
    }

    debouncedRequest(search);
  }, [search]);

  return (
    <form
      onSubmit={handleSearch}
      style={{
        position: "relative",
      }}
    >
      <input
        type="search"
        name="search"
        value={search}
        onChange={onChangeInput}
      />
      <button onClick={goToPage} type="submit">
        Поиск
      </button>
      {(!!products.length || isLoading) && (
        <div>
          {isLoading ? (
            <CircularProgress />
          ) : (
            products.map((product) => (
              <Link
                to={Routes.SearchProduct.replace(":slug", product.slug)}
                onClick={() => setSearch("")}
              >
                <div className="drinks">
                  <div className="drinks__image">
                    <img
                      className="drinks__image-png"
                      src={"http://127.0.0.1:8000"+product.image}
                      alt="foto"
                    />
                  </div>
                  <div className="drinks__content">
                    <h4 className="drinks__name">{product.name}</h4>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      )}
    </form>
  );
};

export default SearchBar;
