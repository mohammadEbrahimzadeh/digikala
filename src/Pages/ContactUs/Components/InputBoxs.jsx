import React from "react";

export default function InputBoxs({ title, requiredProp }) {
  return (
    <div className="col-12 col-sm-6  p-2">
      <div className="col-12 text-end d-flex align-items-center justify-content-end ">
        <p className={`fs-3 me-2  ${requiredProp ? "text-danger" : "d-none"}`}>
          •
        </p>
        <p className="fs-5">{title}</p>
      </div>
      <div className="col-12 mt-2 ">
        <input
          required={requiredProp ? true : false}
          dir="rtl"
          className="fs-5 pe-2 inputContactUs rounded rounded-2   w-100"
          type="text"
        />
      </div>
    </div>
  );
}
