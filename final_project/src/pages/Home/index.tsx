import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchPosts } from "../../store/actions/bestsellers";
import { CircularProgress } from "@mui/material";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { RootState } from "../../store";
import { Video } from "./Video/Video";
import { Bestseller } from "./Bestellers/Besteller";
import { Categories } from "./Categories/Categories";
import "./style.scss";
import { Info } from "./AboutUs/Categories/AboutUs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";


const Home = () => {
  const {
    bestsellers,
    loading: isLoading,
    error,
  } = useSelector((state: RootState) => state.bestsellers);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

   const settings = {
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 3,
     slidesToScroll: 1,
   };

  if (error) {
    return (
      <div>
        <h1>{error}</h1>
      </div>
    );
  }

  return (
    <div>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div>
          <Video />
          <div className="container" id="features">
            <h2 className="bestsellers__title">Bestsellers</h2>
            <Slider {...settings}>
              {bestsellers.slice(5, 11).map((bestseller: any) => (
                <Bestseller
                  key={bestseller.id}
                  name={bestseller.name}
                  price={bestseller.price}
                  image={bestseller.image}
                  description={bestseller.description}
                />
              ))}
            </Slider>
          </div>
          <Categories />
          <Info />
        </div>
      )}
    </div>
  );
};

export default Home;
