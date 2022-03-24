import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
  EffectCards,
} from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Style from "../styles/allprojects.module.css";
import Hostedprojectcard from "./Hostedprojectcard";

const AllProjects = () => {
  return (
    <div className={Style.allprojectbx}>
      <h2>All Projects</h2>
      <div className={Style.sliderdiv}>
        <h3>Hosted Projects</h3>
        {/* <div className={Style.stylediv}>
          <span>Hosted Projects</span>
          <span>Hosted Projects</span>
          <span>Hosted Projects</span>
          <span>Hosted Projects</span>
          <span>Hosted Projects</span>
          <span>Hosted Projects</span>
          <span>Hosted Projects</span>
        </div> */}
        <div className={Style.projectbx}>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className={Style.swiper}
          >
            <SwiperSlide className={Style.swiper_slide}>
              <Hostedprojectcard />
            </SwiperSlide>
            <SwiperSlide className={Style.swiper_slide}>
              <Hostedprojectcard />
            </SwiperSlide>
            <SwiperSlide className={Style.swiper_slide}>
              <Hostedprojectcard />
            </SwiperSlide>
            <SwiperSlide className={Style.swiper_slide}>
              <Hostedprojectcard />
            </SwiperSlide>
            <SwiperSlide className={Style.swiper_slide}>
              <Hostedprojectcard />
            </SwiperSlide>
            <SwiperSlide className={Style.swiper_slide}>
              <Hostedprojectcard />
            </SwiperSlide>
            <SwiperSlide className={Style.swiper_slide}>
              <Hostedprojectcard />
            </SwiperSlide>
          </Swiper>
        </div>
        {/* <div className={Style.stylediv2}>
          <span>Hosted Projects</span>
          <span>Hosted Projects</span>
          <span>Hosted Projects</span>
          <span>Hosted Projects</span>
          <span>Hosted Projects</span>
          <span>Hosted Projects</span>
          <span>Hosted Projects</span>
        </div> */}
      </div>
      <div className={Style.sliderdiv}>
        <h3>Non Hosted and UI based Projects</h3>
        <div className={Style.projectbx}>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className={Style.swiper2}
          >
            <SwiperSlide className={Style.swiper_slide_2}>
              <Hostedprojectcard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
