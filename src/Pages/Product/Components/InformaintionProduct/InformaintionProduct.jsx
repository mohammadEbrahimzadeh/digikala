import React, { useState } from "react";

export default function InformaintionProduct({ ProductsApiArray }) {
  const [ShowMoreInforMaition, setShowMoreInforMaition] = useState(false);
  return (
    <div className="col-12 mt-2 InformaintionProduct">
      <div className="col-12 pe-1 pe-sm-3 d-flex justify-content-end align-items-center">
        <p className="border-4 titleRecommendationsProduct border-bottom border-danger ">
          مشخصات
        </p>
      </div>
      <div className="col-12 flex-wrap flex-column-reverse flex-sm-row d-flex justify-content-end align-items-start mt-sm-2">
        <div className="col-12 col-sm-9 d-flex flex-column align-items-end justify-content-start  p-sm-3 ">
          {ProductsApiArray.results.product.information.map((item, index) => {
            return (
              <div
                key={index}
                className="d-flex   col-12 justify-content-center align-items-start"
              >
                {index < 5 ? (
                  <>
                    <div className="col-8     p-2 p-sm-3">
                      <p className="headerInfoProduct   text-end">
                        {item.values}
                      </p>
                    </div>
                    <div className="col-4  p-2  p-sm-3  ">
                      <p className="headerInfoProduct   text-secondary text-end">
                        {item.title}
                      </p>
                    </div>
                  </>
                ) : null}
              </div>
            );
          })}
          {ShowMoreInforMaition ? (
            <>
              {ProductsApiArray.results.product.information.map(
                (item, index) => {
                  return (
                    <div
                      key={index}
                      className="d-flex col-12 justify-content-center align-items-start"
                    >
                      {index >= 5 ? (
                        <>
                          <div className="col-8     p-2 p-sm-3">
                            <p className="headerInfoProduct   text-end">
                              {item.values}
                            </p>
                          </div>
                          <div className="col-4  p-2  p-sm-3  ">
                            <p className="headerInfoProduct   text-secondary text-end">
                              {item.title}
                            </p>
                          </div>
                        </>
                      ) : null}
                    </div>
                  );
                }
              )}
            </>
          ) : null}
          <div className=" my-2 my-sm-3 me-2 me-sm-3">
            <button
              className="text-info border-0 bg-white headerInfoProduct"
              onClick={() => {
                setShowMoreInforMaition(!ShowMoreInforMaition);
              }}
            >
              {ShowMoreInforMaition ? " مشاهده کمتر " : "مشاهده بیشتر"}
            </button>
          </div>
        </div>

        <div className="d-none  col-sm-3  d-sm-flex align-items-start justify-content-end  px-3 py-2">
          <p className="headerInfoProduct">مشخصات</p>
        </div>
      </div>
    </div>
  );
}
