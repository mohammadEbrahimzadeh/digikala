import React, { useEffect, useState } from "react";
import SuggestionBox from "./Components/SuggestionBox/SuggestionBox";
export default function SuggestionForYou({ dataCategory }) {
  return (
    <>
      <div className="SuggestionForYou flex-wrap px-3  d-flex ">
        {dataCategory.map((item) => {
          return (
            <SuggestionBox
              key={item.id}
              Title={item.Title}
              CategoryName={item.idCategory}
            ></SuggestionBox>
          );
        })}
      </div>
    </>
  );
}
