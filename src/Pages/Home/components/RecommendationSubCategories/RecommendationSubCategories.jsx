import React from "react";
import { Link } from "react-router-dom";
export default function RecommendationSubCategories({ ArrayProductApi }) {
  return (
    <div className="RecommendationSubCategories p-sm-3 p-2">
      <div className="col-12 d-flex justify-content-center align-items-center  mt-sm-4">
        <h1>پیشنهاد دیجی‌کالا</h1>
      </div>
      <div className="d-flex align-items-start justify-content-evenly  flex-wrap">
        {ArrayProductApi.results.recommendationSubCategories.map((item) => {
          return (
            <Link
              key={item.id}
              className="col-4 col-sm-2 p-sm-4 d-flex justify-content-center flex-column align-items-center mt-2 p-2"
              to={`/search/${item.title_fa}`}
            >
              <div>
                <img src={item.top_product_image} className="w-100" alt="" />
                <p className="m-0 mt-1 text-center">{item.title_fa}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
