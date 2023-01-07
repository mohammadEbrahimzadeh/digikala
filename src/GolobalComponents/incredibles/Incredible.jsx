import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AmazingTypo from "../../Img/AmazingTypo";
import Badge from "react-bootstrap/Badge";
import HomePage from "../../Apis/HomePage";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
// import required modules
import { FreeMode } from "swiper";
export default function Incredible() {
  const [ArrayIncredibleProducts, setArrayIncredibleProducts] = useState();
  useEffect(() => {
    HomePage().then((res) => {
      setArrayIncredibleProducts(res.results.incredible.products);
    });
  }, []);

  return (
    <div className="Incredible   d-flex justify-content-center ">
      {ArrayIncredibleProducts ? (
        <div className="bg-danger  col-12 p-3 gap-2  col-sm-12 d-flex justify-content-evenly">
          <div className="IncredibleContainerBoexes   col-10 col-sm-10   d-flex">
            <Swiper
              dir="rtl"
              freeMode={true}
              modules={[FreeMode]}
              className="mySwiper col-12 "
              breakpoints={{
                250: {
                  slidesPerView: 2,
                  spaceBetween: 5,
                },
                450: {
                  slidesPerView: 3,
                  spaceBetween: 5,
                },

                750: {
                  slidesPerView: 5,

                  spaceBetween: 5,
                },
              }}
            >
              {ArrayIncredibleProducts.map((item) => {
                let current_price = Math.floor(item.price.current_price / 10);
                current_price = Intl.NumberFormat().format(current_price);

                let prev_price = Math.floor(item.price.prev_price / 10);
                prev_price = Intl.NumberFormat().format(prev_price);
                return (
                  <SwiperSlide className=" bg-white ms-1 col-10 " key={item.id}>
                    <Link to={`/product/:${item.id}`}>
                      <div className=" d-flex flex-column col-12 p-2">
                        <div className="col-12  d-flex justify-content-center ">
                          <img
                            src={item.image}
                            className="imgCoverForCards h-100 w-100"
                            alt=""
                          />
                        </div>
                        <div className="col-12 mt-1 ps-1 ">
                          <div className="d-flex col-12 justify-content-center ">
                            <div className="d-flex flex-wrap-reverse  col-12 justify-content-end gap-2">
                              <div>
                                <p>{current_price}</p>
                              </div>
                              <div>
                                <Badge
                                  className="p-1 m-0 d-flex BadgeDiscountPercent   align-items-center"
                                  bg="danger"
                                >
                                  {`${item.price.discount_percent}%`}
                                </Badge>
                              </div>
                            </div>
                          </div>
                          <div className=" text-start col-12 ps-1  opacity-50 text-decoration-line-through">
                            <p>{prev_price}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="col-sm-1 col-2  d-flex flex-column justify-content-center text-center ">
            <AmazingTypo></AmazingTypo>
          </div>
        </div>
      ) : null}
    </div>
  );
}
