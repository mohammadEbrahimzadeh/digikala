import React, { useEffect } from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { BiLogIn } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import logo from "./../../Img/logo.svg";
import { useState } from "react";
import { useRef } from "react";
import HomePage from "../../Apis/HomePage";

export default function NavBar() {
  const [Categorys, setCategorys] = useState();
  useEffect(() => {
    HomePage().then((res) => setCategorys(res.results));
  }, []);

  const [showIconSearch, setshowIconSearch] = useState(true);
  const [showSubmeny, setshowSubmeny] = useState(false);
  const inputSeach = useRef();
  function onclickInputSearch() {
    setshowIconSearch(!showIconSearch);
  }
  function blurInputBtnSearch() {
    setshowIconSearch(!showIconSearch);
    inputSeach.current.value = "";
  }
  function hoverOnCatagory() {
    setshowSubmeny(true);
  }
  function leaveOnCatagory() {
    setshowSubmeny(false);
  }
  return (
    <>
      <div className="NavBar  position-sticky top-0 bg-white">
        <div className="mainContainerNavbar   flex-wrap justify-content-between align-items-center  p-3 col-12 d-flex ">
          {" "}
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
                style={{ fontSize: "1.0rem" }}
                ref={inputSeach}
                onBlur={blurInputBtnSearch}
                onFocus={onclickInputSearch}
                className="w-100 p-1 pe-2"
                type="text"
                placeholder="جستجو  ..."
              />
              <div
                className={`
               containerDivIcon  `}
              >
                {showIconSearch ? (
                  <p className="p-0 m-0" style={{ fontSize: "0.9rem" }}>
                    <AiOutlineSearch></AiOutlineSearch>
                  </p>
                ) : (
                  <button className="">
                    <p
                      className="text-danger m-0 p-0"
                      style={{ fontSize: "0.8rem" }}
                    >
                      -
                    </p>
                  </button>
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
