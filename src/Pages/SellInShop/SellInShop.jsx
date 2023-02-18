import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Player, BigPlayButton } from "video-react";
import "video-react/dist/video-react.css"; // import css
import video from "../../videos/whySellInShop.mp4";
import WhyDigiKalaBox from "./components/WhyDigiKalaBox";
import {
  AiOutlineClockCircle,
  AiOutlineAlert,
  AiFillHome,
} from "react-icons/ai";
import {
  MdPreview,
  MdToys,
  MdSportsKabaddi,
  MdOutlineLocalFlorist,
} from "react-icons/md";
import { TbFileReport } from "react-icons/tb";
import { BsTruck, BsTools } from "react-icons/bs";
import {
  GiConfirmed,
  GiDigitalTrace,
  GiTShirt,
  GiPaintBrush,
} from "react-icons/gi";
import { BiLogIn } from "react-icons/bi";
import { BsBookHalf, BsShopWindow, BsFillPersonFill } from "react-icons/bs";
import { HiOutlineDocumentReport } from "react-icons/hi";
import iranMap from "../../Img/iranMap.png";
export default function SellInShop() {
  let whyDigiKalaBoxData = [
    {
      icon: <AiOutlineClockCircle />,
      title: "فروش آنلاین ۲۴/۷ در هر نقطه از ایران",
      paragraph: "۲۴ ساعته در تمام هفته، می‌توانید سفارش دریافت کنید و بفروشید",
    },
    {
      icon: <MdPreview />,
      title: "بیش از ۶ میلیون بازدید روزانه و ۳۰ میلیون مشتری",
      paragraph:
        "کالای شما در ویترین شلوغ‌ترین فروشگاه اینترنتی ایران نمایش داده می‌شود.",
    },
    {
      icon: <TbFileReport />,
      title: "گزارش مالی شفاف و تسویه در کمتر از ۱۵ روز",
      paragraph:
        "طی حداکثر ۲ هفته تسویه انجام می‌شود و آمار جزيي را دریافت می‌کنید.",
    },
    {
      icon: <BsTruck />,
      title: "امکان ارسال توسط دیجی‌کالا و فروشنده",
      paragraph:
        "می‌توانید بسته‌بندی و ارسال را به دیجی‌کالا بسپارید یاخودتان ارسال کنید.",
    },
    {
      icon: <GiConfirmed />,
      title: "ثبت نام در ۲۴ ساعت با آموزش رایگان فروش آنلاین",
      paragraph:
        "بعد از تایید ثبت‌نامتان، تمام مراحل فروش آنلاین را یاد می‌گیرید.",
    },
    {
      icon: <AiOutlineAlert />,
      title: "استفاده از تبلیغات کلیکی و کار با یک پنل ساده",
      paragraph:
        "با تبلیغات کلیکی و استفاده از پنل، فروشتان افزایش پیدا می‌کند.",
    },
  ];
  let commissionData = [
    {
      icon: <GiDigitalTrace />,
      title: "کالای دیچیتال",
      paragraph: "از 1% تا 20% کمیسیون",
    },
    {
      icon: <BsTools />,
      title: "خودرو ، ابرار و تجهیزات",
      paragraph: "از 5% تا 15% کمیسیون",
    },
    {
      icon: <GiTShirt />,
      title: "مد و پوشاک",
      paragraph: "از 1% تا 17% کمیسیون",
    },
    {
      icon: <MdToys />,
      title: "اسباب بازی ، کودک و نوزاد",
      paragraph: "از 4% تا 17% کمیسیون",
    },
    {
      icon: <GiPaintBrush />,
      title: "زیبایی و سلامت",
      paragraph: "از 2% تا 17% کمیسیون",
    },
    {
      icon: <AiFillHome />,
      title: "خانه و اشپزخانه",
      paragraph: "از 1% تا 17% کمیسیون",
    },
    {
      icon: <BsBookHalf />,
      title: "کتاب ، لوازم التحریر",
      paragraph: "از 2% تا 17% کمیسیون",
    },
    {
      icon: <MdSportsKabaddi />,
      title: "ورزش و سفر",
      paragraph: "از 3% تا 20% کمیسیون",
    },
    {
      icon: <MdOutlineLocalFlorist />,
      title: "محصولات بومی و محلی",
      paragraph: "از 5% تا 15% کمیسیون",
    },
    {
      icon: <BsShopWindow />,
      title: "کالا های سوپر مارکتی",
      paragraph: "از 5% تا 15% کمیسیون",
    },
  ];
  return (
    <div className="SellInShop">
      <div className="SellInShopHeader col-12 d-flex justify-content-end align-items-end pe-1 pe-sm-4">
        <div className=" text-end text-white mb-sm-4 mb-2 containerTextsHeader">
          <div className="col-12">
            <h1>!در دیجی‌کالا فروشنده شوید</h1>
          </div>
          <div className="col-12">
            <p>تنها در دیجی‌کالا بدون تعطیلی بفروشید</p>
          </div>
        </div>
      </div>
      <div className="whySellInShop col-12 d-flex flex-wrap-reverse">
        {" "}
        <div className="col-sm-7 col-12 p-3 d-flex align-items-center justify-content-center ">
          <Player src={video} fluid={false}>
            <BigPlayButton position="center" />
          </Player>
        </div>
        <div className="col-sm-5 col-12 align-items-center text-center justify-content-end p-3 justify-content-sm-center d-flex ">
          <h1 className="text-white">چرا در دیجی‌کالا بفروشیم؟</h1>
        </div>
      </div>
      <div className="whyDigiKala col-12 mt-2 text-end p-1 p-sm-3 ">
        <div className="col-12 px-2 text-center text-sm-end ">
          <h1 className="titleWhyDigiKala">
            چرا دیجی‌کالا جای خوبی برای فروش کالاست؟
          </h1>
        </div>
        <div className=" mt-3 col-12 d-flex justify-content-end align-items-start flex-wrap ">
          {whyDigiKalaBoxData.map((item, index) => {
            return (
              <WhyDigiKalaBox
                key={index}
                Icon={item.icon}
                Title={item.title}
                Paragraph={item.paragraph}
              ></WhyDigiKalaBox>
            );
          })}
        </div>
      </div>
      <div className="col-12 justify-content-end mb-3 containerStepsSell  position-relative d-flex  align-items-center ">
        <div className="clipPath col-5 position-absolute top-0 h-100  "></div>
        <div className="col-12  d-flex  position-absolute justify-content-center align-items-center ">
          <div className="  position-absolute lineSteps"></div>
          <div className="col-12  d-flex flex-row-reverse stepsBox justify-content-evenly align-items-center">
            <div className="col-3 position-relative  containerBox d-flex justify-content-center align-items-center text-center flex-column">
              <div className=" d-flex justify-content-center align-items-center">
                <p className="IconTag rounded-circle rounded p-2">
                  <BiLogIn></BiLogIn>
                </p>
              </div>
              <div className=" d-flex containerNumberStep position-absolute l justify-content-center align-items-center">
                <p className="numberStep text-white px-1 rounded-circle rounded ">
                  1{" "}
                </p>
              </div>{" "}
              <div className=" d-flex containerTitleBox position-absolute justify-content-center align-items-center">
                <p className="numberStep px-1 rounded-circle rounded  ">
                  ثبت‌نام در پنل فروشندگان
                </p>
              </div>{" "}
            </div>
            <div className="col-3 position-relative  containerBox d-flex justify-content-center align-items-center text-center flex-column">
              <div className=" d-flex justify-content-center align-items-center">
                <p className="IconTag rounded-circle rounded p-2">
                  <BsBookHalf></BsBookHalf>
                </p>
              </div>
              <div className=" d-flex containerNumberStep position-absolute l justify-content-center align-items-center">
                <p className="numberStep text-white px-1 rounded-circle rounded ">
                  2
                </p>
              </div>{" "}
              <div className=" d-flex containerTitleBox position-absolute justify-content-center align-items-center">
                <p className="numberStep px-1 rounded-circle rounded ">
                  یادگیری استفاده از پنل
                </p>
              </div>{" "}
            </div>
            <div className="col-3  position-relative  containerBox d-flex justify-content-center align-items-center text-center flex-column">
              <div className=" d-flex justify-content-center align-items-center">
                <p className="IconTag rounded-circle rounded p-2">
                  <HiOutlineDocumentReport></HiOutlineDocumentReport>
                </p>
              </div>
              <div className=" d-flex containerNumberStep position-absolute l justify-content-center align-items-center">
                <p className="numberStep text-white px-1 rounded-circle rounded ">
                  3
                </p>
              </div>{" "}
              <div className=" d-flex containerTitleBox position-absolute justify-content-center align-items-center">
                <p className="numberStep px-1 rounded-circle rounded ">
                  ثبت اطلاعات و قیمت‌ کالاها
                </p>
              </div>{" "}
            </div>
            <div className="col-3  position-relative  containerBox d-flex justify-content-center align-items-center text-center flex-column">
              <div className=" d-flex justify-content-center align-items-center">
                <p className="IconTag rounded-circle rounded p-2">
                  <BsShopWindow></BsShopWindow>
                </p>
              </div>
              <div className=" d-flex containerNumberStep position-absolute l justify-content-center align-items-center">
                <p className="numberStep text-white px-1 rounded-circle rounded ">
                  4
                </p>
              </div>{" "}
              <div className=" d-flex containerTitleBox position-absolute justify-content-center align-items-center">
                <p className="numberStep px-1 rounded-circle rounded ">
                  آغاز فروش در دیجی‌کالا
                </p>
              </div>{" "}
            </div>
          </div>
        </div>
        <div className="col-12  containerContentStepsSell h-100 d-flex align-items-start mt-3  justify-content-end    ">
          <h1 className="pb-2 me-3">فرآیند شروع کار</h1>
        </div>
      </div>
      <div className="col-12 p-1 p-sm-3">
        <div className="col-12 d-flex align-items-center justify-content-end  ">
          <h1 className="border-1 border-bottom border-danger pb-3 fs-4 ">
            مدارک مورد نیاز
          </h1>
        </div>
        <div className="col-12  mt-3 flex-wrap d-flex justify-content-center align-items-start">
          <div className=" d-flex flex-column justify-content-center align-items-center col-sm-4 col-12">
            <div className="d-flex mb-2 col-12 gap-2 justify-content-end justify-content-sm-center  align-items-center">
              <h1 className="fs-4">فرد حقوقی</h1>{" "}
              <BsShopWindow className="fs-4"></BsShopWindow>
            </div>
            <div>
              <p className="text-center col-12 fs-6">
                تصاویر ثبت‌نام در وب‌سایت «evat.ir»، روزنامه رسمی شرکت و کارت
                ملی صاحبین امضا
              </p>
            </div>
          </div>
          <div className=" d-flex mt-3 mt-sm-0   flex-column  align-items-center col-sm-4 col-12">
            <div className="d-flex mb-2  gap-2 justify-content-end justify-content-sm-center align-items-center col-12">
              <h1 className="fs-4">فرد حقیقی</h1>{" "}
              <BsFillPersonFill className="fs-4"></BsFillPersonFill>
            </div>
            <div className="col-12">
              <p className="text-center fs-6 col-12 ">
                تصویر کارت ملی یا کارت شناسایی معتبر
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 commissionContainer p-3">
        <div className="col-12 mb-3 d-flex justify-content-end align-items-center">
          <h1 className="border-2 pb-3 border-danger border-bottom">
            میزان کمیسیون در هر دسته‌بندی
          </h1>
        </div>
        <div className="col-12 d-flex flex-column-reverse flex-sm-row  justify-content-center flex-wrap align-items-start">
          <div className="col-12 col-sm-6 flex-wrap  d-flex justify-content-end align-items-start">
            {commissionData.map((item, index) => {
              return (
                <WhyDigiKalaBox
                  key={index}
                  Icon={item.icon}
                  Title={item.title}
                  Paragraph={item.paragraph}
                ></WhyDigiKalaBox>
              );
            })}
          </div>
          <div className="col-12 col-sm-6  h-100  flex-wrap d-flex justify-content-end align-items-start text-end ps-2 mb-3">
            <p>
              با دیجی‌کالا دیگر نیازی به پرداخت اجاره فروشگاه، طراحی سایت،
              دریافت پنل و... ندارید! تنها هزینه‌ای اندک برای استفاده از خدمات
              دیجی‌کالا و کمیسیون می‌پردازید. میزان کمیسیون متناسب با دسته‌بندی
              کالا تعیین می‌شود. اینجا می‌توانید میزان کمیسیون هر دسته‌بندی را
              با جزئیات ببینید
            </p>
          </div>
        </div>
      </div>
      <div className="cil-12 p-3 d-flex flex-wrap flex-column-reverse flex-sm-row justify-content-center align-items-start">
        <div className="col-sm-6 col-12   ">
          <img
            src={iranMap}
            className="w-100  "
            alt=""
            style={{ borderRadius: "25px" }}
          />
        </div>
        <div className="col-sm-6 col-12 mb-3 text-end d-flex align-items-end justify-content-start flex-column ps-sm-2 ">
          <h1 className="fs-4 mb-3">ارسال کالا به روش های مختلف </h1>
          <p className="fs-6">
            اگر استان شما هنوز انبار دیجیکالا ندارد نگران نباشید شما میتوانید از
            گزینه امکان ارسال کالا توست فروشنده استفاده نمایید یا کالای خود را
            به انبار سیار دیجیکالا بفرستید{" "}
          </p>
        </div>
      </div>
      <div className="col-12 p-3">
        <div className="col-12 text-end d-flex align-items-center justify-content-end">
          <h2
            className="border-2  pb-3  border-danger border-bottom "
            style={{ fontSize: "1.2rem" }}
          >
            داستان های موفقیت از زبان فروشندگان{" "}
          </h2>
        </div>
        <div className="d-flex col-12 mt-3 flex-wrap flex-column-reverse flex-sm-row align-items-center justify-content-evenly">
          <div className="col-sm-6 col-12 d-flex align-items-center justify-content-center text-center pe-sm-2 ">
            <p className="fs-6">
              با دیجی‌کالا دیگر نیازی به پرداخت اجاره فروشگاه، طراحی سایت،
              دریافت پنل و... ندارید! تنها هزینه‌ای اندک برای استفاده از خدمات
              دیجی‌کالا و کمیسیون می‌پردازید. میزان کمیسیون متناسب با دسته‌بندی
              کالا تعیین می‌شود. اینجا می‌توانید میزان کمیسیون هر دسته‌بندی را
              با جزئیات ببینید
            </p>
          </div>
          <div className="col-sm-6 mb-3 col-12 d-flex align-items-center justify-content-center">
            <Player src={video} fluid={false}>
              <BigPlayButton position="center" />
            </Player>
          </div>
        </div>
      </div>
      <div className="col-12 p-3">
        <div className="col-12 d-flex justify-content-end align-items-center">
          <h1 className="border-bottom border-danger border-2 pb-2 fs-4">
            سوالات شما
          </h1>
        </div>
        <div className="col-12 mt-3">
          {" "}
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
                  میتوانید در این قسمت روند آماده سازی و مراحل ارسال سفارش خود
                  را پیگیری کنید.
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
                  شما میتوانید با مراجعه به پروفایل خود سفارش یا مرسوله ایی که
                  از ارسال آن منصرف شدید را لغو نمایید. میتوانید برای مشاهده
                  روند لغو سفارش به توضیحات تکمیلی مراجعه کنید.
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
                  میلیون تومان به صورت اقساط با بازپرداخت 6 ، 9 و 12 ماهه از
                  سایت دیجی کالا خرید کنید.
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
                  شرایط خرید و بازگرداندن کالا برای کالاهای سوپر مارکتی چگونه
                  است؟{" "}
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
                  امروزه توجه به کیفیت کالا از مهمترین وظایف فروشندگان کالا است
                  و خدمات پس از فروش ضامن حفظ این کیفیت می باشد. در همین راستا
                  شرکت دیجی کالا مفتخر به ارائه سرویس در اسرع وقت به مشتریان
                  گرامی می باشد. جهت سهولت در پیگیری گارانتی دستگاه خود می
                  توانید از طریق شماره 02161930010 اقدام نمائید.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="9">
              <Accordion.Header>
                <h1 className="AccordionHeader p-3">
                  {" "}
                  چطور میتوانم بدون برقراری تماس، درخواست مرجوعی کالای خریداری
                  شده را اعلام کنم؟{" "}
                </h1>
              </Accordion.Header>
              <Accordion.Body>
                <p className="AccordionBody p-3">
                  شما میتواند وارد پروفایل خود شوید و از قسمت سفارشات تحویل شده
                  ، فرم درخواست را تکمیل کنید.
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
                  سیستم هوشمند دیجی کالا، پس از بررسی حساب کاربری در صورتی که
                  مالک آن مشتری جدید دیجی کالا باشد...
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
                  چگونه می توانم نصب و پیگیری درگاه پرداخت هوشمند دیجی پی را
                  انجام دهم؟{" "}
                </h1>
              </Accordion.Header>
              <Accordion.Body>
                <p className="AccordionBody p-3">
                  شما میتوانید پس از مراجعه به لینک
                  https://www.mydigipay.com/ipg ، مراحل آن را مطالعه و فرم های
                  لازم را تکمیل کرده و درصورت وجود سوالات فنی درخصوص راه اندازی
                  درگاه با ایمیل merchant.support@mydigipay.com مکاتبه کنید.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
