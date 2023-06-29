import React, { useEffect, useState } from "react";
import CategoriesPage from "../../../../../../Apis/CategoriesPage";
import { Link } from "react-router-dom";

export default function SuggestionBox({ Title, CategoryName }) {
  const [CategoriesArray, setCategoriesArray] = useState();
  useEffect(() => {
    CategoriesPage(CategoryName, 1).then((res) => {
      if (res.results) {
        setCategoriesArray(res.results.products.slice(0, 4));
      }
    });
  }, []);
  return (
    <>
      {CategoriesArray ? (
        <Link
          className="col-6   d-flex flex-column col-sm-3  gap-3  p-3"
          to={`/search/${CategoryName}`}
        >
          <div>
            <div className="d-flex justify-content-end text-center ">
              <p>{Title}</p>
            </div>
            <div className=" d-flex  justify-content-evenly flex-wrap  gap-3">
              {CategoriesArray.map((item) => {
                return (
                  <div key={item.id} className="col-5">
                    <img src={item.image} className="w-100" alt="" />
                  </div>
                );
              })}
            </div>

            <div className="d-flex  justify-content-center text-center">
              <p className=" text-info text- m-0 p-0 text-center">مشاهده همه</p>
            </div>
          </div>
        </Link>
      ) : null}
    </>
  );
}
