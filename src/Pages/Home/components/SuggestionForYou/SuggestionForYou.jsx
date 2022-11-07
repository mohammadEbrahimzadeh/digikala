import React, { useEffect, useState } from "react";
import CategoriesPage from "../../../../Apis/CategoriesPage";
import Box from "../../../../Img/box.png";
export default function SuggestionForYou() {
  const [
    CategoriesWearableGadgetPageArray,
    setCategoriesWearableGadgetPageArray,
  ] = useState();
  const [
    CategoriesHeadphoneHeadsetMicrophonePageArray,
    setCategoriesHeadphoneHeadsetMicrophonePageArray,
  ] = useState();
  const [
    CategoriesCellPhonePouchCoverPageArray,
    setCategoriesCellPhonePouchCoverPageArray,
  ] = useState();
  const [
    CategoriesMobilePhonePageArray,
    setCategoriesMobilePhonePageArray,
  ] = useState();
  useEffect(() => {
    for (let index = 0; index < 4; index++) {
      let CategoryName;
      switch (index) {
        case 0:
          CategoryName = "wearable-gadget";
          CategoriesPage(CategoryName, 1).then((res) => {
            setCategoriesWearableGadgetPageArray(
              res.results.products.slice(0, 4)
            );
          });
          break;
        case 1:
          CategoryName = "headphone-headset-microphone";
          CategoriesPage(CategoryName, 1).then((res) => {
            setCategoriesHeadphoneHeadsetMicrophonePageArray(
              res.results.products.slice(0, 4)
            );
          });
          break;
        case 2:
          CategoryName = "cell-phone-pouch-cover";
          CategoriesPage(CategoryName, 1).then((res) => {
            setCategoriesCellPhonePouchCoverPageArray(
              res.results.products.slice(0, 4)
            );
          });
          break;
        case 3:
          CategoryName = "mobile-phone";
          CategoriesPage(CategoryName, 1).then((res) => {
            setCategoriesMobilePhonePageArray(res.results.products.slice(0, 4));
          });
          break;
      }
    }
  }, []);

  // console.log(CategoriesWearableGadgetPageArray);
  // console.log(CategoriesHeadphoneHeadsetMicrophonePageArray);
  // console.log(CategoriesCellPhonePouchCoverPageArray);
  // console.log(CategoriesMobilePhonePageArray);

  return (
    <>
      {CategoriesWearableGadgetPageArray &&
      CategoriesHeadphoneHeadsetMicrophonePageArray &&
      CategoriesCellPhonePouchCoverPageArray &&
      CategoriesMobilePhonePageArray ? (
        <div className="SuggestionForYou flex-wrap px-3  d-flex">
          <div className="col-6  d-flex flex-column gap-3  col-sm-3  p-3">
            <div className="d-flex justify-content-end text-center ">
              <p>ساعت هوشمند</p>
            </div>
            <div className=" d-flex  justify-content-evenly gap-3  flex-wrap">
              {CategoriesWearableGadgetPageArray.map((item) => {
                return (
                  <div key={item.id} className="col-5">
                    <img src={item.image} className="w-100" alt="" />
                  </div>
                );
              })}
            </div>

            <div className="d-flex  justify-content-center text-center">
              <p className=" text-center text-info m-0 p-0 text-">مشاهده همه</p>
            </div>
          </div>
          <div className="col-6  d-flex flex-column gap-3  col-sm-3  p-3">
            <div className="d-flex justify-content-end text-end ">
              <p> هدست و هندزفری</p>
            </div>
            <div className=" d-flex  justify-content-evenly gap-3  flex-wrap">
              {CategoriesHeadphoneHeadsetMicrophonePageArray.map((item) => {
                return (
                  <div key={item.id} className="col-5">
                    <img src={item.image} className="w-100" alt="" />
                  </div>
                );
              })}
            </div>

            <div className="d-flex  justify-content-center text-center">
              <p className=" text-center text-info m-0 p-0 text-">مشاهده همه</p>
            </div>
          </div>
          <div className="col-6  d-flex flex-column gap-3  col-sm-3  p-3">
            <div className="d-flex justify-content-end text-center ">
              <p>کیف و کاور گوشی</p>
            </div>
            <div className=" d-flex  justify-content-evenly gap-3 flex-wrap">
              {CategoriesCellPhonePouchCoverPageArray.map((item) => {
                return (
                  <div key={item.id} className="col-5">
                    <img src={item.image} className="w-100" alt="" />
                  </div>
                );
              })}
            </div>

            <div className="d-flex  justify-content-center text-center">
              <p className=" text-center text-info m-0 p-0 text-">مشاهده همه</p>
            </div>
          </div>
          <div className="col-6  d-flex flex-column gap-3  col-sm-3  p-3">
            <div className="d-flex justify-content-end text-center ">
              <p>گوشی موبایل</p>
            </div>
            <div className=" d-flex  justify-content-evenly gap-3  flex-wrap">
              {CategoriesMobilePhonePageArray.map((item) => {
                return (
                  <div key={item.id} className="col-5">
                    <img src={item.image} className="w-100" alt="" />
                  </div>
                );
              })}
            </div>

            <div className="d-flex  justify-content-center text-center">
              <p className=" text-center text-info m-0 p-0 text-">مشاهده همه</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
