import React from "react";
import Logo from "../../Img/Logo";
export default function Loader({ TitleLoading }) {
  return (
    <div className="Loader  position-fixed start-0 end-0 top-0 bottom-0 w-100 col-12 d-flex justify-content-center align-items-center ">
      <div className="bg-white rounded rounded-3 col-10 col-sm-6 d-flex p-3 gap-3  justify-content-center align-items-center flex-column">
        <div className="col-12 d-flex justify-content-center align-items-center">
          <Logo></Logo>
        </div>
        <div className="classic-7">{TitleLoading}</div>
      </div>
    </div>
  );
}
