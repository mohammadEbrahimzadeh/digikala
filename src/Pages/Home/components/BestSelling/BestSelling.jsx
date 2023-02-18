import React from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/grid";

// import required modules
import { Grid } from "swiper";
export default function BestSelling({ ArrayProductApi }) {
  return (
    <div className="BestSelling p-3">
      <div className="col-12 d-flex justify-content-center align-items-center">
        <h2 className="titleComponent">پرفروش‌ترین کالاها</h2>
      </div>
      <div className="col-12  BestSellingBoxContainer  pt-0 ">
        <Swiper
          // dir="rtl"
          freeMode={true}
          modules={[Grid]}
          grid={{ rows: 3 }}
          className="mySwiper  d-flex align-items-center  justify-content-end"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            578: {
              slidesPerView: 2,
              spaceBetween: -1,
            },
          }}
        >
          {ArrayProductApi.results.bestSelling.products.map((item, index) => {
            return (
              <SwiperSlide
                key={item.id}
                className="d-flex align-items-center  justify-content-start"
              >
                <Link to={`/product/:${item.id}`}>
                  <div className="d-flex p-0 gap-sm-2 gap-1 align-items-center justify-content-start col-12  ">
                    <div className="col-2 col-sm-2  p-sm-0 d-flex align-items-center justify-content-center ">
                      <img src={item.image} className="w-100" alt="" />
                    </div>
                    <div className="col-9 col-sm-9 d-flex align-items-center justify-content-start">
                      <p className="text-info fw-bold numberDescriptionBox">
                        {index + 1}
                      </p>{" "}
                      <p className="descriptionBox me-2 m-0 p-0 text-end">
                        {item.title_fa}{" "}
                      </p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
