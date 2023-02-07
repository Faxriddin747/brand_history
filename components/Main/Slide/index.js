import React from "react";
import cls from "./slide.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";
import "swiper/css/navigation";


export default function Slide() {
  return (
    <div className={cls.slides}>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src="https://dl.bs365.uz/storage/sliders/138/WXmEO8ZQ8vfMLlbSjoWT.jpg"/></SwiperSlide>
        <SwiperSlide><img src="https://dl.bs365.uz/storage/sliders/138/WXmEO8ZQ8vfMLlbSjoWT.jpg"/></SwiperSlide>
        <SwiperSlide><img src="https://dl.bs365.uz/storage/sliders/138/WXmEO8ZQ8vfMLlbSjoWT.jpg"/></SwiperSlide>
      </Swiper>
    </div>
      );

}
