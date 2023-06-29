import React, { useEffect, useState } from "react";
import SuggestionBox from "./Components/SuggestionBox/SuggestionBox";
export default function SuggestionForYou({ dataCategory }) {
  return (
    <>
      <div className="SuggestionForYou d-flex justify-content-evenly  align-items-center flex-wrap px-3 ">
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
