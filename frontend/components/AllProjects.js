import React from "react";

// nested vertical slider - slider 1 in slider and image gallery at 2nd slide
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

import Style from "../styles/allprojects.module.css";
import Hostedprojectcard from "./Hostedprojectcard";

import p1 from "../assets/1.png";
import p2 from "../assets/2.png";
import p3 from "../assets/5.png";
import p4 from "../assets/bg4.jpg";
import p5 from "../assets/bg5.jpg";
import p6 from "../assets/bg7.jpg";

import Image from "next/image";

const AllProjects = () => {
  return (
    <div className={Style.allprojectbx}>
      <h2>All Projects</h2>
      <div className={Style.sliderdiv}>
        <Swiper
          spaceBetween={50}
          pagination={{
            clickable: true,
          }}
          direction={"vertical"}
          modules={[Pagination]}
          centeredSlides={true}
          className={Style.swiper}
        >
          <SwiperSlide className={Style.swiper_slide}>
            <Swiper
              spaceBetween={50}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className={Style.swiper}
            >
              <SwiperSlide className={Style.swiper_slide}>
                <Image src={p1}></Image>
              </SwiperSlide>
              <SwiperSlide className={Style.swiper_slide}>
                <Image src={p2}></Image>
              </SwiperSlide>
              <SwiperSlide className={Style.swiper_slide}>
                <Image src={p3}></Image>
              </SwiperSlide>
            </Swiper>
          </SwiperSlide>
          <SwiperSlide className={Style.swiper_slide}>
            <Image src={p4}></Image>
          </SwiperSlide>
          <SwiperSlide className={Style.swiper_slide}>
            <Image src={p5}></Image>
          </SwiperSlide>
          <SwiperSlide className={Style.swiper_slide}>
            <Image src={p6}></Image>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default AllProjects;
