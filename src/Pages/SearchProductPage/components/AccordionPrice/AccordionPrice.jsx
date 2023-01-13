import React, { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

export default function AccordionPrice({ FaRegMoneyBillAlt }) {
  const [ShowAccordion, setShowAccordion] = useState(false);
  return (
    <div className="AccordionPrice   col-12">
      <div
        className={`headerAccordion p-3 d-flex align-items-start justify-content-between ${
          ShowAccordion ? "border border-info" : ""
        }`}
        onClick={() => setShowAccordion(!ShowAccordion)}
      >
        <p className="text-info titleHeader">
          {ShowAccordion ? (
            <AiOutlineUp></AiOutlineUp>
          ) : (
            <AiOutlineDown></AiOutlineDown>
          )}
        </p>
        <p className="titleHeader">محدوده قیمت</p>
      </div>
      <div
        className={`bodyAccordion    align-items-center justify-content-evenly col-12 d-flex flex-column  gap-2 ${
          ShowAccordion ? "openBody" : "closeBody"
        } `}
      >
        <div
          className="col-12 d-flex justify-content-evenly align-items-center
              "
        >
          <div className="d-flex justify-content-start align-items-center">
            <FaRegMoneyBillAlt></FaRegMoneyBillAlt>
          </div>
          <div>
            <input type="number" className="inputPrice" />
          </div>
          <div>
            <p>از</p>
          </div>
        </div>
        <div
          className="col-12 d-flex justify-content-evenly align-items-center
              "
        >
          <div className="d-flex justify-content-start align-items-center">
            <FaRegMoneyBillAlt></FaRegMoneyBillAlt>
          </div>
          <div>
            <input type="number" className="inputPrice" />
          </div>
          <div>
            <p>از</p>
          </div>
        </div>
        <div className="col-12 px-2"></div>
      </div>
    </div>
  );
}
