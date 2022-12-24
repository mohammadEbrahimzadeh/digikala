import React from "react";
import PriginalProducts from "../../Img/original-products";
import DaysReturn from "../../Img/days-return";
import Support from "../../Img/support";
import CashDelivery from "../../Img/cash-on-delivery";
export default function OptionsSendProduct({ grayAllElems }) {
  return (
    <div
      className={`col-12 d-flex  OptionsSendProduct flex-wrap justify-content-evenly mt-3 align-items-start ${grayAllElems}`}
    >
      <div className="col-sm-3 col-6 p-3 d-flex  flex-column justify-content-center align-items-center">
        <PriginalProducts></PriginalProducts>
        <p className="text-center  descriptionBoxsServices ">
          ضمانت اصل بودن كالا
        </p>
      </div>

      <div className="col-sm-3 col-6 p-3 d-flex  flex-column justify-content-center  align-items-center">
        {" "}
        <DaysReturn></DaysReturn>
        <p className="text-center  descriptionBoxsServices ">
          هفت روز ضمانت بازگشت كالا
        </p>
      </div>
      <div className="col-sm-3 col-6 p-3 d-flex  flex-column justify-content-center align-items-center">
        {" "}
        <Support></Support>
        <p className="text-center descriptionBoxsServices ">
          پشتيباني 24 ساعته
        </p>
      </div>
      <div className="col-sm-3 col-6 p-3 d-flex  flex-column justify-content-center align-items-center">
        {" "}
        <CashDelivery></CashDelivery>
        <p className="text-center descriptionBoxsServices ">
          امکان پرداخت در محل
        </p>
      </div>
    </div>
  );
}
