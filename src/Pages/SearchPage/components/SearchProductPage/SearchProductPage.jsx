import React, { useEffect, useState, useContext, useMemo } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link, useNavigate, useParams } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
// import required modules
import { FreeMode } from "swiper";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { AiFillFilter, AiOutlineClose } from "react-icons/ai";

// -----------------
import { DataForApi } from "../../Contexts/ContextProductSearch";
import Loader from "../../../../GolobalComponents/Loader/Loader";
import HomePage from "../../../../Apis/HomePage";
import SearchProductApi from "../../../../Apis/SearchProductApi";
import AccordionPrice from "../AccordionPrice/AccordionPrice";
export default function SearchProductPage() {
  let { query } = useParams();
  const {
    MinValueContextPrice,
    MaxValueContextPrice,
    NumberOfPageResultContext,
  } = useContext(DataForApi);
  const [MinValue, setMinValue] = MinValueContextPrice;
  const [MaxValue, setMaxValue] = MaxValueContextPrice;
  const [NumberOfPageResult, setNumberOfPageResult] = NumberOfPageResultContext;
  let Navigate = useNavigate();
  const [ArrayCategorys, setArrayCategorys] = useState();
  const [ArrayResultSearch, setArrayResultSearch] = useState();
  const [ProductsFinal, setProductsFinal] = useState([]);
  // const [TitleLoading, setTitleLoading] = useState();
  const [SortPriceMinValue, setSortPriceMinValue] = useState(true);
  const [ShowModalSort, setShowModalSort] = useState(false);
  let NumberOfPageResultPage = NumberOfPageResult;
  useMemo(() => {
    if (ProductsFinal) {
      let arr = [...ProductsFinal];
      if (SortPriceMinValue) {
        arr.sort((a, b) => a.price.current_price - b.price.current_price);
        setProductsFinal(arr);
      } else {
        arr.sort((a, b) => b.price.current_price - a.price.current_price);
        setProductsFinal(arr);
      }
    }
  }, [SortPriceMinValue]);
  useEffect(() => {
    HomePage().then((res) => {
      setArrayCategorys(res.results.categories);
    });
    SearchProductApi(MinValue, MaxValue, query, NumberOfPageResult).then(
      (res) => {
        if (res.status == 404 || res.results.products.length <= 0) {
          RidirectPage();
        } else {
          let arr = res.results.products;
          setArrayResultSearch(res);
          if (SortPriceMinValue) {
            arr.sort((a, b) => a.price.current_price - b.price.current_price);
            setProductsFinal(arr);
          } else {
            arr.sort((a, b) => b.price.current_price - a.price.current_price);
            setProductsFinal(arr);
          }
        }
      }
    );
  }, []);
  useEffect(() => {
    SearchProductApi(0, 100000000, query, 1).then((res) => {
      if (res.status == 404 || res.results.products.length <= 0) {
        RidirectPage();
      } else {
        let arr = res.results.products;
        setArrayResultSearch(res);
        if (SortPriceMinValue) {
          arr.sort((a, b) => a.price.current_price - b.price.current_price);
          setProductsFinal(arr);
        } else {
          arr.sort((a, b) => b.price.current_price - a.price.current_price);
          setProductsFinal(arr);
        }
      }
    });
  }, [query]);

  useEffect(() => {
    SearchProductApi(MinValue, MaxValue, query, NumberOfPageResult).then(
      (res) => {
        if (res.status !== 404) {
          let arr = [...ProductsFinal, ...res.results.products];
          setArrayResultSearch(res);
          if (SortPriceMinValue) {
            arr.sort((a, b) => a.price.current_price - b.price.current_price);
            setProductsFinal(arr);
          } else {
            arr.sort((a, b) => b.price.current_price - a.price.current_price);
            setProductsFinal(arr);
          }
        }
      }
    );
  }, [NumberOfPageResultPage]);

  useEffect(() => {
    SearchProductApi(MinValue, MaxValue, query, NumberOfPageResult).then(
      (res) => {
        if (res.status !== 404) {
          let arr = res.results.products;
          setArrayResultSearch(res);
          if (SortPriceMinValue) {
            arr.sort((a, b) => a.price.current_price - b.price.current_price);
            setProductsFinal(arr);
          } else {
            arr.sort((a, b) => b.price.current_price - a.price.current_price);
            setProductsFinal(arr);
          }
        }
      }
    );
  }, [MinValue, MaxValue]);

  // useEffect(() => {
  //   if (ProductsFinal) {
  //     let arr = [...ProductsFinal];
  //     if (SortPriceMinValue) {
  //       arr.sort((a, b) => a.price.current_price - b.price.current_price);
  //       setProductsFinal(arr);
  //     } else {
  //       arr.sort((a, b) => b.price.current_price - a.price.current_price);
  //       setProductsFinal(arr);
  //     }
  //   }
  // }, [SortPriceMinValue]);

  function RidirectPage() {
    // setTitleLoading("نتیجه یافت نشد");
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
          <div className="col-12 d-flex align-items-center justify-content-evenly gap-2">
            <Swiper
              dir="rtl"
              freeMode={true}
              modules={[FreeMode]}
              className="mySwiper col-12 d-flex align-items-center justify-content-evenly gap-2 "
              breakpoints={{
                0: { slidesPerView: 2, spaceBetween: 0 },
                578: {
                  slidesPerView: ArrayCategorys.length,
                  spaceBetween: 0,
                },
              }}
            >
              {ArrayCategorys.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Link className="col-12  p-3 " to={`/search/${item.code}`}>
                      <div>
                        <div className="col-12">
                          <img src={item.logo} className="w-100" />
                        </div>
                        <div className="col-12">
                          <p className="titleItemCategory text-center">
                            {item.title_fa}
                          </p>
                        </div>
                      </div>{" "}
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      ) : null}
      {/* ---------------------- */}
      <div className="containerMainContent d-flex align-items-stretch justify-content-evenly">
        <div className="col-sm-9  col-12 leftSideContent ">
          <div className="col-12 pe-sm-2 gap-sm-4 d-none d-sm-flex justify-content-end align-items-center containerSticky gap-2 bg-white pb-1 pt-3 ">
            <div className="">
              <p
                className={`itemFilter text-center ${
                  SortPriceMinValue
                    ? ""
                    : "text-danger border-bottom border-1 border-danger"
                }`}
                onClick={() => setSortPriceMinValue(false)}
              >
                براساس بیشترین قیمت
              </p>
            </div>
            <div className="">
              <p
                className={`itemFilter text-center  ${
                  SortPriceMinValue
                    ? "text-danger border-bottom border-1 border-danger"
                    : ""
                }`}
                onClick={() => setSortPriceMinValue(true)}
              >
                براساس کمترین قیمت
              </p>
            </div>
          </div>
          <div className="col-12 d-flex d-sm-none justify-content-end align-items-center containerSticky bg-white  py-2 ">
            <div className="">
              <p
                className={`itemFilter text-center ${
                  "SortPriceMinValue" ? "" : ""
                }`}
                onClick={() => {
                  setShowModalSort(true);
                }}
              >
                مرتب سازی
                <AiFillFilter />
              </p>
            </div>
          </div>
          {ArrayResultSearch &&
          ArrayResultSearch.status !== 404 &&
          ProductsFinal.length > 0 ? (
            <>
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
                        className="col-sm-6 col-12  d-flex align-items-center justify-content-evenly p-3 "
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
                                <p className="textTitleItemProduct text-start">
                                  {current_price}
                                </p>
                              </div>
                              {item.price.discount_percent > 0 ? (
                                <>
                                  <div className="">
                                    <p className=" textTitleItemProduct rounded-pill bg-danger rounded p-1 text-center  text-white ">
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
            </>
          ) : (
            <>
              <Loader TitleLoading={"Loading..."} />
            </>
          )}
        </div>
        {/* ------------------ */}
        <div
          className={`col-sm-3 col-12  d-non  d-flex justify-content-evenly  rightSideContent  align-items-start   h-auto  ${
            ShowModalSort ? "openShowModalSort" : "closeShowModalSort"
          } `}
        >
          <div className={`containerRightSideContent col-12  `}>
            <div className="col-12 d-sm-none py-1 pe-2 text-end  ">
              <AiOutlineClose
                style={{ fontSize: "1.0rem" }}
                onClick={() => {
                  setShowModalSort(false);
                }}
              />
            </div>

            <div className=" col-12   d-flex d-sm-none  flex-column align-items-end justify-content-center">
              <div className="col-12 px-3 py-1">
                <p className="textItemSorting text-end">:مرتب سازی بر اساس</p>
              </div>
              <div className="col-12 d-flex justify-content-center align-items-center gap-3">
                <p
                  className={`textItemSorting text-center ${
                    SortPriceMinValue ? "" : "text-danger"
                  }`}
                  onClick={() => {
                    setSortPriceMinValue(false);
                  }}
                >
                  بیشترین قیمت
                </p>
                <p
                  className={`textItemSorting text-center ${
                    SortPriceMinValue ? "text-danger" : ""
                  }`}
                  onClick={() => {
                    setSortPriceMinValue(true);
                  }}
                >
                  کمترین قیمت
                </p>
              </div>
            </div>

            <div className="containerSticky col-12 d-flex  align-items-start justify-content-evenly ">
              <AccordionPrice
                NumberOfPageResult={NumberOfPageResult}
                setNumberOfPageResult={setNumberOfPageResult}
                FaRegMoneyBillAlt={FaRegMoneyBillAlt}
              ></AccordionPrice>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
