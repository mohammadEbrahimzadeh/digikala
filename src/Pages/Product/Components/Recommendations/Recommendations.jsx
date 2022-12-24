import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
export default function Recommendations({
  ProductsApiArray,
  FaRegMoneyBillAlt,
}) {
  return (
    <div className="Recommendations col-12 mt-2">
      <div className="col-12 pe-1 pe-sm-3 d-flex justify-content-end align-items-center">
        <p className="border-4 titleRecommendationsProduct border-bottom border-danger ">
          کالا های مشابه
        </p>
      </div>
      <div className="col-12 sliderRecommendations  d-flex justify-content-center  align-items-center mt-2">
        <Swiper
          dir="rtl"
          spaceBetween={-1}
          breakpoints={{
            // when window width is >= 250px
            250: {
              slidesPerView: 1,
            },
            // when window width is >= 350px
            300: {
              slidesPerView: 2,
            },
            // when window width is >= 500px
            588: {
              slidesPerView: 4,
            },
            // when window width is >= 700px
            700: {
              slidesPerView: 5,
            },
          }}
          freeMode={false}
          modules={[FreeMode, Pagination]}
          className="mySwiperRecommendations swiper gap-5   col-12"
        >
          {ProductsApiArray.results.recommendations.map((item, index) => {
            let prev_price = Math.floor(item.price.prev_price / 10);
            prev_price = Intl.NumberFormat().format(prev_price);
            let current_price = Math.floor(item.price.current_price / 10);
            current_price = Intl.NumberFormat().format(current_price);
            return (
              <SwiperSlide key={index} className="col-12">
                <div className="d-flex  p-2 flex-column align-items-center justify-content-center">
                  <div className="col-12">
                    <img src={item.image} alt="" className=" " />
                  </div>
                  <div className="col-12 mt-2 d-flex align-items-center justify-content-center">
                    <p className="titleRecommendations ">{item.title_fa}</p>
                  </div>
                  <div className="col-12 d-flex justify-content-between align-items-center mt-2">
                    <div className="d-flex">
                      {item.price.discount_percent > 0 ? (
                        <p className="titleRecommendations bg-danger text-white rounded-1 rounded p-1 rounded-pill">
                          {item.price.discount_percent}%
                        </p>
                      ) : null}
                    </div>
                    <div className="d-flex">
                      <p className="titleRecommendations fw-bold">
                        {item.price.discount_percent > 0
                          ? current_price
                          : prev_price}
                      </p>
                      &nbsp;
                      <FaRegMoneyBillAlt></FaRegMoneyBillAlt>
                    </div>
                  </div>
                  <div className="col-12 d-flex justify-content-end align-items-center">
                    <p className="titleRecommendations text-decoration-line-through text-secondary ms-2 ms-sm-4">
                      {item.price.discount_percent > 0 ? prev_price : null}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
