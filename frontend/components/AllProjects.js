import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCards } from "swiper";

// nested vertical slider - slider 1 in slider and image gallery at 2nd slide

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

import Style from "../styles/allprojects.module.css";
import Hostedprojectcard from "./Hostedprojectcard";

import p1 from "../assets/5.png";

import Image from "next/image";

const AllProjects = () => {
  return (
    <div className={Style.allprojectbx}>
      <h2>All Projects</h2>
      <div className={Style.sliderdiv}>
        <h3>Hosted Projects</h3>

        <div className={Style.projectbx}>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            slidesPerView={"auto"}
            centeredSlides={true}
            // coverflowEffect={{
            //   rotate: 50,
            //   stretch: 0,
            //   depth: 100,
            //   modifier: 1,
            //   slideShadows: true,
            // }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
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
              <Image src={p1} height={300} width={220} />
            </SwiperSlide>
            <SwiperSlide className={Style.swiper_slide_2}>
              <Image src={p1} height={300} width={220} />
            </SwiperSlide>
            <SwiperSlide className={Style.swiper_slide_2}>
              <Image src={p1} height={300} width={220} />
            </SwiperSlide>
            <SwiperSlide className={Style.swiper_slide_2}>
              <Image src={p1} height={300} width={220} />
            </SwiperSlide>
            <SwiperSlide className={Style.swiper_slide_2}>
              <Image src={p1} height={300} width={220} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
