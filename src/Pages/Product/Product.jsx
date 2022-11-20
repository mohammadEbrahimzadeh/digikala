import React, { useRef, useState, useEffect } from "react";
import { BsShop } from "react-icons/bs";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Box from "../../Img/box.png";
import Box2 from "../../Img/digiplusPicBaner.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ProductsApi from "../../Apis/ProductsApi";
export default function Product() {
  const [ProductsApiArray, setProductsApiArray] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    ProductsApi("6460974").then((res) => {
      setProductsApiArray(res.results);
    });
  }, []);

  return (
    <>
      {ProductsApiArray ? (
        <div className="Product p-3 position-relative ">
          <div className="col-12 d-flex justify-content-between align-items-center flex-wrap">
            <div className="col-12 d-none d-sm-flex justify-content-center align-items-center col-sm-4 ">
              <button className="border-0  bg-white">
                فروش در دیجیکالا <BsShop />
              </button>
            </div>
            <div
              className="col-12 col-sm-5   d-flex justify-content-evenly justify-content-sm-end
       align-items-center"
            >
              <Breadcrumb className="  w-100 d-flex justify-content-center align-items-start">
                <Breadcrumb.Item className="pt-0 p-0  px-1" active>
                  <span className="BreadcrumForProcuct  "> کفش زنانه</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item className="  p-0  px-1" href="#">
                  <span className="BreadcrumForProcuct  "> کفش زنانه</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item className="  p-0  px-1" href="#">
                  <span className="BreadcrumForProcuct  "> کفش زنانه</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item className="  p-0  px-1" href="#">
                  <span className="BreadcrumForProcuct  "> کفش زنانه</span>
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>
          <div className="mainDataDivPriduct d-flex justify-content-evenly align-items-start flex-wrap">
            <div className=" d-sm-flex d-none col-6 col-sm-8 bg-danger">1</div>
            <div className=" col-12 col-sm-4 d-none d-sm-flex justify-content-evenly align-items-center flex-wrap">
              <div className="col-12 p-1">
                <img src={Box} className="w-100" alt="" />
              </div>
              <div className="col-3 p-1 ">
                {" "}
                <img src={Box} className="w-100" alt="" />
              </div>
              <div className="col-3 p-1 ">
                {" "}
                <img src={Box} className="w-100" alt="" />
              </div>
              <div className="col-3 p-1 ">
                {" "}
                <img src={Box} className="w-100" alt="" />
              </div>
              <div className="col-3 p-1 ">
                {" "}
                <img src={Box} className="w-100" alt="" />
              </div>
              <div className="col-12 d-none d-sm-flex justify-content-end align-items-center mt-3">
                <div className="col-4 text-center ">
                  <p className="BreadcrumForProcuct">DKP-9435475</p>
                </div>
                <div className="col-6 BreadcrumForProcuct">
                  <button className="border-0  bg-white">
                    گزارش نادرستی مشخصات <MdOutlineReportGmailerrorred />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12  d-flex SliderProduct d-sm-none ">
              <Swiper
                pagination={{
                  dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src={Box} alt="" className="w-100 p-3" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Box} alt="" className="w-100 p-3" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Box} alt="" className="w-100 p-3" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Box} alt="" className="w-100 p-3" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Box} alt="" className="w-100 p-3" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Box} alt="" className="w-100 p-3" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="position-fixed start-0 modalProdacts  d-flex  justify-content-center align-items-center top-0  bottom-0 w-100 h-100">
            <div className="col-10 p-3 position-relative   divContainerModal bg-white">
              <div className="d-flex px-5  justify-content-between align-items-center">
                <div>
                  <button className="bg-white border-0 fs-4">
                    <AiOutlineCloseCircle></AiOutlineCloseCircle>
                  </button>
                </div>
                <div className="text-danger border-bottom border-4 border-danger">
                  <p className="text-dager px-2 fw-bold">تصاویر رسمی</p>
                </div>
              </div>
              <div className="col-12 d-flex    mainDivCOntentModal">
                <div className="col-6 mainDivForMiniPhotosProduct  flex-wrap  d-flex align-items-center justify-content-evenly">
                  {ProductsApiArray.product.images.map((item, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() => {
                          swiperRef.current?.swiper.slideTo(index);
                        }}
                        className=" col-3  d-flex justify-content-center align-items-center"
                      >
                        <img src={item} className="w-100 p-3" alt="" />
                      </div>
                    );
                  })}
                </div>
                <div className="col-6  mainDivSlider d-flex justify-content-center align-items-center">
                  <Swiper
                    ref={swiperRef}
                    pagination={{
                      dynamicBullets: true,
                    }}
                    navigation={true}
                    modules={[Navigation, Pagination]}
                    className="mySwiper .slideTo(3)"
                  >
                    {ProductsApiArray.product.images.map((item, index) => {
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
        </div>
      ) : null}
    </>
  );
}
