import React from "react";
import { MdOutlineSupervisedUserCircle } from "react-icons/md";
import Accordion from "react-bootstrap/Accordion";

export default function WarrantyShop() {
  return (
    <div className="WarrantyShop  p-3 pe-sm-5 ">
      <div className="col-12 gap-2 flex-wrap d-flex align-content-center justify-content-end text-end ">
        <p className="fs-1 fw-bold col-12  text-end text-danger ">
          <MdOutlineSupervisedUserCircle
            lineSupervisedUserCircle
            className=""
          />
        </p>
        <p className="fs-4 fw-bold col-12 ">
          شرایط و قوانین استفاده از سرویس‌ها و خدمات دیجی‌کالا
        </p>
        <p className="fs-6 text-primary  col-12 ">
          کاربر گرامی لطفاً موارد زیر را جهت استفاده بهینه از خدمات و
          برنامه‌‏های کاربردی دیجی‌کالا به دقت ملاحظه فرمایید. ورود کاربران به
          وب‏‌سایت دیجی‌کالا هنگام استفاده از پروفایل شخصی، طرح‏‌های تشویقی،
          ویدئوهای رسانه تصویری دیجی‌کالا و سایر خدمات ارائه شده توسط دیجی‌کالا
          به معنای آگاه بودن و پذیرفتن شرایط و قوانین و همچنین نحوه استفاده از
          سرویس‌‏ها و خدمات دیجی‌کالا است. توجه داشته باشید که ثبت سفارش نیز در
          هر زمان به معنی پذیرفتن کامل کلیه شرایط و قوانین دیجی‌کالا از سوی
          کاربر است. لازم به ذکر است شرایط و قوانین مندرج، جایگزین کلیه
          توافق‏‌های قبلی محسوب می‏‌شود.{" "}
        </p>
      </div>
      <div className="col-12 my-3 accordionContainer">
        <Accordion defaultActiveKey="0" flush dir="rtl">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h1 className="AccordionHeader p-3">
                چطور میتوانم سفارشم را پیگیری کنم ؟
              </h1>
            </Accordion.Header>
            <Accordion.Body>
              <p className="AccordionBody p-3">
                وارد سایت دیجی کالا شوید. روی گزینه سفارش های من کلیک کنید. در
                این قسمت با کلیک روی جزییات میتوانید سفارش خود را ببینید.
                میتوانید در این قسمت روند آماده سازی و مراحل ارسال سفارش خود را
                پیگیری کنید.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <h1 className="AccordionHeader p-3">
                چطور میتوانم سفارشم را لغو کنم ؟{" "}
              </h1>
            </Accordion.Header>
            <Accordion.Body>
              <p className="AccordionBody p-3">
                شما میتوانید با مراجعه به پروفایل خود سفارش یا مرسوله ایی که از
                ارسال آن منصرف شدید را لغو نمایید. میتوانید برای مشاهده روند لغو
                سفارش به توضیحات تکمیلی مراجعه کنید.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <h1 className="AccordionHeader p-3">
                میتوانم سفارشم را بصورت اقساطی ( اعتباری ) پرداخت کنم؟{" "}
              </h1>
            </Accordion.Header>
            <Accordion.Body>
              <p className="AccordionBody p-3">
                بله، دیجی کالا تسهیلاتی را فراهم کرده، شما میتوانید تا سقف 20
                میلیون تومان به صورت اقساط با بازپرداخت 6 ، 9 و 12 ماهه از سایت
                دیجی کالا خرید کنید.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <h1 className="AccordionHeader p-3">
                هزینه روش‌های ارسال با اشتراک دیجی‌پلاس چقدر است؟{" "}
              </h1>
            </Accordion.Header>
            <Accordion.Body>
              <p className="AccordionBody p-3">
                اعضای دیجی‌پلاس می‌توانند به ازای هر ماه اشتراک، چهار ارسال
                رایگان بر روی مرسوله های عادی داشته باشند، به جز ارسال توسط
                فروشنده ، باربری و سفارش های سوپر مارکتی زیر 80هزار تومان
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              <h1 className="AccordionHeader p-3">
                هزینه ی ارسال در دیجی کالا چگونه محاسبه میشود؟{" "}
              </h1>
            </Accordion.Header>
            <Accordion.Body>
              <p className="AccordionBody p-3">
                هزینه ارسال بر اساس شیوه ارسال متفاوت است و در زمان ثبت سفارش
                نمایش داده می شود.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              <h1 className="AccordionHeader p-3">
                چطور درخواست خود را جهت بازگرداندن کالا (مرجوعی کالا) به شما
                اطلاع دهم؟{" "}
              </h1>
            </Accordion.Header>
            <Accordion.Body>
              <p className="AccordionBody p-3">
                شما میتوانید از طریق فرم درخواست مرجوعی در حساب کاربری ، صفحه
                تماس با ما و تلفن درخواست خود را ثبت نمایید.
              </p>
            </Accordion.Body>
          </Accordion.Item>{" "}
          <Accordion.Item eventKey="6">
            <Accordion.Header>
              <h1 className="AccordionHeader p-3">
                چرا به شماره سفارش (DKC) نیاز داریم؟{" "}
              </h1>
            </Accordion.Header>
            <Accordion.Body>
              <p className="AccordionBody p-3">
                دیجی کالا برای افزایش سرعت پاسخ گویی به مشتریان با دریافت کد
                سفارش یا همان کد "DKC " این امکان رو ایجاد کرده که بتونید در
                زمان کمتری به نتیجه مورد نظر خود برسید...
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>
              <h1 className="AccordionHeader p-3">
                شرایط خرید و بازگرداندن کالا برای کالاهای سوپر مارکتی چگونه است؟{" "}
              </h1>
            </Accordion.Header>
            <Accordion.Body>
              <p className="AccordionBody p-3">
                لطفاً پیش از خرید، موارد زیر را به‌دقت بخوانید؛ زیرا ثبت هر
                سفارش در دیجی‌کالا به معنی موافقت با شرایط زیر است.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header>
              <h1 className="AccordionHeader p-3">شرایط گارانتی دیجی کالا</h1>
            </Accordion.Header>
            <Accordion.Body>
              <p className="AccordionBody p-3">
                امروزه توجه به کیفیت کالا از مهمترین وظایف فروشندگان کالا است و
                خدمات پس از فروش ضامن حفظ این کیفیت می باشد. در همین راستا شرکت
                دیجی کالا مفتخر به ارائه سرویس در اسرع وقت به مشتریان گرامی می
                باشد. جهت سهولت در پیگیری گارانتی دستگاه خود می توانید از طریق
                شماره 02161930010 اقدام نمائید.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="9">
            <Accordion.Header>
              <h1 className="AccordionHeader p-3">
                {" "}
                چطور میتوانم بدون برقراری تماس، درخواست مرجوعی کالای خریداری شده
                را اعلام کنم؟{" "}
              </h1>
            </Accordion.Header>
            <Accordion.Body>
              <p className="AccordionBody p-3">
                شما میتواند وارد پروفایل خود شوید و از قسمت سفارشات تحویل شده ،
                فرم درخواست را تکمیل کنید.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="10">
            <Accordion.Header>
              <h1 className="AccordionHeader p-3">
                شرایط استفاده از کد تخفیف اولین خرید چیست؟
              </h1>
            </Accordion.Header>
            <Accordion.Body>
              <p className="AccordionBody p-3">
                سیستم هوشمند دیجی کالا، پس از بررسی حساب کاربری در صورتی که مالک
                آن مشتری جدید دیجی کالا باشد...
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="11">
            <Accordion.Header>
              <h1 className="AccordionHeader p-3">
                چطور میتوانم امتیاز‌ بگیریم؟{" "}
              </h1>
            </Accordion.Header>
            <Accordion.Body>
              <p className="AccordionBody p-3">
                بعد از ساخت حساب کاربری در دیجی‌کالا، می توانید با یکی از روش
                های زیر از دیجی‌کلاب امتیاز کسب کنید:
                <br /> خرید کالا
                <br />
                ثبت نظر انجام
                <br />
                ماموریت‌های دیجی‌کلابی توجه کنید چنانچه ماموریتی در دیجی‌‎کلاب
                موفقیت‌آمیز انجام شود، دریافت امتیاز آن مستلزم انتخاب
                گزینه"دریافت امتیاز" می‌باشد.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="12">
            <Accordion.Header>
              <h1 className="AccordionHeader p-3">
                چگونه می توانم نصب و پیگیری درگاه پرداخت هوشمند دیجی پی را انجام
                دهم؟{" "}
              </h1>
            </Accordion.Header>
            <Accordion.Body>
              <p className="AccordionBody p-3">
                شما میتوانید پس از مراجعه به لینک https://www.mydigipay.com/ipg
                ، مراحل آن را مطالعه و فرم های لازم را تکمیل کرده و درصورت وجود
                سوالات فنی درخصوص راه اندازی درگاه با ایمیل
                merchant.support@mydigipay.com مکاتبه کنید.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>{" "}
    </div>
  );
}
