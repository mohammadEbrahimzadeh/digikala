import React from "react";
import Logo from "../../Img/logo.svg";
export default function Footer() {
  return (
    <div className="Footer p-3">
      <div className="bg-danger   col-12 d-flex justify-content-between">
        <div>
          <a href=""></a>
        </div>
        <div className="d-flex gap-5 bg-info">
          <div className="d-flex align-items-end justify-content-center bg-warning">
            <p className="contactTitleHeaderInFooter ">
              ۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم{" "}
            </p>
          </div>
          <div>
            <div>
              <img src={Logo} className="w-100" alt="" />
            </div>
            <div className="">
              <p className="contactTitleHeaderInFooter">
                تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
