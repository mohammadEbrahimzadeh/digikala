import React, { useEffect, useState, useRef } from "react";
import HomePage from "../../Apis/HomePage";

// Import Swiper React components
import { Swiper, SwiperSlide, autoplay } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
SwiperCore.use([Autoplay]);

export default function Slider() {
  const [banners, setbanners] = useState();
  const [data, setdata] = useState();

  useEffect(() => {
    HomePage().then((res) => setbanners(res.results));
  }, []);

  useEffect(() => {
    setdata(banners);
  }, [banners]);
  return (
    <div className="Slider col-12">
      <div className="containerSlideSwiper w-100 col-12 h-100 ">
        {data ? (
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation={false}
            modules={[Pagination, Navigation]}
            className="mySwiper  "
          >
            {banners.banners.map((item) => {
              return (
                <SwiperSlide key={item.id} className="col-12 w-100">
                  <div className="col-12 ">
                    <img
                      className="w-100   imgSliderHeaderHome"
                      src={item.image}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
