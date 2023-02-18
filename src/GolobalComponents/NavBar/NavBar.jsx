import React, { useEffect, useState, useMemo } from "react";

import { Link, useNavigate, NavLink } from "react-router-dom";
import { RiShoppingCartLine } from "react-icons/ri";
import { BiLogIn } from "react-icons/bi";
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
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
import Swal from "sweetalert2";

import withReactContent from "sweetalert2-react-content";
export default function NavBar() {
  const MySwal = withReactContent(Swal);
  let Navigate = useNavigate();

  const [Categorys, setCategorys] = useState();
  const [ValueInputSearch, setValueInputSearch] = useState("");
  const [ResultSearchArray, setResultSearchArray] = useState(null);
  const [IsOpenMenuMobile, setIsOpenMenuMobile] = useState("");
  let valueDebance = useMemo(() => ValueInputSearch, [ValueInputSearch]);
  let DebounceValueInput = UseDebounce(valueDebance, 500);
  useEffect(() => {
    HomePage().then((res) => setCategorys(res.results));
  }, []);
  useEffect(() => {
    if (DebounceValueInput) {
      SearchProductApi(undefined, undefined, DebounceValueInput, 1).then(
        (res) => {
          setResultSearchArray(res);
        }
      );
    } else {
      setResultSearchArray(null);
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
      <div className="NavBar overflow-hidden  position-sticky top-0 bg-white">
        <div className="mainContainerNavbar   flex-wrap justify-content-between align-items-center  p-3 col-12 d-flex ">
          <div className="  col-12 mb-3 position-relative d-flex align-items-center justify-content-center d-sm-none ">
            <div className="col-12 d-flex align-items-center justify-content-center">
              <Link
                to="/"
                className="col-12 d-flex bg-white align-items-center justify-content-center"
              >
                <img className="w-50 " src={logo} alt="logo" />
              </Link>
            </div>
            <div
              className={`IconOpenMenuMobaile position-absolute end-0  d-flex justify-content-center  align-items-center d-sm-none 
          `}
            >
              <p
                className="fs-4  mt-0 pt-0  text-center"
                onClick={() => setIsOpenMenuMobile(true)}
              >
                <AiOutlineMenu />
              </p>
            </div>
            {console.log(IsOpenMenuMobile == false)}
            <div
              className={`col-12  position-fixed  sectionMenu    ${
                IsOpenMenuMobile ? "openMenuMobile " : "closeMenuMobile  "
              } `}
              onClick={(e) => {
                let classList = e.target.classList;
                classList.forEach((item) => {
                  if (item == "sectionMenu") {
                    setIsOpenMenuMobile(false);
                  }
                });
              }}
            >
              <div
                className={`containerMenuMobile bg-white position-fixed p-3 d-flex 
             align-items-center justify-content-start col-6  flex-column   ${
               IsOpenMenuMobile ? "openMenuMobile" : "closeMenuMobile"
             } `}
              >
                <div className="col-12 d-flex align-items-center justify-content-start">
                  <p
                    className="fs-4"
                    onClick={() => setIsOpenMenuMobile(false)}
                  >
                    <AiOutlineClose />
                  </p>
                </div>
                <ul className="list-unstyled col-12 text-center justify-content-center align-items-start d-flex flex-column gap-3">
                  <li className="col-12 ">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? " text-danger w-100 col-12" : " w-100 col-12"
                      }
                      to="/"
                    >
                      <p className="fs-6">صفحه اصلی</p>
                    </NavLink>
                  </li>
                  <li
                    className="col-12"
                    onMouseLeave={leaveOnCatagory}
                    onMouseOver={hoverOnCatagory}
                  >
                    <p className="fs-6">دسته بندی</p>
                  </li>
                  <li className="col-12">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? " text-danger w-100 col-12" : " w-100 col-12"
                      }
                      to="/faq"
                    >
                      <p className="fs-6">سوالات متداول</p>
                    </NavLink>
                  </li>

                  <div
                    onMouseOver={hoverOnCatagory}
                    onMouseLeave={leaveOnCatagory}
                    className={`${
                      showSubmeny ? "d-block  bg-light " : "d-none"
                    } subMenuMobile col-12 p-3 position-absolute   `}
                  >
                    <ul className="list-unstyled  col-12 text-end justify-content-center align-items-end gap-3 d-flex flex-column">
                      {Categorys
                        ? Categorys.categories.map((item) => {
                            return (
                              <NavLink
                                className={({ isActive }) =>
                                  isActive ? "col-12 text-danger " : "col-12"
                                }
                                key={item.id}
                                to={`/search/${item.code}`}
                                onClick={() => {
                                  setshowSubmeny(false);
                                  setIsOpenMenuMobile(false);
                                }}
                              >
                                <li className="text-center col-12 p-2 ">
                                  {item.title_fa}
                                </li>
                              </NavLink>
                            );
                          })
                        : ""}
                    </ul>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div className="  d-flex gap-3  align-items-center col-5  col-sm-3   justify-content-center">
            <div className=" ">
              <button
                className="p-0 "
                onClick={() =>
                  MySwal.fire({
                    title: (
                      <span className="fs-4">
                        این دکمه موقتا غیرفعال میباشد
                      </span>
                    ),
                    customClass: {
                      popup: "popupPad",
                      confirmButton: "confirmButtonPad",
                    },
                  })
                }
              >
                <p className="" style={{ fontSize: "1.1rem" }}>
                  <RiShoppingCartLine />
                </p>
              </button>
            </div>
            <div>
              {" "}
              <div className="containerDivLogin ">
                <button
                  className="p-1 m-0 d-flex align-items-center "
                  onClick={() =>
                    MySwal.fire({
                      title: (
                        <span className="fs-4">
                          این دکمه موقتا غیرفعال میباشد
                        </span>
                      ),
                      customClass: {
                        popup: "popupPad",
                        confirmButton: "confirmButtonPad",
                      },
                    })
                  }
                >
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
                onKeyDown={(event) => {
                  if (event.keyCode == 13) {
                    if (
                      ResultSearchArray &&
                      ResultSearchArray.status !== 404 &&
                      DebounceValueInput
                    ) {
                      setValueInputSearch("");
                      setShowIconSearch(true);
                      Navigate(`/search/${event.target.value}`);
                    }
                  }
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
                                  setValueInputSearch("");
                                  setShowIconSearch(true);
                                  Navigate(`/search/${item}`);
                                  // setValueInputSearch(item);
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
              <Link
                to={"/"}
                className="col-12"
                style={{ backgroundColor: "white" }}
              >
                <img className="w-100 " src={logo} alt="logo" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" mainContainerMenu  d-none d-sm-block px-sm-5 p-1 position-sticky ">
        <ul className="list-unstyled justify-content-start align-items-center d-flex flex-row-reverse">
          <li className="col-2">
            <NavLink
              className={({ isActive }) =>
                isActive ? " text-danger w-100 col-12" : " w-100 col-12"
              }
              to="/"
            >
              <p>صفحه اصلی</p>
            </NavLink>
          </li>
          <li
            className="col-2"
            onMouseLeave={leaveOnCatagory}
            onMouseOver={hoverOnCatagory}
          >
            <p>دسته بندی</p>
          </li>
          <li className="col-3">
            <NavLink
              className={({ isActive }) =>
                isActive ? " text-danger w-100 col-12" : " w-100 col-12"
              }
              to="/faq"
            >
              <p>سوالات متداول</p>
            </NavLink>
          </li>

          <div
            onMouseOver={hoverOnCatagory}
            onMouseLeave={leaveOnCatagory}
            className={`${
              showSubmeny ? "d-block  bg-light " : "d-none"
            } subMenu col-6 p-3 position-absolute   `}
          >
            <ul className="list-unstyled  text-end justify-content-center align-items-end gap-3 d-flex flex-column">
              {Categorys
                ? Categorys.categories.map((item) => {
                    return (
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "col-12 text-danger " : "col-12"
                        }
                        key={item.id}
                        to={`/search/${item.code}`}
                      >
                        <li className="text-end  p-2 ">{item.title_fa}</li>
                      </NavLink>
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
