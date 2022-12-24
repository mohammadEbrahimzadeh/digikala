import React, { useEffect, useState, useRef } from "react";
import HomePage from "../../Apis/HomePage";
import Slider from "./../../GolobalComponents/Slider/Slider";
import Incredible from "../../GolobalComponents/incredibles/Incredible";
import CategoriesItemsHome from "./components/CategoriesItemsHome/CategoriesItemsHome";
import RecommendationSubCategories from "./components/RecommendationSubCategories/RecommendationSubCategories";
import SuggestionForYou from "./components/SuggestionForYou/SuggestionForYou";
import DigiplusBaner from "./components/DigiplusBaner/DigiplusBaner";
import BestSelling from "./components/BestSelling/BestSelling";
import Loader from "../../GolobalComponents/Loader/Loader";
export default function Home() {
  let dataListForSuggestionBoxs = [
    { id: 1, Title: "ساعت هوشمند", idCategory: "wearable-gadget" },
    {
      id: 2,
      Title: "هدست و هندزفری",
      idCategory: "headphone-headset-microphone",
    },
    { id: 3, Title: "کیف و کاور گوشی", idCategory: "cell-phone-pouch-cover" },
    { id: 4, Title: "گوشی موبایل", idCategory: "mobile-phone" },
    { id: 5, Title: "پوشاک مردانه", idCategory: "mens-apparel" },
    { id: 6, Title: "پوشاک زنانه", idCategory: "womens-apparel" },
    { id: 7, Title: "لوازم آرایشی", idCategory: "beauty" },
    { id: 8, Title: "بهداشتی", idCategory: "health-and-bathroom-tools" },
  ];
  const [ArrayProductApi, setArrayProductApi] = useState();

  useEffect(() => {
    HomePage().then((res) => {
      setArrayProductApi(res);
    });
  }, []);
  return (
    <>
      {ArrayProductApi ? (
        <div className="Home">
          <Slider></Slider>
          <Incredible></Incredible>
          <CategoriesItemsHome
            ArrayProductApi={ArrayProductApi}
          ></CategoriesItemsHome>
          <RecommendationSubCategories
            ArrayProductApi={ArrayProductApi}
          ></RecommendationSubCategories>
          <SuggestionForYou
            dataCategory={dataListForSuggestionBoxs.slice(0, 4)}
          ></SuggestionForYou>
          <DigiplusBaner></DigiplusBaner>
          <SuggestionForYou
            dataCategory={dataListForSuggestionBoxs.slice(4, 8)}
          ></SuggestionForYou>
          <BestSelling ArrayProductApi={ArrayProductApi}></BestSelling>
        </div>
      ) : (
        <Loader TitleLoading={"Loading..."}></Loader>
      )}
    </>
  );
}
