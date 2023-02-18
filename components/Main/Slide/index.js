import React from "react";
import cls from "./slide.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";
import "swiper/css/navigation";


export default function Slide({bannerData}) {
  console.log(bannerData,'banenr')
  return (
    <div className={cls.slides}>
      <Swiper navigation={true} modules={[Navigation]} loop={true} className="mySwiper">
        {bannerData.length && bannerData.map((item)=>(

        <SwiperSlide key={item.id}><img src={item.background.url}/></SwiperSlide>
        ))}

      </Swiper>
    </div>
      );

}
