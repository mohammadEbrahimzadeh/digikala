import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";

export default function MoreComments({
  ProductCommentArray,
  AiOutlineLike,
  AiOutlineDislike,
  setNumberOfPageComment,
  AiOutlinePlus,
  AiOutlineMinus,
  ReactPaginate,
}) {
  const [ShowMoreCommentsAcardion, setShowMoreCommentsAcardion] = useState(
    false
  );
  function CustomToggle({ eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () => {
      setShowMoreCommentsAcardion(!ShowMoreCommentsAcardion);
    });

    return (
      <button
        className="text-info border-0"
        type="button"
        style={{ backgroundColor: "white" }}
        onClick={decoratedOnClick}
      >
        {ShowMoreCommentsAcardion ? "مشاهده کمتر" : " مشاهده بیشتر"}
      </button>
    );
  }
  return (
    <div className="col-12 containerPageNaite d-none d-sm-flex  justify-content-center align-items-center">
      <Accordion className=" border-0  col-12 d-none d-sm-flex  justify-content-center ">
        <Card className="bg-white  border-0 col-12 d-flex justify-content-center ">
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <div className="col-12 containerComments px-0  px-sm-4 py-2  flex-sm-column justify-content-start flex-row-reverse  d-none d-sm-flex   gap-sm-4 mt-2 ">
                {ProductCommentArray.results.comments.map((item, index) => {
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
                        <div className=" d-flex align-items-center justify-content-end">
                          <p
                            className={` text-center p-1 alert-secondary  buyerBadage ${
                              item.is_buyer ? "" : "d-none"
                            } `}
                          >
                            خریدار
                          </p>
                        </div>
                        <div className="  d-flex align-items-center justify-content-end">
                          <p className="text-secondary titleComent">
                            {item.user_name}
                          </p>
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
                  marginPagesDisplayed={5}
                  activeLinkClassName="  activePage"
                  pageLinkClassName="baseClassPageNaite"
                  pageClassName={
                    " baseClassPageNaite   text-center d-flex align-items-center justify-content-center  "
                  }
                />
              </div>
            </Card.Body>
          </Accordion.Collapse>
          <Card.Header className="bg-white my-2 border-0  d-flex justify-content-end pe-4">
            <CustomToggle eventKey="0"></CustomToggle>
          </Card.Header>
        </Card>
      </Accordion>
    </div>
  );
}
