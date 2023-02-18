import React, { useEffect, useState, useContext, useMemo } from "react";
import UseDebounce from "../../../../Hooks/UseDebounce";
import { DataForApi } from "../../Contexts/ContextProductSearch";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
export default function AccordionPrice({ FaRegMoneyBillAlt }) {
  const {
    MinValueContextPrice,
    MaxValueContextPrice,
    NumberOfPageResultContext,
  } = useContext(DataForApi);
  const [MinValuePrice, setMinValuePrice] = MinValueContextPrice;
  const [MaxValuePrice, setMaxValuePrice] = MaxValueContextPrice;
  const [NumberOfPageResult, setNumberOfPageResult] = NumberOfPageResultContext;

  const [ShowAccordion, setShowAccordion] = useState(false);

  const [MinValue, setMinValue] = useState(0);
  const [MaxValue, setMaxValue] = useState(100000000);
  const [MinValueInput, setMinValueInput] = useState(0);
  const [MaxValueInput, setMaxValueInput] = useState("100,000,000");
  let PricesAraay = useMemo(() => [MinValue, MaxValue], [MinValue, MaxValue]);
  let debounceValues = UseDebounce(PricesAraay, 1000);
  useEffect(() => {
    let value = Intl.NumberFormat().format(MinValue);
    setMinValueInput(value);
  }, [MinValue]);
  useEffect(() => {
    let value = Intl.NumberFormat().format(MaxValue);
    setMaxValueInput(value);
  }, [MaxValue]);
  useEffect(() => {
    setMinValuePrice(debounceValues[0] * 10);
    setMaxValuePrice(debounceValues[1] * 10);
    setNumberOfPageResult(1);
  }, [debounceValues]);

  return (
    <div className="AccordionPrice   col-12">
      <div
        className={`headerAccordion p-2 p-sm-3 d-flex align-items-center justify-content-evenly ${
          ShowAccordion ? "border border-info" : ""
        }`}
        onClick={() => setShowAccordion(!ShowAccordion)}
      >
        <div className="col-3">
          <p className="text-info titleHeader">
            {ShowAccordion ? (
              <AiOutlineUp></AiOutlineUp>
            ) : (
              <AiOutlineDown></AiOutlineDown>
            )}
          </p>
        </div>
        <div className="col-8">
          <p className="titleHeader text-end text-sm-center w-100 ">
            محدوده قیمت
          </p>
        </div>
      </div>
      <div
        className={`bodyAccordion   mt-2 align-items-center justify-content-center col-12 d-flex flex-column  gap-2 ${
          ShowAccordion ? "openBody" : "closeBody"
        } `}
      >
        <div
          className="col-sm-12 col-10 d-flex   gap-2  gap-sm-0 justify-content-center align-items-center
          "
        >
          <div className=" col-1 pe-sm-4  text-center">
            <FaRegMoneyBillAlt className="labaleInputReng"></FaRegMoneyBillAlt>
          </div>
          <div className="col-9">
            <input
              type="text"
              className="inputPrice w-100 "
              value={MinValueInput}
              onChange={(e) => {
                let value = e.target.value;
                value = value.split(",").join("");
                value = Number(value);
                if (!isNaN(value)) {
                  setMinValue(value);
                }
              }}
              onFocus={(e) => {
                e.target.value = "";
              }}
              onBlur={(e) => {
                e.target.value = MinValueInput;
              }}
            />
          </div>
          <div className="col-1">
            <p className="labaleInputReng">از</p>
          </div>
        </div>
        <div
          className="col-sm-12 col-10 d-flex   gap-2  gap-sm-0 justify-content-center align-items-center
              "
        >
          <div className="col-1 pe-sm-4   text-center">
            <FaRegMoneyBillAlt className="labaleInputReng "></FaRegMoneyBillAlt>
          </div>
          <div className="col-9">
            <input
              type="text"
              className="inputPrice  w-100 "
              value={MaxValueInput}
              onChange={(e) => {
                let value = e.target.value;
                value = value.split(",").join("");
                value = Number(value);
                if (!isNaN(value)) {
                  setMaxValue(value);
                }
              }}
              onFocus={(e) => {
                e.target.value = "";
              }}
              onBlur={(e) => {
                e.target.value = MaxValueInput;
              }}
            />
          </div>
          <div className="col-1 ">
            <p className="labaleInputReng">تا</p>
          </div>
        </div>
        <div className="InputReangeMulti mt-3 col-10 col-sm-12">
          <div className=" col-12">
            <RangeSlider
              min={0}
              max={100000000}
              value={[MinValue, MaxValue]}
              onInput={(value) => {
                setMinValue(value[0]);
                setMaxValue(value[1]);
              }}
            />
          </div>
          <div className=" col-12 d-flex mt-1  justify-content-between align-items-center">
            <div className="col d-flex justify-content-start align-items-center">
              <p className="labaleInputReng text-black">کمترین</p>
            </div>
            <div className="col d-flex justify-content-end align-items-center">
              {" "}
              <p className="labaleInputReng text-black">بیشترین</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
