import React from "react";
import { Link } from "react-router-dom";
import { FaQuestion } from "react-icons/fa";
import { BiSupport, BiEnvelope } from "react-icons/bi";
import { Player, BigPlayButton } from "video-react";
import "video-react/dist/video-react.css"; // import css
import video from "../../videos/whySellInShop.mp4";
import pic2 from "../../Img/returnProduct/2.jpg";
import pic3 from "../../Img/returnProduct/3.jpg";
import pic4 from "../../Img/returnProduct/4.jpg";
import pic5 from "../../Img/returnProduct/5.jpg";
import pic6 from "../../Img/returnProduct/6.jpg";
import pic7 from "../../Img/returnProduct/7.jpg";
import pic8 from "../../Img/returnProduct/8.jpg";
import pic9 from "../../Img/returnProduct/9.png";
import PicBoxs from "./Components/PicBoxs";
export default function ReturnProduct() {
  return (
    <div className="ReturnProduct">
      <div className="col-12 headerFaq d-flex flex-column align-items-center justify-content-center gap-3 ">
        <div className="rounded rounded-1 p-3  rounded-circle bg-white">
          <FaQuestion className="text-info iconHeader" />
        </div>
        <div>
          <h1 className="text-center text-white titleHeader">
            موضوع پرسش شما چیست؟
          </h1>
        </div>
      </div>
      <div className="col-12 p-3 d-flex align-items-center justify-content-center ">
        <Player src={video} className={"w-100"} fluid={false}>
          <BigPlayButton position="center" />
        </Player>
      </div>
      <div className="col-12 px-5">
        <PicBoxs pic={pic2}></PicBoxs>
        <PicBoxs pic={pic3}></PicBoxs>
        <PicBoxs pic={pic4}></PicBoxs>
        <PicBoxs pic={pic5}></PicBoxs>
        <PicBoxs pic={pic6}></PicBoxs>
        <PicBoxs pic={pic7}></PicBoxs>
        <PicBoxs pic={pic8}></PicBoxs>
      </div>
      <div className="col-12 mt-3 px-2 d-flex align-items-center justify-content-center ">
        <p dir="rtl" className="text-center fs-6 ">
          " جهت مشاهده شرایط سرویس گارانتی دیجی کالا{" "}
          <Link to={"/WarrantyShop"} className="text-primary fs-6 bg-white">
            کلیک کنید{" "}
          </Link>{" "}
          "
        </p>
      </div>
      <div className="col-12 mt-3 d-flex align-items-center justify-content-center">
        <div className="col-10 d-flex align-items-center justify-content-end">
          <ul
            dir="rtl"
            className="d-flex list-unstyled gap-3 flex-column align-self-end justify-content-start"
          >
            <li>
              <p className="fs-5 text-danger">کالا را چطور ارسال کنید؟</p>
            </li>
            <li>
              <p className="fs-6">
                -&nbsp; لطفاً قبل از هر اقدامی با کارشناسان پشتیبانی خدمات پس از
                فروش تماس بگیرید.{" "}
              </p>
            </li>
            <li>
              <p className="fs-6">
                -&nbsp;از ارسال کالا بدون هماهنگی با خدمات پس از فروش دیجی‌کالا
                جداً، خودداری کنید.{" "}
              </p>
            </li>
            <li>
              <p className="fs-6">
                -&nbsp;برای ارسال، باید کالا در جعبه یا کارتن اصلی خود به ‏خوبی
                بسته‌بندی شود و لوازم جانبی و همه اقلام همراه مانند کابل، ریموت،
                باطری، دفترچه راهنما، کارت گارانتی، کارت بیمه، بند و قطعات
                بسته‌بندی به همراه کالای اصلی ارسال شود.{" "}
              </p>
            </li>
            <li>
              <p className="fs-6">
                -&nbsp;برچسب‌زدن یا نوشتن توضیحات، آدرس یا هر مورد دیگری روی
                کارتن یا جعبه اصلی کالا و یا پاره و مخدوش کردن آن، امکان استفاده
                از ضمانت بازگشت را از بین خواهد برد. (در صورت لزوم، توضیحات خود
                را پشت فاکتور خرید یا قطعه کاغذ جداگانه‌ای بنویسید.){" "}
              </p>
            </li>
            <li>
              <p className="fs-6">
                -&nbsp;درصورت ارسال با پست پیشتاز، عکس و تصویری از رسید پستی
                تهیه و به آدرس Info@digikala.com ایمیل کنید.{" "}
              </p>
            </li>
            <li>
              <p className="fs-6">
                -&nbsp;گر کالا دارای رمز عبور (Password)، آی دی، اپل آی دی
                (id)یا الگو (pattern) است، لازم است توسط مشتری برداشته شود، تا
                در صورتی که ساکن سایر شهرها هستید، برای بازگرداندن کالا از پست
                پیشتاز پس کرایه اقدام کنید .در صورتی که برخی از شهرها پست پیشتاز
                پس کرایه را نمی پذیرند،تصویر رسید پستی را برای ما ارسال کنید.
                کارشناسان دیجی‌کالا امکان تست آن را داشته باشند.{" "}
              </p>
            </li>
            <div className="col-12">
              {" "}
              <PicBoxs pic={pic8}></PicBoxs>
            </div>
            <li>
              <p className="fs-6">
                اگر ساکن تهران هستید، برای مرجوع کردن کالای خود می توانید به دو
                شیوه زیر اقدام کنید.
              </p>
            </li>
            <li>
              <p className="fs-6">
                -&nbsp;جهت تحویل کالای خود از طریق مامورین جمع آوری دیجی کالا با
                مرکز تماس هماهنگ کنید.
              </p>
            </li>
            <li>
              <p className="fs-6">
                -&nbsp;از نوشتن آدرس روی جعبه یا کارتن اصلی کالا، جداً خودداری
                کنید و در صورت لزوم ، جعبه اصلی محصول را درون کارتن دیگری
                گذاشته، آن را ارسال کنید.{" "}
              </p>
            </li>
            <li>
              <p className="fs-6">
                -&nbsp;بسته خود را به آدرس زیر ارسال کنید.{" "}
              </p>
            </li>
            <li>
              <p className="fs-5">
                استان تهران - شهر تهران - صندوق پستی: 3469 - 15875
              </p>
            </li>
            <li>
              <p className="fs-5 text-danger">
                هزینه بازگشت چطور محاسبه خواهد شد؟{" "}
              </p>
            </li>
            <li>
              <p className="fs-6 ">
                سفارشاتی که ارسال آن ها از طریق اکسپرس دیجی کالا و یا فروشندگان
                صورت گرفته باشد در صورت ثبت درخواست مرجوعی کالا، هر درخواست شامل
                20 هزار تومان هزینه ی بازگشت میباشد. هنگام ثبت درخواست مرجوعی
                هزینه ی بازگشت را میتوانید از طریق حساب کاربری خود مشاهده نمایید
                و بعد از بازگشت و پذیرش کالا این مورد از طریق پیامک به شما اطلاع
                رسانی خواهد شد. لازم به ذکر میباشد هزینه ی بازگشت کالا شامل
                مشتریان دیجی پلاس نمیباشد. در صورتی که هزینه ی بازگشت به سفارش
                شما تعلق گرفته باشد هزینه ی بازگشت از مبلغ مرجوعی کسر و باقی
                مانده ی مبلغ به حسابتان واریز خواهد شد. - اگر ایراد فنی، وجود
                مغایرت فنی یا فیزیکی یا آسیب دیدگی ظاهری، به تایید کارشناسان
                خدمات پس از فروش دیجی‌کالا برسد، هزینه‌های ارسال به عهده
                دیجی‌کالا است. - برای واریز هزینه پست به حساب مشتری، تصویر رسید
                را به آدرس Info@digikala.com ارسال فرمایید.{" "}
              </p>
            </li>
            <li>
              <p className="fs-5 text-primary">
                چطور درخواست خود را جهت مرجوعی کالا به شما اطلاع دهم؟
              </p>
            </li>
            <li>
              <p className="fs-6 fw-bold">
                از طریق یکی از روش‌های زیر، درخواست خود را اطلاع دهید:
              </p>
            </li>
            <li>
              <p className="fs-6">
                -&nbsp;وارد پروفایل خود شوید و از قسمت سفارشات تحویل شده ،
                درخواست خود را ثبت کنید.
              </p>
            </li>
            <li>
              <p className="fs-6">
                -&nbsp;یا پیام خود را در صفحه "تماس با ما" با انتخاب موضوع خدمات
                پس از فروش، ارسال کنید
              </p>
            </li>
            <li>
              <p className="fs-6 fw-bold mt-3">
                توجه: جهت رسیدگی به درخواست، ذکر شماره پیگیری سفارش در هر یک از
                روش‌های بالا الزامی است.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-12 px-3 my-3">
        <div className="col-12  d-flex align-items-center justify-content-center">
          <p className="fs-5">جواب یا پرسش خود را پیدا نکردید؟</p>
        </div>
        <div className="col-12 mt-3 flex-wrap d-flex align-items-center justify-content-center">
          <div className="col-12 col-sm-6  d-flex align-items-center justify-content-center">
            <div className="col-10 pe-2">
              <div className="col-12 text-end">
                <p className="fs-4">ارسال پیام</p>
              </div>
              <div className="col-12  mt-2 d-flex align-items-center justify-content-center ">
                <Link className="col-12 col-sm-4" to={"/contactUs"}>
                  <button className="btn btn-secondary w-100 fs-6  p-2">
                    فرم تماس باما
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-2 text-center " style={{ fontSize: "3.5rem" }}>
              <BiEnvelope />
            </div>
          </div>
          <div className="col-12 col-sm-6  d-flex align-items-center justify-content-center">
            <div className="col-10 pe-2">
              <div className="col-12 text-end">
                <p className="fs-4">تماس تلفنی</p>
              </div>
              <div className="col-12  mt-2 d-flex align-items-center justify-content-center ">
                <p className="fs-3">021-61930000</p>
              </div>
            </div>
            <div className="col-2 text-center " style={{ fontSize: "3.5rem" }}>
              <BiSupport />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
