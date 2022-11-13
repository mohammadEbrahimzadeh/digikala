import React, { useEffect, useState } from "react";
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
import enama from "../../Img/enama.png";
import kasbokar from "../../Img/kasbokar.png";
import rezi from "../../Img/rezi.png";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";

export default function Footer() {
  const [showMoreFlag, setshowMoreFlag] = useState(false);
  function CustomToggle({ eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () => {
      setshowMoreFlag(!showMoreFlag);
    });

    return (
      <button
        className="text-info border-0"
        type="button"
        style={{ backgroundColor: "white" }}
        onClick={decoratedOnClick}
      >
        {showMoreFlag ? "مشاهده کمتر" : " مشاهده بیشتر"}
      </button>
    );
  }
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
      <div className="col-12 d-flex flex-wrap">
        <div className="col-sm-4 col-12 d-flex justify-content-evenly align-items-start ">
          <div className="p-3  col-4  d-flex justify-content-center align-items-center">
            <img className="w-100" src={enama} alt="" />
          </div>
          <div className=" mt-3 col-4 d-flex justify-content-center align-items-start  ">
            <img className="w-50 " src={kasbokar} alt="" />
          </div>
          <div className="p-3 col-4 d-flex justify-content-center align-items-center">
            <img className="w-100" src={rezi} alt="" />
          </div>
        </div>
        <div className="col-sm-8 justify-content-end align-items-start text-end p-3">
          <p className=" titleInAccordion fw-bold">
            فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین
          </p>
          <p className=" bodyInAccordion mt-3">
            یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی
            متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمانی کوتاه به دست
            مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی که
            فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و توانسته
            از این طریق مشتریان ثابت خود را داشته باشد.
          </p>
          <Accordion className="bg-white border-0">
            <Card className="bg-white border-0">
              {" "}
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <div className="mt-3">
                    <p className="titleInAccordion fw-bold">
                      کدام محصولات در دیجی‌کالا قابل سفارش هستند؟{" "}
                    </p>
                    <p className=" bodyInAccordion mt-2">
                      تقریبا می‌توان گفت محصولی وجود ندارد که دیجی‌کالا برای
                      مشتریان خود در سراسر کشور فراهم نکرده باشد. شما می‌توانید
                      در تمامی روزهای هفته و تمامی شبانه روز یا در روزهای خاصی
                      مثل حراج شگفت انگیز دیجی‌کالا که محصولات دارای تخفیف عالی
                      می‌شوند، سفارش خود را به سادگی ثبت کرده و در روز و محدوده
                      زمانی مناسب خود، درب منزل تحویل بگیرید. بعضی از گروه‌های
                      اصلی و زیر مجموعه‌های پرطرفدار محصولات دیجی‌کالا شامل
                      مواردی می‌شود که در ادامه به معرفی آن‌ها می‌پردازیم.
                    </p>
                    <p className="mt-3 titleInAccordion fw-bold">
                      {" "}
                      کالای دیجیتال
                    </p>
                    <p className="bodyInAccordion  mt-2">
                      انواع گوشی موبایل از برندهای مختلفی مثل آیفون، گوشی
                      سامسونگ، گوشی نوکیا، گوشی شیائومی، گوشی هواوی، و...، انواع
                      کنسول بازی ps4 و ps5، انواع تبلت‌های پرطرفدار مثل تبلت
                      سامسونگ نوت 10، انواع هندزفری مثل هندزفری بی سیم، تلوزیون
                      از برندهای مختلف مثل تلویزیون سامسونگ، سونی و...، انواع
                      مانیتور، کیس، کیبورد، مودم از برندهای مختلف مثل مودم
                      ایرانسل، آنتن و ... تنها بخشی از محصولاتی هستند که زیر
                      مجموعه کالای دیجیتال در دیجی‌کالا قرار دارند.
                    </p>
                    <p className="mt-3 titleInAccordion fw-bold">
                      خودرو، ابزار و تجهیزات صنعتی
                    </p>
                    <p className="bodyInAccordion mt-2">
                      انواع خودروهای ایرانی و خارجی از برندهای مطرحی مثل هوندا،
                      کیا و...، موتور سیکلت از برندهایی مثل کویر موتور و...،
                      لوازم جانبی خودرو مثل سیستم صوتی تصویر، ضبط و...، لوازم
                      یدکی مثل دیسک و صفحه کلاج و... و لوازم مصرفی خودرو مثل
                      کفپوش سانا در این گروه قرار می‌گیرند.
                    </p>
                    <p className="mt-3 titleInAccordion fw-bold">مد و پوشاک</p>
                    <p className="bodyInAccordion  mt-2">
                      محصولاتی مثل انواع لباس مثل لباس مجلسی زنانه و مردانه،
                      لباس راحتی، لباس ورزشی، اکسسوری، کیف، کفش، عینک آفتابی،
                      لباس زیر، شال و روسری و... جزو مواردی هستند که می‌توانید
                      آن‌ها را از برندهای مطرح ایرانی و خارجی موجود در دیجی کالا
                      مثل آدیداس، نایکی، دبنهامز، آلدو، درسا و... خریداری کنید.
                    </p>
                    <p className="mt-3 titleInAccordion fw-bold">
                      اسباب بازی کودک و نوزاد
                    </p>
                    <p className="bodyInAccordion  mt-2">
                      در این دسته از کالاهای دیجی‌کالا، انواع لوازم بهداشتی و
                      حمام کودک و نوزاد، انواع پوشاک و کفش، تبلت، اسباب‌بازی،
                      لوازم اتاق خواب کودک، لوازم ایمنی، لوازم شخصی و غذا خوری و
                      ... قرار می‌گیرد تا خرید را برای پدر و مادرها به کاری سریع
                      و آسان تبدیل کند.
                    </p>
                    <p className="mt-3 titleInAccordion fw-bold">
                      گزارش های سالیانه دیجی کالا
                    </p>
                    <p className="bodyInAccordion  mt-2">
                      در راستای توجه ویژه به شفافیت به عنوان یکی از اصلی‌ترین
                      ارزش‌های محوری دیجی‌کالا، با شروع سال ۱۳۹۸ داستان‌پردازی
                      با داده‌های آماری و ارائه گزارش‌های سالانه آغاز شد. مسیری
                      که دستاورد آن تا امروز چندین گزارش سالانه و تخصصی مثل
                      گزارش سالانه ۱۳۹۸، گزارش سالانه ۱۳۹۹ و گزارش سالانه ۱۴۰۰
                      دیجی‌کالا هستند. علاوه بر این، گزارش منابع انسانی سال
                      ۱۳۹۹، گزارش منابع انسانی سال ۱۴۰۰ و همچنین گزارش کتاب
                      دیجی‌کالا، از دیگر گزارش‌های تخصصی دیجی‌کالا به حساب
                      می‌آیند. انتشار این گزارش‌ها امکان رصد شفاف‌تر و دقیق‌تر
                      خدمات دیجی‌کالا را فراهم می‌کند، وضعیت بازار
                    </p>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
              <Card.Header className="bg-white my-2 border-0">
                <CustomToggle eventKey="0"></CustomToggle>
              </Card.Header>
            </Card>
          </Accordion>
        </div>
      </div>
      <div className=" col-12  d-flex justify-content-center align-items-center text-center">
        <p className="titleEndOfFooter">
          برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع»
          کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه (فروشگاه
          آنلاین دیجی‌کالا) است.
        </p>
      </div>
    </div>
  );
}
