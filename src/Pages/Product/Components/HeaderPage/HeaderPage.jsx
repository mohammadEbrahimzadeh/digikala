import React from "react";
import {
  MdOutlineReportGmailerrorred,
  MdLocalConvenienceStore,
} from "react-icons/md";
import { AiOutlineComment, AiFillStar } from "react-icons/ai";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GoPrimitiveDot } from "react-icons/go";
import { FaTruckMoving } from "react-icons/fa";
import { BiCoinStack } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
import { RiVipDiamondLine } from "react-icons/ri";
import Badge from "react-bootstrap/Badge";
import logo2 from "../../../../Img/logo2.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
export default function HeaderPage({
  ProductsApiArray,
  FaRegMoneyBillAlt,
  ActiveColorName,
  setActiveColorName,
  ActiveColor,
  setActiveColor,
  setIsOpenModalGallaryProduct,
}) {
  return (
    <div className="mainDataDivPriduct flex-column-reverse flex-sm-row d-flex justify-content-evenly align-items-start flex-wrap ">
      <div className="    mt-0 col-12 col-sm-8 d-flex flex-column align-items-end justify-content-center ">
        {/* start main title product div */}
        <div className="col-12 d-flex  flex-column justify-content-start align-items-end">
          <p dir="rtl" className="fw-bold titleProduct">
            {ProductsApiArray.results.product.mainDetails.title}
          </p>
        </div>

        {/* end main title product div */}

        {/* start section content product */}
        <div className="d-flex flex-wrap col-12 mt-sm-3 ">
          {/* start section seller data  */}
          <div className="col-12 col-sm-5 mt-2 mt-sm-0 divContainerSelling boederSectionTop p-2 p-sm-3 d-flex flex-column gap-3">
            <div className="col-12 d-flex justify-content-end align-items-center">
              <p className="titleContainerDivseller">فروشنده</p>
            </div>
            <div className="col-12 d-flex flex-wrap gap-1 justify-content-end align-items-start">
              <div className="col-9 d-flex flex-column align-items-end justify-content-start gap-1 ">
                <div className="col-12">
                  <p className="titleServiseDiscription text-end">دیجیکالا</p>
                </div>
                <div className="col-12 gap-2 gap-sm-1 gap-md-2 gap-xl-3 flex-wrap d-flex justify-content-end align-items-center">
                  <div className=" d-flex align-items-center justify-content-end">
                    <p className="discriptionSeller" dir="rtl">
                      عملکرد کالا &nbsp;{" "}
                      <span className="text-success fw-bold"> عالی </span>
                    </p>
                  </div>
                  <div className=" d-flex align-items-center justify-content-end">
                    <p className="discriptionSeller" dir="rtl">
                      <span className="text-success fw-bold">82.2% </span> رضایت
                      از کالا
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-2  d-flex justify-content-center align-items-start">
                <img className="w-sm-50 w-50 " src={logo2} alt="" />
              </div>
            </div>

            <div className="col-12 d-flex gap-1 justify-content-end align-items-center">
              <div className="col-10 ">
                <p className=" titleServiseDiscription text-end">
                  گارانتی ۲۴ ماهه انتخاب سرویس
                </p>{" "}
              </div>{" "}
              <div className="col-2 d-flex fs-2 justify-content-center align-items-center">
                <RiSecurePaymentLine></RiSecurePaymentLine>
              </div>
            </div>
            <div className="col-12 flex-wrap d-flex gap-1 justify-content-end align-items-center">
              <div className="col-9 ">
                <p className=" titleServiseDiscription  text-end">
                  موجود در انبار دیجیکالا
                </p>{" "}
              </div>{" "}
              <div className="col-2 d-flex  fs-2 justify-content-center align-items-center">
                <MdLocalConvenienceStore className="text-info"></MdLocalConvenienceStore>
              </div>
              <div className="col-12 d-flex align-items-center justify-content-end ">
                <div className="col-9 d-flex gap-2 align-items-center justify-content-end ">
                  <p className=" titleServiseDiscription  text-end">
                    ارسال دیجیکالا{" "}
                  </p>
                  <FaTruckMoving className="text-danger"></FaTruckMoving>
                </div>
                <div className="col-2  d-flex fs-6 justify-content-center align-items-center">
                  <GoPrimitiveDot className="text-info"></GoPrimitiveDot>
                </div>
              </div>
            </div>
            <div className="col-12 d-flex gap-1 justify-content-end align-items-center">
              <div className="col-10 ">
                <p className=" titleServiseDiscription text-end">
                  امتیاز دیجی کلاب{" "}
                </p>{" "}
              </div>{" "}
              <div className="col-2 d-flex fs-2 justify-content-center align-items-center">
                <BiCoinStack className="text-warning"></BiCoinStack>
              </div>
            </div>
            <div className="containerForPriceProduct justify-content-center align-content-center gap-2 d-flex flex-row flex-sm-column">
              <div className="col-6 col-sm-12 d-flex flex-column justify-content-start align-items-center ">
                <div className="d-flex col-12  justify-content-start align-items-center gap-1">
                  {ProductsApiArray.results.product.price.discount_percent ? (
                    <Badge bg="danger" className="p-1">
                      {`${ProductsApiArray.results.product.price.discount_percent} %`}
                    </Badge>
                  ) : (
                    <FaRegMoneyBillAlt className="fs-5"></FaRegMoneyBillAlt>
                  )}

                  <p
                    className={`titleServiseDiscription  ms-1 text-end ${
                      ProductsApiArray.results.product.price.discount_percent
                        ? "opacity-50 fs-6 text-decoration-line-through"
                        : " fs-5 fw-bold "
                    }`}
                  >
                    {ProductsApiArray.results.product.price.discount_percent
                      ? Intl.NumberFormat().format(
                          ProductsApiArray.results.product.price.prev_price / 10
                        )
                      : Intl.NumberFormat().format(
                          ProductsApiArray.results.product.price.current_price /
                            10
                        )}
                    {}
                  </p>
                </div>{" "}
                {ProductsApiArray.results.product.price.discount_percent ? (
                  <div className="col-12 d-flex gap-1  justify-content-start align-items-center">
                    {" "}
                    <FaRegMoneyBillAlt className="fs-6 ms-3 ms-sm-4"></FaRegMoneyBillAlt>
                    <p className="titleServiseDiscription ">
                      {Intl.NumberFormat().format(
                        ProductsApiArray.results.product.price.current_price /
                          10
                      )}
                    </p>
                  </div>
                ) : null}
              </div>
              <div className="col-6 col-sm-12 mt-sm-2 d-flex justify-content-center align-items-center">
                <button className="bg-danger btnBuyProduct text-white border-0  px-1 py-2 rounded rounded-3 w-100">
                  افزودن به سبد خرید
                </button>
              </div>
            </div>
          </div>
          {/* end section seller data  */}
          {/* start data  section product */}
          <div className="col-sm-7 ps-sm-2 boederSectionTop mt-2 mt-sm-0 pt-3 pt-sm-0 col-12 ">
            <div className="col-12">
              <div
                dir="rtl"
                className="d-flex col-12  justify-content-start align-items-center "
              >
                <p dir="rtl" className="discriptionProductrating fw-bold">
                  <AiFillStar className="text-warning fw-bold"></AiFillStar>{" "}
                  &nbsp; آراء &nbsp;
                  {ProductsApiArray.results.product.rating.rate}
                </p>
                <p
                  dir="rtl"
                  className="me-3 text-info discriptionProductrating fw-bold"
                >
                  <AiOutlineComment className="text-black fw-bold"></AiOutlineComment>
                  &nbsp; {ProductsApiArray.results.product.rating.count} &nbsp;
                  دیدگاه
                </p>
              </div>
            </div>
            {ProductsApiArray.results.product.mainDetails.colors.length > 0 ? (
              <>
                <div className="col-12 d-flex mt-3 align-items-center justify-content-end">
                  <p className="titleColorProduct">رنگ : {ActiveColorName}</p>
                </div>
                <div
                  dir="rtl"
                  className="col-12 pb-3 mt-2 d-flex gap-3 d-flex containerColorsProduct align-items-center justify-content-start text-center "
                >
                  {ProductsApiArray.results.product.mainDetails.colors.map(
                    (item, index) => {
                      return (
                        <div
                          key={index}
                          onClick={() => {
                            setActiveColor(index);
                            setActiveColorName(item.title);
                          }}
                          className={`
                    ${
                      ActiveColor == index
                        ? " border border-info border-3 border-sm-4 rounded-3 rounded-pill rounded-3 rounded-pill"
                        : ""
                    }
                    
                    px-0 py-1 p-sm-0  p-0  d-flex align-items-center justify-content-center text-center gap-2 col-4 col-sm-1 `}
                        >
                          <div className="d-flex d-sm-none justify-content-center align-items-center text-center  ">
                            <p>{item.title}</p>
                          </div>
                          <div
                            style={{ backgroundColor: `${item.hex_code}` }}
                            className="d-flex align-items-center justify-content-center text-center rounded-circle h-100  "
                          >
                            <TiTick
                              className={`fs-4  ${
                                item.hex_code == "#212121"
                                  ? "text-white"
                                  : "text-black"
                              }  ${
                                ActiveColor == index
                                  ? "opacity-100"
                                  : "opacity-0"
                              }`}
                            ></TiTick>
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
              </>
            ) : null}

            {ProductsApiArray.results.product.options ? (
              <div className="col-12 d-flex mt-3   flex-column align-items-end justify-content-center">
                <div className="text-end col-12 mb-2">
                  <p className="titleColorProduct">ویژگی ها</p>
                </div>
                <div>
                  <ul
                    dir="rtl"
                    className="pe-1 d-flex list-unstyled align-items-start justify-content-center flex-column gap-2"
                  >
                    {ProductsApiArray.results.product.options.map(
                      (item, index) => {
                        return (
                          <li
                            key={index}
                            dir="rtl"
                            className="listOption col-12  d-flex  align-items-center justify-content-center  me-2"
                          >
                            <div className="col-5">
                              <p className="ms-1 titleOption">{item.title} :</p>
                            </div>
                            <div className="col-7  d-flex align-items-center justify-content-start flex-wrap">
                              {item.values.map((item, index) => {
                                return (
                                  <p
                                    key={index}
                                    className="text-black  titleOption mx-1"
                                  >
                                    {item}
                                  </p>
                                );
                              })}
                            </div>
                          </li>
                        );
                      }
                    )}
                  </ul>
                </div>
              </div>
            ) : null}

            <div className="col-12 d-flex flex-column  justify-content-center  text-end mt-3 gap-2 pe-2 border border-2 py-3 align-items-end">
              <div className="col-12 d-flex justify-content-end align-items-center gap-2 ">
                <p className="optionVipUserTitle">ویژه اعضای دیجی پلاس</p>
                <RiVipDiamondLine className="iconOptionVipUser "></RiVipDiamondLine>
              </div>
              <div className="col-12 d-flex justify-content-end align-items-center gap-2 ">
                <p className="optionVipUserTitle text-secondary">
                  امکان ارسال فوری(شهر تهران){" "}
                </p>
                <GoPrimitiveDot className="iconOptionVipUser "></GoPrimitiveDot>
              </div>
            </div>
          </div>
          {/* end data  section product */}
        </div>
        {/* end section content product */}
      </div>

      {/* start imges of product section */}
      <div className=" col-12 col-sm-4 p-2 d-none d-sm-flex justify-content-evenly align-items-center flex-wrap ">
        {ProductsApiArray.results.product.images
          .slice(0, 5)
          .map((item, index) => {
            return (
              <div
                key={index}
                className={`p-1 cursor-pointer  ${
                  index == 0 ? "col-12" : "col-3"
                }`}
                onClick={() => {
                  setIsOpenModalGallaryProduct(true);
                }}
              >
                <img src={item} className="w-100" alt="" />
              </div>
            );
          })}

        <div className="col-12 d-none d-sm-flex justify-content-end align-items-center mt-3">
          <div className="col-4 text-center ">
            <p className="discriptionSeller">
              DKP-{ProductsApiArray.results.product.id}
            </p>
          </div>
          <div className="col-6 discriptionSeller">
            <button className="border-0  bg-white">
              گزارش نادرستی مشخصات <MdOutlineReportGmailerrorred />
            </button>
          </div>
        </div>
      </div>
      {/* end imges of product section */}

      {/* start slider mobail size  */}
      <div className="col-12  d-flex SliderProduct d-sm-none ">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {ProductsApiArray.results.product.images.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                onClick={() => {
                  setIsOpenModalGallaryProduct(true);
                }}
              >
                <img src={item} alt="" className="w-100 px-3 py-4" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {/* end slider mobail size  */}
    </div>
  );
}
