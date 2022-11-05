import React, { useEffect, useState } from "react";
import HomePage from "../../../../Apis/HomePage";

export default function RecommendationSubCategories() {
  const [
    RecommendationSubCategoriesArray,
    setRecommendationSubCategoriesArray,
  ] = useState();
  useEffect(() => {
    HomePage().then((res) => {
      setRecommendationSubCategoriesArray(
        res.results.recommendationSubCategories
      );
    });
  }, []);

  return (
    <>
      {RecommendationSubCategoriesArray ? (
        <div className="RecommendationSubCategories p-2 p-sm-3">
          <div className="col-12 d-flex justify-content-center align-items-center  mt-sm-4">
            <h1>پیشنهاد دیجی‌کالا</h1>
          </div>
          <div className="d-flex flex-wrap  justify-content-evenly">
            {RecommendationSubCategoriesArray.map((item) => {
              return (
                <div
                  key={item.id}
                  className="col-4 col-sm-2 p-4 mt-2 d-flex justify-content-center flex-column align-items-center"
                >
                  <img src={item.top_product_image} className="w-100" alt="" />
                  <p className="m-0 mt-1 text-center">{item.title_fa}</p>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </>
  );
}
