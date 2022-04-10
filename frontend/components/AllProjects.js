import React from "react";

// nested vertical slider - slider 1 in slider and image gallery at 2nd slide
import { Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import Style from "../styles/allprojects.module.css";
import Hostedprojectcard from "./Hostedprojectcard";

const AllProjects = () => {
  return (
    <div className={Style.allprojectbx}>
      <h2>All Projects</h2>
      <div className={Style.sliderdiv}>
        <Swiper
          slidesPerView={window.innerWidth > 750 ? 4 : 3}
          spaceBetween={10}
          slidesPerGroup={4}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Navigation, Autoplay]}
          // className="mySwiper"
        >
          <SwiperSlide className={Style.swiperslide}>
            <Hostedprojectcard />
          </SwiperSlide>
          <SwiperSlide>
            <Hostedprojectcard />
          </SwiperSlide>
          <SwiperSlide>
            <Hostedprojectcard />
          </SwiperSlide>
          <SwiperSlide>
            <Hostedprojectcard />
          </SwiperSlide>
          <SwiperSlide>
            <Hostedprojectcard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default AllProjects;
