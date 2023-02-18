import React from "react";

export default function PicBoxs({ pic }) {
  return (
    <div className="col-12  rounded rounded-3 d-flex align-items-center justify-content-center mt-3">
      <img src={pic} className={"w-100  rounded rounded-3"} alt="" />
    </div>
  );
}
