import React from "react";
import { BsShop } from "react-icons/bs";

export default function BreadcrumbOfHeader({ ProductsApiArray }) {
  return (
    <div className="BreadcrumbOfHeader mb-3 col-12 d-flex justify-content-between align-items-center flex-wrap">
      <div className="col-12 d-none d-sm-flex justify-content-start  ps-4 align-items-center col-sm-4  ">
        <button className="border-0  bg-white">
          فروش در دیجیکالا <BsShop />
        </button>
      </div>
      <div
        dir="rtl"
        className="col-12 col-sm-4  flex-wrap    d-flex  justify-content-sm-start
align-items-center "
      >
        {ProductsApiArray.results.eventData.categoryLevel1 ? (
          <p className="BreadcrumForProcuct p-2">
            {ProductsApiArray.results.eventData.categoryLevel1}
          </p>
        ) : (
          ""
        )}
        <p className="BreadcrumForProcuct ">/</p>
        {ProductsApiArray.results.eventData.categoryLevel2 ? (
          <p className="BreadcrumForProcuct p-2">
            {ProductsApiArray.results.eventData.categoryLevel2}
          </p>
        ) : (
          ""
        )}{" "}
        <p className="BreadcrumForProcuct ">/</p>
        {ProductsApiArray.results.eventData.categoryLevel3 ? (
          <p className="BreadcrumForProcuct p-2">
            {ProductsApiArray.results.eventData.categoryLevel3}
          </p>
        ) : (
          ""
        )}{" "}
        <p className="BreadcrumForProcuct ">/</p>
        {ProductsApiArray.results.eventData.categoryLevel4 ? (
          <p
            className={`BreadcrumForProcuct p-2 ${
              ProductsApiArray.results.eventData.categoryLevel5
                ? " "
                : " opacity-50 "
            }`}
          >
            {ProductsApiArray.results.eventData.categoryLevel4}
          </p>
        ) : (
          ""
        )}
        {ProductsApiArray.results.eventData.categoryLevel5 ? (
          <p className="BreadcrumForProcuct ">/</p>
        ) : (
          ""
        )}
        {ProductsApiArray.results.eventData.categoryLevel5 ? (
          <p className="BreadcrumForProcuct  opacity-50 p-2">
            {ProductsApiArray.results.eventData.categoryLevel3}
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
