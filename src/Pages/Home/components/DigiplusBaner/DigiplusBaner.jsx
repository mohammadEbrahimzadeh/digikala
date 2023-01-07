import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DigiplusPicBaner from "../../../../Img/digiplusPicBaner.png";
import { BsCashCoin } from "react-icons/bs";
import CategoriesPage from "../../../../Apis/CategoriesPage";
export default function DigiplusBaner() {
  const [ProductsArray, setProductsArray] = useState();
  useEffect(() => {
    CategoriesPage("food-beverage", 1).then((res) => {
      setProductsArray(res.results.products);
    });
  }, []);

  return (
    <>
      {ProductsArray ? (
        <div className="DigiplusBaner d-flex flex-column-reverse flex-sm-row justify-content-evenly flex-wrap p-4 ">
          {" "}
          <div className="col-12 col-sm-6 leftDIvMainDigiPlus justify-content-evenly flex-column flex-sm-row gap-1 d-flex ">
            <div className="bg-white col-12  col-sm-6">
              <div className="col-12 d-flex px-3  py-2  px-sm-2 px-md-3 justify-content-between">
                <div className="d-flex justify-content-center ">
                  <span className="text-info d-flex text-center">
                    {" "}
                    مشاهده همه
                  </span>
                </div>
                <div className=" d-flex gap-1 justify-content-end ">
                  <span className=" text-end">هدیه نقدی</span>
                  <span>
                    <BsCashCoin className="text-success"></BsCashCoin>
                  </span>
                </div>
              </div>
              <div className="d-flex flex-sm-wrap justify-content-evenly boxItemDigiPlus  align-items-center">
                {ProductsArray.slice(0, 6).map((item) => {
                  return (
                    <div key={item.id} className=" col-3  col-sm-6 p-1 ">
                      <Link to={`/product/:${item.id}`}>
                        <img src={item.image} className="w-100" alt="" />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="bg-white col-12  col-sm-6">
              <div className="col-12 d-flex px-3  py-2  px-sm-2 px-md-3 justify-content-between">
                <div className="d-flex justify-content-center ">
                  <span className="text-info d-flex text-center">
                    {" "}
                    مشاهده همه
                  </span>
                </div>
                <div className=" d-flex gap-1 justify-content-end ">
                  <span className=" text-end">هدیه نقدی</span>
                  <span>
                    <BsCashCoin className="text-success"></BsCashCoin>
                  </span>
                </div>
              </div>
              <div className="d-flex flex-sm-wrap justify-content-evenly boxItemDigiPlus  align-items-center">
                {ProductsArray.slice(6, 12).map((item) => {
                  return (
                    <div key={item.id} className=" col-3  col-sm-6 p-1 ">
                      <Link to={`/product/:${item.id}`}>
                        <img src={item.image} className="w-100" alt="" />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="rightDIvMainDigiPlus col-12 col-sm-6 d-flex  flex-column">
            <div className="d-flex flex-column justify-content-evenly align-items-end  col-12  text-white">
              <h2>DigiPlus</h2> <p>خدمات ویژه برای اعضای دیجی‌پلاس</p>
            </div>

            <div className="col-12  d-flex justify-content-center align-items-center ">
              <img
                src={DigiplusPicBaner}
                className="picBsnerDigiplsud w- "
                alt=""
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
