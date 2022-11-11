import React, { useEffect } from "react";
import {
  AiOutlineArrowUp,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import PriginalProducts from "../../Img/original-products";
import DaysReturn from "../../Img/days-return";
import Support from "../../Img/support";
import CashDelivery from "../../Img/cash-on-delivery";
import { SiAparat } from "react-icons/si";
import Logo from "../../Img/logo.svg";
export default function Footer() {
  return (
    <div className="Footer p-3">
      <div className="   col-12 d-flex align-items-center justify-content-between">
        <div className="d-flex justify-content-center align-items-center  ms-sm-5">
          <button
            className="border border-1 p-2"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <AiOutlineArrowUp /> بازگشت به بالا
          </button>
        </div>

        <div className="d-flex justify-content-center align-items-center">
          <img src={Logo} className="w-100" alt="" />
        </div>
      </div>
      <div className=" mt-2 gap-2 gap-sm-5 col-12 d-flex flex-column-reverse flex-sm-row justify-content-end align-items-end">
        <div className="d-flex align-items-center justify-content-center">
          <p className="contactTitleHeaderInFooter ">
            ۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم{" "}
          </p>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <p className="contactTitleHeaderInFooter">
            تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱
          </p>
        </div>
      </div>
      <div className="col-12 d-flex  flex-wrap justify-content-evenly mt-3 align-items-start">
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
            پشتيباني 24 ساعته{" "}
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
      <div className="d-flex p-3 mt-sm-4 col-12 flex-wrap flex-sm-row  flex-column-reverse justify-content-evenly align-content-start gap-3 gap-sm-0">
        <div className="col-12 col-sm-3 pe-sm-2  gap-2 d-flex flex-column justify-content-center align-items-end">
          <div className=" d-flex justify-content-end">
            <p className="titleLiFooter fw-bold">!همراه ما باشید</p>
          </div>
          <div className="d-flex col-12 justify-content-evenly align-items-center">
            <div className="fs-1 iconMediaFooter">
              <SiAparat />
            </div>
            <div className="fs-1  iconMediaFooter">
              <AiFillLinkedin />
            </div>
            <div className="fs-1 iconMediaFooter">
              <AiOutlineTwitter />
            </div>
            <div className="fs-1 iconMediaFooter">
              <AiOutlineInstagram />
            </div>
          </div>
          <div className="col-12">
            <p className="text-end contactTitleMediaInFooter">
              با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید
            </p>
          </div>
          <div className="col-12 gap-3 gap-md-2 d-flex justify-content-center align-items-center">
            <div className="col-2 d-flex justify-content-center align-items-center  ">
              <button className="p-1 rounded-3 p-sm-2 bg-danger text-white border-0">
                ثبت
              </button>
            </div>
            <div className="col-7 col-md-8">
              <input
                className="w-100 px-1 py-2 py-sm-4 inputEmailInFooter"
                placeholder="ایمیل شما"
                dir="rtl"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-3 gap-2  gap-sm-3 flex-column d-flex  justify-content-start align-items-end ">
          <div>
            <p className="titleLiFooter text-end fw-bold">
              {" "}
              راهنمای خرید از دیجی‌کالا
            </p>
          </div>
          <div>
            <ul className="list-unstyled d-flex flex-column justify-content-start align-items-end gap-2">
              <li className="liItemFooter">نحوه ثبت سفارش</li>
              <li className="liItemFooter">رویه ارسال سفارش</li>
              <li className="liItemFooter">شیوه پرداخت</li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-sm-3 gap-2  gap-sm-3 flex-column d-flex  justify-content-start align-items-end ">
          <div>
            <p className="titleLiFooter text-end fw-bold"> خدمات مشتریان</p>
          </div>
          <div>
            <ul className="list-unstyled d-flex flex-column justify-content-start align-items-end gap-2">
              <li className="liItemFooter">پاسخ به پرسش های متداول</li>
              <li className="liItemFooter">رویه های بازگرداندن کالا</li>
              <li className="liItemFooter">شرایط استفاده</li>
              <li className="liItemFooter">حریم خصوصی</li>
              <li className="liItemFooter">گزارش باگ</li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-sm-3 gap-2  gap-sm-3 flex-column d-flex  justify-content-start align-items-end ">
          <div>
            <p className="titleLiFooter text-end fw-bold"> با دیجی‌کالا</p>
          </div>
          <div>
            <ul className="list-unstyled d-flex flex-column justify-content-start align-items-end gap-2">
              <li className="liItemFooter">اتاق خبر دیجیکالا</li>
              <li className="liItemFooter">فروش در دیجیکالا</li>
              <li className="liItemFooter">فرصت های شغلی</li>
              <li className="liItemFooter">گزارش تخلف در دیجیکالا</li>
              <li className="liItemFooter">تماس با دیجیکالا</li>
              <li className="liItemFooter">درباره دیجیکالا</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
