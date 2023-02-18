import React from "react";

export default function WhyDigiKalaBox({ Icon, Title, Paragraph }) {
  return (
    <div
      className="WhyDigiKalaBox col-6 ps-2 col-sm-4 text-center text-sm-end    justify-content-end align-items-start d-flex flex-column  mb-3  "
      dir="rtl"
    >
      <div className="col-12">
        <span>{Icon}</span>
      </div>
      <div className="col-12 mt-1">
        <h3>{Title}</h3>
      </div>
      <div className="col-12 mt-2">
        <p>{Paragraph}</p>
      </div>
    </div>
  );
}
