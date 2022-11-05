import React, { useEffect, useState, useRef } from "react";
import Slider from "./../../GolobalComponents/Slider/Slider";
import Incredible from "../../GolobalComponents/incredibles/Incredible";
import CategoriesItemsHome from "./components/CategoriesItemsHome/CategoriesItemsHome";
import RecommendationSubCategories from "./components/RecommendationSubCategories/CategoriesItemsHome";
import SuggestionForYou from "./components/SuggestionForYou/SuggestionForYou";
export default function Home() {
  return (
    <div className="Home">
      <Slider></Slider>
      <Incredible></Incredible>
      <CategoriesItemsHome></CategoriesItemsHome>
      <RecommendationSubCategories></RecommendationSubCategories>
      <SuggestionForYou></SuggestionForYou>
    </div>
  );
}
