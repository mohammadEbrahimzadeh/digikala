import React from "react";

export default function ModalMoreCommentsMobile({
  ShowModalMoreCommentsMobile,
  setShowModalMoreCommentsMobile,
  ProductCommentArray,
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineCloseCircle,
  ReactPaginate,
  setNumberOfPageComment,
}) {
  return (
    <div
      className={`${
        ShowModalMoreCommentsMobile ? "d-flex" : "d-none"
      }  ModalMoreCommentsMobile col-12 position-fixed overflow-auto  flex-column gap-2 start-0 end-0 top-0 bottom-0 px-2 pb-2 align-items-center justify-content-start `}
    >
      <div className="col-12 bg-white position-fixed d-flex justify-content-end align-items-center p-2  start-0">
        <AiOutlineCloseCircle
          className="fs-4"
          onClick={() => {
            setShowModalMoreCommentsMobile(false);
          }}
        ></AiOutlineCloseCircle>
      </div>
      <div className="mt-4 pt-3 d-flex align-items-center justify-content-evenly gap-2 col-12 flex-column">
        {ProductCommentArray.results.comments.map((item, index) => {
          return (
            <div
              key={index}
              className="d-flex col-12  bg-white align-items-end flex-column  commentCard  px-3 py-2 "
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
              <div className="  col-12 d-flex justify-content-end  align-items-center   mt-2  gap-2  ">
                <div className="   d-flex align-items-center justify-content-end">
                  <p
                    className={` text-center p-1 alert-secondary  buyerBadage ${
                      item.is_buyer ? "" : "d-none"
                    } `}
                  >
                    خریدار
                  </p>
                </div>
                <div className="   d-flex align-items-center justify-content-end">
                  <p className="text-secondary titleComent text-end">
                    {item.user_name}
                  </p>
                </div>
                <div className="   d-flex align-items-center justify-content-end">
                  <p
                    dir="rtl"
                    className="text-secondary w-100 text-center titleComent"
                  >
                    {" "}
                    {item.created_at}
                  </p>
                </div>
              </div>
              <div className="col-12    d-flex  justify-content-center align-items-end mt-2 flex-column gap-3">
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
              <div className="col-12 d-flex gap-2 justify-content-end align-items-center  mt-3">
                <div className=" ">
                  <p className="titleComent text-end ">
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
        })}{" "}
      </div>
      <div className=" col-12  d-flex  justify-content-center  align-items-center ">
        <ReactPaginate
          className="d-flex gap-2 col-12 justify-content-center list-unstyled align-items-center col-12      "
          breakLabel="..."
          nextLabel=""
          onPageChange={(event) => {
            setNumberOfPageComment(event.selected + 1);
          }}
          pageRangeDisplayed={2}
          pageCount={ProductCommentArray.results.pager.total_pages}
          previousLabel=""
          renderOnZeroPageCount={null}
          marginPagesDisplayed={2}
          activeLinkClassName="activePage"
          pageLinkClassName="baseClassPageNaite"
          pageClassName={
            " baseClassPageNaite   text-center d-flex align-items-center justify-content-center  "
          }
        />
      </div>
    </div>
  );
}
