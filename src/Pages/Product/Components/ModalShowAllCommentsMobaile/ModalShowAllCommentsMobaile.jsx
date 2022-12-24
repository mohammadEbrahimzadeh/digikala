import React from "react";

export default function ModalShowAllCommentsMobaile({
  ShowModalComments,
  AiOutlineCloseCircle,
  setShowModalComments,
  ProductCommentArray,
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlinePlus,
  AiOutlineMinus,
}) {
  return (
    <section
      className={`showAllCommentsModal  ${
        ShowModalComments ? " " : "d-none "
      } `}
    >
      <div className=" position-fixed  mainDivModal start-0 bottom-0  top-0 overflow-auto    w-100 d-flex d-sm-none justify-content-center overflow-auto align-items-start  ">
        <div className="col-12 containerComments p-2     d-flex flex-column  gap-2 ">
          <div className="w-100 bg-white  position-fixed start-0 p-2  top-0 d-flex justify-content-end align-items-center ">
            <AiOutlineCloseCircle
              className="fs-4"
              onClick={() => {
                setShowModalComments(!ShowModalComments);
              }}
            ></AiOutlineCloseCircle>
          </div>
          <div className="col-12 mt-4 pt-2 d-flex flex-column gap-2">
            {ProductCommentArray.results.comments.map((item, index) => {
              return (
                <div
                  style={{ borderRadius: "10px" }}
                  key={index}
                  className="d-flex  col-12 bg-white align-items-end justify-content-center flex-column  commentCard  px-2 py-4  "
                >
                  <div className=" col-12 pe-2 d-flex justify-content-end align-items-start gap-2">
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
                  <div className=" text-end col-12 d-flex justify-content-evenly align-items-center  pe-2 mt-2 gap-1  ">
                    <div
                      className={`col-2  d-flex align-items-center justify-content-end ${
                        item.is_buyer ? "" : "d-none"
                      }`}
                    >
                      <p className={` text-center p-1 buyerBadage  `}>خریدار</p>
                    </div>
                    <div className=" col-6  d-flex align-items-center justify-content-end">
                      <p className="text-secondary titleComent">
                        {item.user_name}
                      </p>
                    </div>
                    <div className=" col-4  d-flex align-items-center justify-content-end">
                      <p dir="rtl" className="text-secondary titleComent">
                        {" "}
                        {item.created_at}
                      </p>
                    </div>
                  </div>
                  <div className="col-12   pe-2 d-flex ju justify-content-center align-items-end mt-3 flex-column gap-3">
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
                          : "پیشنهاد نمیکنم"}
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
                  <div className="col-12 d-flex  p-2 ps-3 justify-content-between align-items-center gap-sm-3 mt-3">
                    <div className="col-3 ">
                      <p className="titleComent ">
                        <AiOutlineDislike></AiOutlineDislike>
                        {item.reactions.dislikes} &nbsp;
                        <AiOutlineLike></AiOutlineLike>
                        {item.reactions.likes}
                      </p>
                    </div>
                    <div className="col-7  ">
                      <p className="titleComent text-end ">
                        آیا این دیدگاه مفید بود؟
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
