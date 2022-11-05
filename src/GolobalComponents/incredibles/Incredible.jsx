import React, { useEffect, useState } from "react";
import AmazingTypo from "../../Img/AmazingTypo";
import Badge from "react-bootstrap/Badge";
import HomePage from "../../Apis/HomePage";
export default function Incredible() {
  const [ArrayIncredibleProducts, setArrayIncredibleProducts] = useState();
  useEffect(() => {
    HomePage().then((res) => {
      setArrayIncredibleProducts(res.results.incredible.products);
    });
  }, []);

  return (
    <div className="Incredible mt-3 mt-sm-4  d-flex justify-content-center ">
      {ArrayIncredibleProducts ? (
        <div className="bg-danger p-sm-1 col-12   col-sm-10 d-flex justify-content-evenly">
          <div className="IncredibleContainerBoexes col-9 col-sm-10 gap-3 p-2 bg-danger d-flex">
            {ArrayIncredibleProducts.map((item) => {
              let current_price = Math.floor(item.price.current_price / 10);

              current_price = Intl.NumberFormat().format(current_price);
              let prev_price = Math.floor(item.price.prev_price / 10);

              prev_price = Intl.NumberFormat().format(prev_price);

              return (
                <div
                  key={item.id}
                  className="bg-light d-flex flex-column   p-2 col-6  col-sm-4 col-md-3 col-xl-2 "
                >
                  <div className="col-12  d-flex justify-content-center ">
                    <img
                      src={item.image}
                      className="imgCoverForCards h-100 w-100"
                      alt=""
                    />
                  </div>
                  <div className="col-12 mt-1 ">
                    <div className="d-flex justify-content-center ">
                      <div className="d-flex gap-1 ps-0 px-sm-0 px-md-1   col-12 justify-content-between">
                        <p>{current_price}</p>
                        <Badge
                          className="p-1 m-0 d-flex BadgeDiscountPercent   align-items-center"
                          bg="danger"
                        >
                          {`${item.price.discount_percent}%`}
                        </Badge>
                      </div>
                    </div>
                    <div className=" px-2 px-sm-2 px-md-3 opacity-50 text-decoration-line-through">
                      <p>{prev_price}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-sm-1 col-2  d-flex flex-column justify-content-center text-center ">
            <AmazingTypo></AmazingTypo>
          </div>
        </div>
      ) : null}
    </div>
  );
}
