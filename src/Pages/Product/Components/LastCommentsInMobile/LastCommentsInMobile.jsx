import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { FreeMode } from "swiper";
export default function LastCommentsInMobile({
  ProductsApiArray,
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlinePlus,
  AiOutlineMinus,
  setShowModalMoreCommentsMobile,
}) {
  return (
    <div className="LastCommentsInMobile col-12 d-flex flex-column align-items-center justify-content-center d-sm-none pt-3">
      <div className="col-12  p-1 pe-sm-3 d-flex justify-content-between align-items-center mb-3">
        <div>
          <p
            className="MoreCommentsBtn text-info "
            onClick={() => {
              setShowModalMoreCommentsMobile(true);
            }}
          >
            موارد بیشتر
          </p>
        </div>
        <div>
          <p className="border-4 titleComponent border-bottom border-danger ">
            دیدگاه ها
          </p>
        </div>
      </div>

      <Swiper
        dir="rtl"
        slidesPerView={1}
        spaceBetween={-1}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className="
        Swiper"
      >
        {ProductsApiArray.results.product.last_comments.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                className={`${
                  index == 1 ? "" : ""
                } d-flex   flex-column w-100  me-1 commentCard px-0 px-sm-0  `}
              >
                <div className=" col-12  d-flex justify-content-start align-items-start gap-2">
                  <div className=" d-flex justify-content-end align-items-center text-center">
                    <p
                      className={`titleComent px-2 rounded rounded-3 text-white  ${
                        item.rate >= 3 ? "bg-success" : "bg-danger"
                      }`}
                    >
                      {item.rate}
                    </p>
                  </div>{" "}
                  <div className=" text-start">
                    <p className="titleComent">{item.title}</p>
                  </div>
                </div>
                <div className=" col-12  d-flex justify-content- align-items-center mt-2 gap-2 gap-sm-4 ">
                  <div className="  d-flex align-items-center justify-content-end">
                    <p dir="rtl" className="text-secondary titleComent">
                      {" "}
                      {item.created_at}
                    </p>
                  </div>
                  <div className="  d-flex align-items-center justify-content-end">
                    <p className="text-secondary titleComent">
                      {item.user_name}
                    </p>
                  </div>
                  <div className=" d-flex align-items-center justify-content-end ">
                    <p
                      className={` text-center p-1 alert-secondary buyerBadage ${
                        item.is_buyer ? "" : "d-none"
                      } `}
                    >
                      خریدار
                    </p>
                  </div>
                </div>
                <div className="col-12  d-flex justify-content-center align-items-start mt-3 flex-column gap-3">
                  {item.recommendation_status == null ? null : (
                    <p
                      className={`titleComent  w-100 text-success text-end ${
                        item.recommendation_status == "recommended"
                          ? "text-success"
                          : "text-warning"
                      } `}
                    >
                      {item.recommendation_status == "recommended" ? (
                        <AiOutlineLike></AiOutlineLike>
                      ) : (
                        <AiOutlineDislike></AiOutlineDislike>
                      )}{" "}
                      &nbsp;
                      {item.recommendation_status == "recommended"
                        ? "پیشنهاد میکنم"
                        : "پیشنهاد نمیکنم"}{" "}
                    </p>
                  )}

                  <p className="titleComent text-end">{item.body}</p>
                  <div className="col-12  d-flex flex-column gap-1">
                    {item.advantages.map((item, index) => {
                      return (
                        <p key={index} className="titleComent text-end">
                          <AiOutlinePlus className="text-success"></AiOutlinePlus>
                          &nbsp; {item}
                        </p>
                      );
                    })}
                    {item.disadvantages.map((item, index) => {
                      return (
                        <p key={index} className="titleComent text-end">
                          <AiOutlineMinus className="text-danger"></AiOutlineMinus>
                          &nbsp; {item}
                        </p>
                      );
                    })}
                  </div>
                </div>
                <div className="col-12 d-flex gap-2  justify-content-start align-items-center  mt-3">
                  <div className="  ">
                    <p className="titleComent text-end ">
                      آیا این دیدگاه مفید بود؟
                    </p>
                  </div>{" "}
                  <div className=" ">
                    <p className="titleComent ">
                      {item.reactions.dislikes}
                      <AiOutlineDislike></AiOutlineDislike> &nbsp;
                      {item.reactions.likes}
                      <AiOutlineLike></AiOutlineLike>
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
