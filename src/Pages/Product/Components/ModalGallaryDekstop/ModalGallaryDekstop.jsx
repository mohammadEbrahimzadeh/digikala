import React, { useRef, useState } from "react";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function ModalGallaryDekstop({
  ProductsApiArray,
  IsOpenModalGallaryProduct,
  setIsOpenModalGallaryProduct,
  AiOutlineCloseCircle,
}) {
  const [BorderForMiniPicProduct, setBorderForMiniPicProduct] = useState(0);
  const swiperRef = useRef(null);

  return (
    <div
      className={`position-fixed  start-0 modalProdacts justify-content-center align-items-center top-0  bottom-0 w-100 h-100 ${
        IsOpenModalGallaryProduct ? " d-flex" : " d-none "
      }`}
    >
      <div className="col-10 p-2 p-sm-3 position-absolute    divContainerModal bg-white">
        <div className="d-flex px-2 px-sm-5  col-12  justify-content-between align-items-center">
          <div className="">
            <button
              className="bg-white border-0 fs-4"
              onClick={() => {
                setIsOpenModalGallaryProduct(false);
              }}
            >
              <AiOutlineCloseCircle></AiOutlineCloseCircle>
            </button>
          </div>
          <div className="text-danger  border-bottom border-4 border-danger">
            <p className="text-dager px-2 fw-bold">تصاویر رسمی</p>
          </div>
        </div>
        <div className="col-12 d-flex flex-column-reverse flex-sm-row  flex-wrap  mainDivCOntentModal">
          <div className="col-sm-6 pt-3 col-12 gap-1 mainDivForMiniPhotosProduct  flex-sm-wrap  d-flex align-items-start justify-content-start justify-content-sm-evenly">
            {ProductsApiArray.results.product.images.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    swiperRef.current?.swiper.slideTo(index);
                    setBorderForMiniPicProduct(index);
                  }}
                  className={`col-3 d-flex   justify-content-center align-items-center  ${
                    BorderForMiniPicProduct == index
                      ? "border-1 border-info border"
                      : " "
                  }`}
                >
                  <img src={item} className="w-100 p-1 " alt="" />
                </div>
              );
            })}
          </div>
          <div className="col-sm-6 col-12  mainDivSlider d-flex justify-content-center align-items-center">
            <Swiper
              ref={swiperRef}
              onSlideChange={() => {
                setBorderForMiniPicProduct(
                  swiperRef.current.swiper.activeIndex
                );
              }}
              pagination={{
                dynamicBullets: true,
              }}
              navigation={true}
              modules={[Navigation, Pagination]}
              className="mySwiper .slideTo(3)"
            >
              {ProductsApiArray.results.product.images.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <img src={item} alt="" className="w-100 p-3" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
