import React from "react";
export default function BestSelling({ ArrayProductApi }) {
  console.log(ArrayProductApi);

  return (
    <div className="BestSelling p-3">
      <div className="col-12 d-flex justify-content-center align-items-center">
        <h2 className="titleComponent">پرفروش‌ترین کالاها</h2>
      </div>
      <div className="col-12 BestSellingBoxContainer d-flex flex-column  flex-wrap justify-content-evenly align-items-center ">
        {ArrayProductApi.results.bestSelling.products.map((item, index) => {
          return (
            <div
              key={item.id}
              className="d-flex p-3 gap-sm-1 align-items-center justify-content-evenly col-12 col-sm-4 "
            >
              {" "}
              <div className="col-2 col-sm-3  p-sm-0 d-flex align-items-center justify-content-center ">
                <img src={item.image} className="w-100" alt="" />
              </div>
              <div className="col-9 d-flex align-items-center justify-content-start">
                <p className="text-info fw-bold numberDescriptionBox">
                  {index + 1}
                </p>{" "}
                <p className="descriptionBox me-2 m-0 p-0 text-end">
                  {item.title_fa}{" "}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
