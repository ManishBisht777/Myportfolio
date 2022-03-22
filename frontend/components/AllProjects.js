import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
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
        <div className={Style.stylediv}>
          <span>Hosted Projects</span>
          <span>Hosted Projects</span>
          <span>Hosted Projects</span>
          <span>Hosted Projects</span>
          <span>Hosted Projects</span>
          <span>Hosted Projects</span>
          <span>Hosted Projects</span>
        </div>
        <div className={Style.projectbx}>
          <Hostedprojectcard />
          <Hostedprojectcard />
          <Hostedprojectcard />
        </div>
        <div className={Style.stylediv2}>
          <span>Hosted Projects</span>
          <span>Hosted Projects</span>
          <span>Hosted Projects</span>
          <span>Hosted Projects</span>
          <span>Hosted Projects</span>
          <span>Hosted Projects</span>
          <span>Hosted Projects</span>
        </div>
      </div>
      <div className={Style.sliderdiv}>
        <h3>Non Hosted and UI based Projects</h3>
        <div className={Style.projectbx}>
          <Hostedprojectcard />
          <Hostedprojectcard />
          <Hostedprojectcard />
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
