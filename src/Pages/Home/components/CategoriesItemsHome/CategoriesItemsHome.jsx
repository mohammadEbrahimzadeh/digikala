import React from "react";
import { Link } from "react-router-dom";
export default function CategoriesItemsHome({ ArrayProductApi }) {
  return (
    <div className="CategoriesItemsHome p-sm-3 p-2">
      <div className="col-12 d-flex justify-content-center align-items-center  mt-sm-4">
        <h1>دسته‌بندی‌های دیجی‌کالا</h1>
      </div>
      <div className="d-flex justify-content-evenly  align-items-start flex-wrap">
        {ArrayProductApi.results.categories.map((item) => {
          return (
            <Link
              key={item.id}
              className="col-4 col-sm-2 d-flex justify-content-center flex-column align-items-center mt-2 p-2"
              to={`/search/${item.code}`}
            >
              <div>
                <img src={item.logo} className="w-100" alt="" />
                <p className="m-0 mt-1 text-center">{item.title_fa}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
