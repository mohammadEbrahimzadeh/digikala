import React from "react";
import { Link } from "react-router-dom";
import InputBoxs from "./Components/InputBoxs";
import BoxCalender from "./Components/BoxCalender";
import MapImg from "../../Img/map.png";
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineFieldTime,
} from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
export default function ContactUs() {
  const MySwal = withReactContent(Swal);
  return (
    <div className="ContactUs p-3">
      <div className="col-12 p-3 border border-1 rounded rounded-3">
        <div className="col-12 d-flex align-items-center justify-content-end">
          <h1 className="fs-4 border-2 border-danger border-bottom">
            تماس با ما{" "}
          </h1>
        </div>
        <div className="col-12 px-sm-2 mt-3 d-flex  align-items-center justify-content-between">
          <div className="d-none d-sm-flex">
            <button className="btn border border-1 border-info p-2">
              <Link className=" text-info  fs-6" to={"/faq"}>
                پرسش های متداول
              </Link>
            </button>
          </div>
          <div>
            <p dir="rtl" className="text-end fs-6 ">
              لطفاً پیش از ارسال ایمیل یا تماس تلفنی ابتدا
              <Link to={"/faq"} className="fs-6 text-primary me-1">
                پرسش های متداول
              </Link>{" "}
              را مشاهده کنید
            </p>
          </div>
        </div>
        <div className="col-12 d-flex flex-row-reverse align-items-center  justify-content-start flex-wrap mt-3">
          <InputBoxs title="موضوع" requiredProp={true}></InputBoxs>
          <InputBoxs title="نام و نام خانوادگی" requiredProp={true}></InputBoxs>
          <InputBoxs title="ایمیل" requiredProp={true}></InputBoxs>
          <InputBoxs title="تلفن تماس" requiredProp={true}></InputBoxs>
          <InputBoxs title="شماره سفارش" requiredProp={false}></InputBoxs>
          <div className="col-12  p-2">
            <div className="col-12 text-end d-flex align-items-center justify-content-end ">
              <p className={`fs-3 me-2 text-danger`}>•</p>
              <p className="fs-5">متن پیام</p>
            </div>
            <div className="col-12 mt-2 ">
              <textarea
                style={{ resize: "none", height: "10rem" }}
                required
                dir="rtl"
                className="fs-5 pe-2 rounded rounded-3 inputContactUs rounded  w-100"
              />
            </div>
          </div>
        </div>
        <div className="col-12 mt-3 py-5 px-3 gap-4 border border-1 rounded rounded-2 d-flex flex-column align-items-start justify-content-center">
          <div className="col-12 d-flex align-items-start justify-content-center">
            <p dir="rtl" className="fs-6  text-center">
              حداکثر ۵ تصویر jpeg یا PNG حداکثر یک مگابایت، یک ویدیو MP4 حداکثر
              ۵۰ مگابایت
            </p>
          </div>
          <div className="col-12 d-flex align-items-start justify-content-center">
            <button className="fs-6 btn border  border-1 border-danger p-2 text-danger text-center"
               onClick={() =>
                MySwal.fire({
                  title: (
                    <span className="fs-4">این دکمه موقتا غیرفعال میباشد</span>
                  ),
                  customClass: {
                    popup: "popupPad",
                    confirmButton: "confirmButtonPad",
                  },
                })
              }>
              افزودن عکس یا منو
            </button>
          </div>
        </div>
        <div className="col-12 mt-3 d-flex align-items-center justify-content-start">
          <button
            className="col-12 col-sm-auto fs-6  btn btn-secondary p-2 "
            onClick={() =>
              MySwal.fire({
                title: (
                  <span className="fs-4">این دکمه موقتا غیرفعال میباشد</span>
                ),
                customClass: {
                  popup: "popupPad",
                  confirmButton: "confirmButtonPad",
                },
              })
            }
          >
            ثبت و ارسال
          </button>
        </div>
      </div>
      <div className="col-12 mt-3">
        <div className="col-12 d-flex align-items-center justify-content-end">
          <h1 className="fs-5 text-center pb-2 border-bottom border-2 border-danger">
            تعطیلات دیجی‌کالا
          </h1>
        </div>
        <div className="col-12 mt-3 d-flex align-items-center justify-content-end">
          <p className="fs-6 text-end ">
            روزهایی که به دلیل تعطیلی رسمی، دیجی‌کالا هیچ‌گونه پاسخگویی،
            سرویس‌دهی و خدماتی ندارد، در سال ۱۴۰۱ به شرح زیر است:
          </p>
        </div>
        <div className="col-12 mt-3 d-flex  flex-wrap align-items-center justify-content-center">
          <div className="col-sm-12  flex-row-reverse col-md-10 col-xl-7 col-12  d-flex align-items-start justify-content-center flex-wrap">
            <BoxCalender
              title={"فروردین"}
              date={"13"}
              discription={"روز طبیعت"}
            ></BoxCalender>
            <BoxCalender
              title={"خرداد"}
              date={"14"}
              discription={"رحلت امام خمینی"}
            ></BoxCalender>
            <BoxCalender
              title={"مرداد"}
              date={"17"}
              discription={"تاسوعا"}
            ></BoxCalender>
            <BoxCalender
              title={"مرداد"}
              date={"18"}
              discription={"عاشورا"}
            ></BoxCalender>
            <BoxCalender
              title={"مرداد"}
              date={"26"}
              discription={"اربعین حسینی"}
            ></BoxCalender>
            <BoxCalender
              title={"مهر"}
              date={"3"}
              discription={"رحلت حضرت رسول"}
            ></BoxCalender>
            <BoxCalender
              title={"بهمن"}
              date={"22"}
              discription={"سالگرد پیروزی انقلاب"}
            ></BoxCalender>
          </div>
        </div>
      </div>
      <div className="col-12 px-3 py-4 mt-3 border border-1 rounded rounded-3">
        <div className="col-12 text-end d-flex align-items-center justify-content-end">
          <h1 className="border-bottom border-2 pb-2 border-danger  fs-5">
            اطلاعات دیجی‌کالا
          </h1>
        </div>
        <div className="col-12 mt-3 gap-2  flex-column  d-flex align-items-end justify-content-vrnter">
          <h1 dir="rtl" className="fs-5 text-end">
            دفتر مرکزی
          </h1>
          <p dir="rtl" className="fs-6 text-end">
            استان تهران شهر تهران - خیابان گاندی جنوبی - نبش خیابان ۲۱ - پلاک ۲۸
          </p>
        </div>
        <div className="col-12 mt-3 gap-2  flex-column  d-flex align-items-end justify-content-vrnter">
          <h1 dir="rtl" className="fs-5 text-end">
            خدمات پس از فروش
          </h1>
          <p dir="rtl" className="fs-6 text-end">
            لطفاً کالا را برای بازگرداندن و ارسال آن به خدمات پس از فروش
            دیجی‌کالا از طریق پست، تنها به صندوق پستی 3469-15875 ارسال کنید.(شما
            می‌توانید از طریق بخش سفارش‌های من اقدام به بازگردانی کالا کنید)
          </p>
        </div>
        <div className="col-12 my-3 gap-2  flex-column  d-flex align-items-end justify-content-vrnter">
          <h1 dir="rtl" className="fs-5 text-end">
            مرکز امور مشتریان
          </h1>
          <p dir="rtl" className="fs-6 text-end">
            تهران، نارمک ، رسالت شرق به غرب بعد از خیابان حیدرخانی، نرسیده به
            خیابان ۱۲ پلاک ۵۴۹ (شنبه تا جمعه ۱۰ الی ۲۱ به جز ایام تعطیل رسمی)
            تهران، ونک ، خیابان ولیعصر، خیابان خدامی ، روبه روی هتل هما ، نبش
            شادی ۱، پلاک ۱/۳۱ (شنبه تا جمعه ۱۰ الی ۲۱ به جز ایام تعطیل رسمی)
            تهران، بلوار فرحزادی، نبش سیمای ایران، مرکز خرید پلاتین، طبقه اول
            واحد ۱۰۷(شنبه تا جمعه ۱۰ الی ۲۱ به جز ایام تعطیل رسمی)
          </p>
        </div>
        <div className="col-12 d-flex align-items-center justify-content-center rounded rounded-3">
          <img src={MapImg} className={"w-100 h-100 "} alt="" />
        </div>
        <hr className="my-3" />
        <div className="col-12 mt-3 d-flex align-items-center justify-content-center ">
          <div className="d-flex align-items-center text-sm-end justify-content-start  gap-2 flex-column">
            <p className=" fs-6 w-100 " dir="rtl">
              <AiOutlinePhone className="text-primary"></AiOutlinePhone> &nbsp;
              تلفن تماس و فکس 02161930000
            </p>
            <p className=" fs-6  w-100" dir="rtl">
              <AiOutlineMail className="text-primary"></AiOutlineMail> &nbsp;
              ایمیل سازمانی info@digikala.com{" "}
            </p>
            <p className=" fs-6  w-100" dir="rtl">
              <AiOutlineFieldTime className="text-primary"></AiOutlineFieldTime>{" "}
              &nbsp; پاسخگویی ۲۴ ساعته و ۷ روز هفته{" "}
            </p>
          </div>
        </div>
        <hr className="my-3" />
        <div className="col-12 gap-2 d-flex align-items-start justify-content-end ">
          <p className="text-end fs-6" dir="rtl">
            توجه داشته باشید که 300061930000، 100061930000 و 50003101 تنها
            شماره‌هایی هستند که دیجی‌کالا از طریق آن برای کاربران و مشتریان خود
            پیامک (اس ام اس) ارسال می‌کند. بنابراین ارسال هرگونه پیامک تحت عنوان
            دیجی‌کالا، با هر شماره دیگری تخلف و سوء استفاده از نام دیجی‌کالا
            است. در صورت دریافت چنین پیامکی، لطفاً جهت پیگیری قانونی آن را به
            info@digikala.com اطلاع دهید. قابل ذکر است که این شماره‌ها تنها
            سامانه ارسال پیامک هستند و وضعیت پردازش سفارشات مشتریان، رویدادها،
            خدمات و سرویس‌های ویژه دیجی‌کالا را به اطلاع کاربران می‌رسانند.
            لطفاً توجه داشته باشید که امکان دریافت و رسیدگی به پیام‌های شما از
            طریق این شماره‌ها وجود ندارد.
          </p>
          <div className="d-flex align-items-start justify-content-center ">
            <BiTimeFive className="fs-5 " />
          </div>
        </div>
      </div>
    </div>
  );
}
