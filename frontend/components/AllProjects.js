import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import Image from "next/image";

import "swiper/css/effect-cards";

import { EffectCards } from "swiper";

import { Pagination, Navigation } from "swiper";

import Style from "../styles/allprojects.module.css";

// import p1 from "../assets/bg7.jpg";

const AllProjects = () => {
  return (
    <div className={Style.allprojectbx}>
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        navigation={true}
        pagination={true}
        modules={[EffectCards, Pagination, Navigation]}
        // className="mySwiper"
        className={Style.swiper}
      >
        <SwiperSlide className={Style.swiper_slide}>hello</SwiperSlide>
        <SwiperSlide className={Style.swiper_slide}>hello</SwiperSlide>
        <SwiperSlide className={Style.swiper_slide}>hello</SwiperSlide>
        <SwiperSlide className={Style.swiper_slide}>hello</SwiperSlide>
        <SwiperSlide className={Style.swiper_slide}>hello</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AllProjects;
