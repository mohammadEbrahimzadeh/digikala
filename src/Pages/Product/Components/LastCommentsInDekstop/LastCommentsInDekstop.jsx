import React from "react";
export default function LastCommentsInDekstop({
  ProductsApiArray,
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlinePlus,
  AiOutlineMinus,
}) {
  return (
    <div className="col-12 LastCommentsInDekstop containerComments px-0  px-sm-4 py-2  flex-sm-column justify-content-start flex-row-reverse  d-none d-sm-flex   gap-sm-4 mt-2 ">
      <div className="col-12 pe-1 pe-sm-3 d-flex justify-content-end align-items-center">
        <p className="border-4 titleComponent border-bottom border-danger ">
          دیدگاه ها
        </p>
      </div>
      {ProductsApiArray.results.product.last_comments.map((item, index) => {
        return (
          <div
            key={index}
            className="d-flex col-12 align-items-end flex-column  commentCard  px-3 px-sm-0 pb-4 "
          >
            <div className=" col-12  d-flex justify-content-end align-items-start gap-2">
              <div className="col-11  text-end">
                <p className="titleComent">{item.title}</p>
              </div>
              <div className=" d-flex justify-content-end align-items-center text-center">
                <p
                  className={`titleComent px-2 rounded rounded-3 text-white  ${
                    item.rate >= 3 ? "bg-success" : "bg-danger"
                  }`}
                >
                  {item.rate}
                </p>
              </div>
            </div>
            <div className=" me-4 col-12 d-flex justify-content-end align-items-center  pe-2 mt-2 gap-2 gap-sm-4 ">
              <div className=" d-flex align-items-center justify-content-end ">
                <p
                  className={` text-center p-1 alert-secondary buyerBadage ${
                    item.is_buyer ? "" : "d-none"
                  } `}
                >
                  خریدار
                </p>
              </div>
              <div className="  d-flex align-items-center justify-content-end">
                <p className="text-secondary titleComent">{item.user_name}</p>
              </div>
              <div className="  d-flex align-items-center justify-content-end">
                <p dir="rtl" className="text-secondary titleComent">
                  {" "}
                  {item.created_at}
                </p>
              </div>
            </div>
            <div className="col-12  me-4 pe-2 d-flex ju justify-content-center align-items-end mt-3 flex-column gap-3">
              {item.recommendation_status == null ? null : (
                <p
                  className={`titleComent  w-100 text-success text-end ${
                    item.recommendation_status == "recommended"
                      ? "text-success"
                      : "text-warning"
                  } `}
                >
                  {item.recommendation_status == "recommended"
                    ? "پیشنهاد میکنم"
                    : "پیشنهاد نمیکنم"}{" "}
                  &nbsp;
                  {item.recommendation_status == "recommended" ? (
                    <AiOutlineLike></AiOutlineLike>
                  ) : (
                    <AiOutlineDislike></AiOutlineDislike>
                  )}
                </p>
              )}

              <p className="titleComent text-end">{item.body}</p>
              <div className="col-12  d-flex flex-column gap-1">
                {item.advantages.map((item, index) => {
                  return (
                    <p key={index} className="titleComent text-end">
                      {item} &nbsp;{" "}
                      <AiOutlinePlus className="text-success"></AiOutlinePlus>
                    </p>
                  );
                })}
                {item.disadvantages.map((item, index) => {
                  return (
                    <p key={index} className="titleComent text-end">
                      {item} &nbsp;{" "}
                      <AiOutlineMinus className="text-danger"></AiOutlineMinus>
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="col-12 d-flex me-4 pe-2 justify-content-end align-items-center gap-sm-3 mt-3">
              <div className=" ">
                <p className="titleComent ">
                  <AiOutlineDislike></AiOutlineDislike>
                  {item.reactions.dislikes} &nbsp;
                  <AiOutlineLike></AiOutlineLike>
                  {item.reactions.likes}
                </p>
              </div>
              <div className="  ">
                <p className="titleComent text-end ">
                  آیا این دیدگاه مفید بود؟
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
