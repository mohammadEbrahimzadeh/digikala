import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link, useNavigate } from "react-router-dom";
import HomePage from "../../Apis/HomePage";
import SearchProductApi from "../../Apis/SearchProductApi";
import AccordionPrice from "./components/AccordionPrice/AccordionPrice";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
// import required modules
import { FreeMode } from "swiper";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import Loader from "../../GolobalComponents/Loader/Loader";
export default function SearchProductPage() {
  let Navigate = useNavigate();
  const [ArrayCategorys, setArrayCategorys] = useState();
  const [TypeofFilter, setTypeofFilter] = useState("NO-FILTER");

  const [ArrayResultSearch, setArrayResultSearch] = useState();
  const [NumberOfPageResult, setNumberOfPageResult] = useState(1);
  const [ProductsFinal, setProductsFinal] = useState([]);
  const [TitleLoading, setTitleLoading] = useState();
  useEffect(() => {
    // HomePage().then((res) => {
    //   setArrayCategorys(res.results.categories);
    // });
    // SearchProductApi("گوشی", NumberOfPageResult).then((res) => {
    //   if (res.status == 404) {
    //     // RidirectPage();
    //   } else {
    //     setArrayResultSearch(res);
    //     setProductsFinal(res.results.products);
    //   }
    // });
  }, []);
  useEffect(() => {
    SearchProductApi("گوشی", NumberOfPageResult).then((res) => {
      console.log(TypeofFilter);
      if (res.status !== 404) {
        if (TypeofFilter == "NO-FILTERg") {
          setArrayResultSearch(res);
          setProductsFinal([...ProductsFinal, ...res.results.products]);
        }
      }
    });
  }, [NumberOfPageResult]);

  function RidirectPage() {
    setTitleLoading("نتیجه یافت نشد");
    setTimeout(() => {
      Navigate("/");
    }, 2000);
  }

  return (
    <div className="SearchProductPage col-12 p-3 ">
      {ArrayCategorys ? (
        <div className="col-12 headerPage  ">
          <div className="col-12 d-flex justify-content-end align-items-center">
            <p className="textTitleCategory">دسته بندی ها</p>
          </div>
          <div className="col-12 d-flex align-items-center gap-2 justify-content-evenly">
            <Swiper
              dir="rtl"
              freeMode={true}
              modules={[FreeMode]}
              className="mySwiper col-12 gap-2 d-flex align-items-center justify-content-evenly "
              breakpoints={{
                0: { slidesPerView: 2, spaceBetween: 0 },
                578: { slidesPerView: ArrayCategorys.length, spaceBetween: 0 },
              }}
            >
              {ArrayCategorys.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="col-12  p-3 ">
                      <div className="col-12">
                        <img src={item.logo} className="w-100" />
                      </div>
                      <div className="col-12">
                        <p className="titleItemCategory text-center">
                          {item.title_fa}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      ) : null}

      <div className="containerMainContent d-flex align-items-stretch justify-content-evenly">
        <div className="col-9  leftSideContent ">
          {
            ArrayResultSearch &&
            ArrayResultSearch.status !== 404 &&
            ProductsFinal ? (
              <InfiniteScroll
                dataLength={ProductsFinal.length}
                next={() => {
                  setNumberOfPageResult((pery) => pery + 1);
                }}
                hasMore={true}
              >
                <div className="col-12 d-flex  align-items-start justify-content-evenly flex-wrap ">
                  {ProductsFinal.map((item, index) => {
                    let current_price = Math.floor(
                      item.price.current_price / 10
                    );
                    current_price = Intl.NumberFormat().format(current_price);

                    let prev_price = Math.floor(item.price.prev_price / 10);
                    prev_price = Intl.NumberFormat().format(prev_price);
                    return (
                      <div
                        key={index}
                        className="col-6  p-3 d-flex align-items-center justify-content-evenly "
                      >
                        <Link to={`/product/:${item.id}`}>
                          <div className="col-12 d-flex align-items-center justify-content-evenly flex-column gap-3">
                            <div className="col-12 d-flex align-items-center justify-content-evenly ">
                              <img src={item.image} className={"w-75"} alt="" />
                            </div>
                            <div className="d-flex justify-content-end align-items-center col-12">
                              <p className="textTitleItemProduct text-end">
                                {item.title_fa}
                              </p>
                            </div>
                            <div className="col-12  d-flex align-items-center justify-content-between flex-wrap">
                              <div className="d-flex justify-content-start align-items-center gap-1">
                                <FaRegMoneyBillAlt></FaRegMoneyBillAlt>
                                <p className="text-start textTitleItemProduct">
                                  {current_price}
                                </p>
                              </div>
                              {item.price.discount_percent > 0 ? (
                                <>
                                  <div className="">
                                    <p className=" textTitleItemProduct rounded-pill text-white p-1 text-center rounded  bg-danger ">
                                      {item.price.discount_percent}%
                                    </p>
                                  </div>
                                  <div className="col-12">
                                    <p className=" textTitleItemProduct text-decoration-line-through text-secondary  text-start ">
                                      {prev_price}
                                    </p>
                                  </div>
                                </>
                              ) : null}
                            </div>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </InfiniteScroll>
            ) : null
            // <Loader TitleLoading={TitleLoading} />
          }
        </div>
        <div className="col-3 h-auto   justify-content-evenly  rightSideContent d-flex align-items-start ">
          <div className="containerRightSideContent col-12   ">
            <div className="containerSticky col-12 d-flex  align-items-start justify-content-evenly ">
              <AccordionPrice
                FaRegMoneyBillAlt={FaRegMoneyBillAlt}
              ></AccordionPrice>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
