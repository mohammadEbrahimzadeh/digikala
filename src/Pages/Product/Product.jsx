import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import ReactPaginate from "react-paginate";
import Loader from "../../GolobalComponents/Loader/Loader";
import CommentsProduct from "../../Apis/CommentsProduct";
import ModalGallaryDekstop from "./Components/ModalGallaryDekstop/ModalGallaryDekstop";
import ModalShowAllCommentsMobaile from "./Components/ModalShowAllCommentsMobaile/ModalShowAllCommentsMobaile";
import BreadcrumbOfHeader from "./Components/BreadcrumbOfHeader/BreadcrumbOfHeader";
import HeaderPage from "./Components/HeaderPage/HeaderPage";
import Recommendations from "./Components/Recommendations/Recommendations";
import InformaintionProduct from "./Components/InformaintionProduct/InformaintionProduct";
import MoreComments from "./Components/MoreComments/MoreComments";
import LastCommentsInDekstop from "./Components/LastCommentsInDekstop/LastCommentsInDekstop";
import LastCommentsInMobile from "./Components/LastCommentsInMobile/LastCommentsInMobile";
import ModalMoreCommentsMobile from "./Components/ModalMoreCommentsMobile/ModalMoreCommentsMobile";
import {
  AiOutlineCloseCircle,
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import ProductsApi from "../../Apis/ProductsApi";
import OptionsSendProduct from "../../GolobalComponents/OptionsSendProduct/OptionsSendProduct";
export default function Product() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [ProductsApiArray, setProductsApiArray] = useState();
  const [IsOpenModalGallaryProduct, setIsOpenModalGallaryProduct] = useState(
    false
  );
  const [ShowModalComments, setShowModalComments] = useState(false);
  const [ActiveColor, setActiveColor] = useState(0);
  const [ActiveColorName, setActiveColorName] = useState();
  const [ProductCommentArray, setProductCommentArray] = useState();
  const [NumberOfPageComment, setNumberOfPageComment] = useState(1);
  const [
    ShowModalMoreCommentsMobile,
    setShowModalMoreCommentsMobile,
  ] = useState(false);
  const [TitleLoading, setTitleLoading] = useState();

  useEffect(() => {
    ProductsApi(id).then((res) => {
      setProductsApiArray(res);
    });
    CommentsProduct(id, NumberOfPageComment).then((res) => {
      setProductCommentArray(res);
    });
  }, []);
  useEffect(() => {
    setTitleLoading("Loading...");

    if (ProductsApiArray && ProductsApiArray.status !== 404) {
      if (ProductsApiArray.results.product.mainDetails.colors.length > 0) {
        setActiveColorName(
          ProductsApiArray.results.product.mainDetails.colors[0].title
        );
      }
    } else if (ProductsApiArray && ProductsApiArray.status == 404) {
      reDirectToHome();
    }
  }, [ProductsApiArray]);
  useEffect(() => {
    if (ProductsApiArray && ProductsApiArray.status !== 404) {
      CommentsProduct(id, NumberOfPageComment).then((res) => {
        setProductCommentArray(res);
      });
    }
  }, [NumberOfPageComment]);

  function reDirectToHome() {
    setTitleLoading("محصول یافت نشد");
    setTimeout(() => {
      navigate("/");
      // return redirect("/");
    }, 2000);
  }
  return (
    <>
      {ProductsApiArray &&
      ProductsApiArray.status !== 404 &&
      ProductCommentArray ? (
        <div className="Product  p-3 pt-0 pt-sm-3 position-relative ">
          {/* start modal gallary product */}
          <ModalGallaryDekstop
            ProductsApiArray={ProductsApiArray}
            IsOpenModalGallaryProduct={IsOpenModalGallaryProduct}
            setIsOpenModalGallaryProduct={setIsOpenModalGallaryProduct}
            AiOutlineCloseCircle={AiOutlineCloseCircle}
          ></ModalGallaryDekstop>
          {/* end modal gallary product */}
          {/* ------------ */}
          {/* start show all comments modal */}
          <ModalShowAllCommentsMobaile
            ProductCommentArray={ProductCommentArray}
            ShowModalComments={ShowModalComments}
            setShowModalComments={setShowModalComments}
            AiOutlineCloseCircle={AiOutlineCloseCircle}
            AiOutlineLike={AiOutlineLike}
            AiOutlineDislike={AiOutlineDislike}
            AiOutlinePlus={AiOutlinePlus}
            AiOutlineMinus={AiOutlineMinus}
          ></ModalShowAllCommentsMobaile>
          {/* end show all comments modal */}
          {/* ------------ */}
          {/* start heder Breadcrumb */}
          <BreadcrumbOfHeader
            ProductsApiArray={ProductsApiArray}
          ></BreadcrumbOfHeader>
          {/* end heder Breadcrumb */}
          {/* ------------ */}
          {/* start main content product section */}
          <HeaderPage
            ProductsApiArray={ProductsApiArray}
            ActiveColorName={ActiveColorName}
            setActiveColorName={setActiveColorName}
            ActiveColor={ActiveColor}
            setActiveColor={setActiveColor}
            FaRegMoneyBillAlt={FaRegMoneyBillAlt}
            setIsOpenModalGallaryProduct={setIsOpenModalGallaryProduct}
          ></HeaderPage>
          {/* ------------ */}
          {/* start OptionsSendProduct section */}
          <OptionsSendProduct
            grayAllElems={"grayAllElems"}
          ></OptionsSendProduct>
          {/* end OptionsSendProduct section */}
          {/* ------------ */}
          {/* start recommendations product */}
          <Recommendations
            ProductsApiArray={ProductsApiArray}
            FaRegMoneyBillAlt={FaRegMoneyBillAlt}
          ></Recommendations>
          {/* end recommendations product */}
          {/* start imformaintion product */}
          <InformaintionProduct
            ProductsApiArray={ProductsApiArray}
          ></InformaintionProduct>
          {/* end imformaintion product */}
          {/* start LastCommentsInDekstop */}
          <LastCommentsInDekstop
            ProductsApiArray={ProductsApiArray}
            AiOutlineLike={AiOutlineLike}
            AiOutlineDislike={AiOutlineDislike}
            AiOutlinePlus={AiOutlinePlus}
            AiOutlineMinus={AiOutlineMinus}
          ></LastCommentsInDekstop>
          {/* end LastCommentsInDekstop */}
          {/* start LastCommentsInMobile */}
          <LastCommentsInMobile
            ProductsApiArray={ProductsApiArray}
            AiOutlineLike={AiOutlineLike}
            AiOutlineDislike={AiOutlineDislike}
            AiOutlinePlus={AiOutlinePlus}
            AiOutlineMinus={AiOutlineMinus}
            setShowModalMoreCommentsMobile={setShowModalMoreCommentsMobile}
          ></LastCommentsInMobile>
          {/* end LastCommentsInMobile */}
          {/* start comments product */}
          <MoreComments
            NumberOfPageComment={NumberOfPageComment}
            CommentsProduct={CommentsProduct}
            setProductCommentArray={setProductCommentArray}
            ProductCommentArray={ProductCommentArray}
            AiOutlineLike={AiOutlineLike}
            AiOutlineDislike={AiOutlineDislike}
            // 0------
            setNumberOfPageComment={setNumberOfPageComment}
            AiOutlinePlus={AiOutlinePlus}
            AiOutlineMinus={AiOutlineMinus}
            ReactPaginate={ReactPaginate}
          ></MoreComments>{" "}
          {/* end comments product */}
          {/* start ModalMoreCommentsMobile */}
          <ModalMoreCommentsMobile
            ShowModalMoreCommentsMobile={ShowModalMoreCommentsMobile}
            setShowModalMoreCommentsMobile={setShowModalMoreCommentsMobile}
            ProductCommentArray={ProductCommentArray}
            AiOutlineLike={AiOutlineLike}
            AiOutlineDislike={AiOutlineDislike}
            AiOutlinePlus={AiOutlinePlus}
            AiOutlineMinus={AiOutlineMinus}
            AiOutlineCloseCircle={AiOutlineCloseCircle}
            ReactPaginate={ReactPaginate}
            setNumberOfPageComment={setNumberOfPageComment}
          ></ModalMoreCommentsMobile>
          {/* end ModalMoreCommentsMobile */}
        </div>
      ) : (
        <>
          <Loader TitleLoading={TitleLoading} />
        </>
      )}
    </>
  );
}
