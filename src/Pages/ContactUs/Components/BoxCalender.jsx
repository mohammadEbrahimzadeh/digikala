import React from "react";

export default function BoxCalender({ date, title, discription }) {
  return (
    <div className="boxCalender col-6  col-sm-3 mt-3 ps-2 d-flex  align-items-center justify-content-center">
      <div className="border  col-12  p-1 p-sm-2  d-flex align-items-center justify-content-center flex-column border-1 rounded rounded-2">
        <p className="fs-6 text-center">{date}</p>
        <p className="fs-6 mt-1 text-center">{title}</p>
        <hr />
        <p className=" mt-2 border-top border-4  pt-2 text-end text-sm-center">
          {discription}
        </p>
      </div>
    </div>
  );
}
