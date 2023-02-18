import React, { useEffect, useState } from "react";
import CategoriesPage from "../../../../../../Apis/CategoriesPage";

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
        <div className="col-6   d-flex flex-column gap-3  col-sm-3  p-3">
          <div className="d-flex justify-content-end text-center ">
            <p>{Title}</p>
          </div>
          <div className=" d-flex  justify-content-evenly gap-3  flex-wrap">
            {CategoriesArray.map((item) => {
              return (
                <div key={item.id} className="col-5">
                  <img src={item.image} className="w-100" alt="" />
                </div>
              );
            })}
          </div>

          <div className="d-flex  justify-content-center text-center">
            <p className=" text-center text-info m-0 p-0 text-">مشاهده همه</p>
          </div>
        </div>
      ) : null}
    </>
  );
}
