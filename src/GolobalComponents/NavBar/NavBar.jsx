import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiShoppingCartLine } from "react-icons/ri";
import { BiLogIn } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import logo from "./../../Img/logo.svg";
import SearchProductApi from "../../Apis/SearchProductApi";
import HomePage from "../../Apis/HomePage";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
// import required modules
import { FreeMode } from "swiper";
import UseDebounce from "../../Hooks/UseDebounce";
export default function NavBar() {
  const [Categorys, setCategorys] = useState();
  const [ValueInputSearch, setValueInputSearch] = useState("");
  const [ResultSearchArray, setResultSearchArray] = useState(null);
  let DebounceValueInput = UseDebounce(ValueInputSearch, 500);

  useEffect(() => {
    HomePage().then((res) => setCategorys(res.results));
  }, []);
  useEffect(() => {
    if (DebounceValueInput) {
      SearchProductApi(DebounceValueInput, 1).then((res) => {
        setResultSearchArray(res);
      });
    }
  }, [DebounceValueInput]);
  const [ShowIconSearch, setShowIconSearch] = useState(true);
  const [showSubmeny, setshowSubmeny] = useState(false);

  function hoverOnCatagory() {
    setshowSubmeny(true);
  }
  function leaveOnCatagory() {
    setshowSubmeny(false);
  }
  const closeInputResultSearch = () => {
    setValueInputSearch("");
    setShowIconSearch(true);
    setResultSearchArray(null);
  };
  return (
    <>
      <div className="NavBar  position-sticky top-0 bg-white">
        <div className="mainContainerNavbar   flex-wrap justify-content-between align-items-center  p-3 col-12 d-flex ">
          <div className="  col-12 mb-2  d-flex justify-content-center d-sm-none ">
            <img className="w-25  " src={logo} alt="logo" />
          </div>
          <div className="  d-flex gap-3  align-items-center col-5  col-sm-3   justify-content-center">
            <div className=" ">
              <button className="p-0 ">
                <p className="" style={{ fontSize: "1.1rem" }}>
                  <RiShoppingCartLine />
                </p>
              </button>
            </div>
            <div>
              {" "}
              <div className="containerDivLogin ">
                <button className="p-1 m-0 d-flex align-items-center ">
                  <p className="">ورود</p>
                  <p className="  m-0 h-100">
                    <BiLogIn />
                  </p>
                </button>
              </div>
            </div>
          </div>
          <div className="d-flex  col-7  gap-3 align-items-center justify-content-end">
            <div className=" col-sm-9 col-11 d-flex align-items-center  containerDivSearchInput">
              <input
                value={ValueInputSearch}
                style={{ fontSize: "1.0rem" }}
                onFocus={() => {
                  setShowIconSearch(false);
                }}
                onChange={(event) => {
                  setValueInputSearch(event.target.value);
                }}
                className={`w-100 p-1 pe-2 ${
                  ShowIconSearch ? "" : "focusInput"
                }`}
                type="text"
                placeholder="جستجو  ..."
              />
              <div
                className={`
               containerDivIcon  `}
              >
                {ShowIconSearch ? (
                  <p className="p-0 m-0" style={{ fontSize: "0.9rem" }}>
                    <AiOutlineSearch></AiOutlineSearch>
                  </p>
                ) : (
                  <button
                    className=""
                    onClick={() => {
                      closeInputResultSearch();
                    }}
                  >
                    <p
                      className="text-danger m-0 p-0"
                      style={{ fontSize: "0.8rem" }}
                    >
                      -
                    </p>
                  </button>
                )}
              </div>
              <div
                className={`backgroundModalResultSearch ${
                  ShowIconSearch ? "d-none" : ""
                }`}
                onClick={() => {
                  closeInputResultSearch();
                }}
              ></div>

              <div
                className={`resultsSearchModal    py-3 d-flex flex-column justify-content-start  align-items-end   ${
                  ValueInputSearch ? "" : "d-none"
                }`}
              >
                {ResultSearchArray &&
                ResultSearchArray.status !== 404 &&
                DebounceValueInput ? (
                  <>
                    {ResultSearchArray.results.products.length > 1 ? (
                      <div className="col-12 ">
                        <Swiper
                          dir="rtl"
                          freeMode={true}
                          spaceBetween={10}
                          modules={[FreeMode]}
                          className="mySwiper col-12 "
                          breakpoints={{
                            0: { slidesPerView: 2 },
                            578: { slidesPerView: 3 },
                          }}
                        >
                          {ResultSearchArray.results.products.map(
                            (item, index) => {
                              return (
                                <SwiperSlide key={index} className={"ms-2"}>
                                  <Link to={`/product/:${item.id}`}>
                                    <div
                                      className=" col-12 d-flex align-items-start justify-content-start gap-1  "
                                      onClick={() => {
                                        closeInputResultSearch();
                                      }}
                                    >
                                      <div className="col-4">
                                        <img
                                          src={item.image}
                                          className={"w-100"}
                                          alt=""
                                        />
                                      </div>
                                      <div className="col-8">
                                        <p className="itemTextSlider">
                                          {item.title_fa}
                                        </p>
                                      </div>
                                    </div>
                                  </Link>
                                </SwiperSlide>
                              );
                            }
                          )}
                        </Swiper>
                      </div>
                    ) : (
                      <div className="col-12 ">
                        <p className="itemText text-center">نتیجه یافت نشد</p>
                      </div>
                    )}
                    {ResultSearchArray.results.relatedWords
                      ? ResultSearchArray.results.relatedWords.map(
                          (item, index) => {
                            return (
                              <div
                                dir="rtl"
                                key={index}
                                onClick={() => {
                                  setValueInputSearch(item);
                                }}
                                className="col-12 gap-1 d-flex justify-content-start align-items-center containerItemSearch px-1 py-3 "
                              >
                                <AiOutlineSearch className="itemText"></AiOutlineSearch>
                                <p className="text-end itemText">{item}</p>
                              </div>
                            );
                          }
                        )
                      : null}
                  </>
                ) : (
                  <div className="col-12 ">
                    <p className="itemText text-center">نتیجه یافت نشد</p>
                  </div>
                )}
              </div>
            </div>
            <div className="  col-3  d-none d-sm-flex">
              <img className="w-100" src={logo} alt="logo" />
            </div>
          </div>
        </div>
      </div>
      <div className=" mainContainerMenu  d-none d-sm-block px-sm-5 p-1 position-sticky ">
        <ul className="list-unstyled gap-4 d-flex flex-row-reverse">
          <li onMouseLeave={leaveOnCatagory} onMouseOver={hoverOnCatagory}>
            دسته بندی
          </li>
          <li>صفحه اصلی</li>
          <li>سوپر مارکتی</li>
          <li>پرفروش ترین ها</li>
          <li>شگفت انگیز</li>
          <li>سوالات متداول</li>
          <div
            onMouseOver={hoverOnCatagory}
            onMouseLeave={leaveOnCatagory}
            className={`${
              showSubmeny ? "d-block  bg-light " : "d-none"
            } subMenu col-4 p-3 position-absolute   `}
          >
            <ul className="list-unstyled  text-end justify-content-center align-items-end gap-4 d-flex flex-column">
              {Categorys
                ? Categorys.categories.map((item) => {
                    return (
                      <li key={item.id} className="text-end ">
                        {item.title_fa}
                      </li>
                    );
                  })
                : ""}
            </ul>
          </div>
        </ul>
      </div>
    </>
  );
}
