import React, { useEffect, useState, useRef } from "react";
import Slider from "./../../GolobalComponents/Slider/Slider";
import Incredible from "../../GolobalComponents/incredibles/Incredible";
import CategoriesItemsHome from "./components/CategoriesItemsHome/CategoriesItemsHome";
import RecommendationSubCategories from "./components/RecommendationSubCategories/RecommendationSubCategories";
import SuggestionForYou from "./components/SuggestionForYou/SuggestionForYou";
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
  ];

  return (
    <div className="Home">
      <Slider></Slider>
      <Incredible></Incredible>
      <CategoriesItemsHome></CategoriesItemsHome>
      <RecommendationSubCategories></RecommendationSubCategories>
      <SuggestionForYou
        dataCategory={dataListForSuggestionBoxs.slice(0, 4)}
      ></SuggestionForYou>
    </div>
  );
}
