import React, { useEffect } from "react";
import CategoriesPage from "../../../../Apis/CategoriesPage";
export default function SuggestionForYou() {
  useEffect(() => {
    CategoriesPage("cell-phone-pouch-cover", 1).then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div className="SuggestionForYou d-none bg-dark d-flex">
      <div className="col-3 bg bg-info ">
        <div>phone</div>
        <div>pic</div>
        <div>see all</div>
      </div>
    </div>
  );
}
