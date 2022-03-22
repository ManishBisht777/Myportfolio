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
    <div>
      <div className={Style.allprojectbx}>
        <h2>All Projects</h2>
        <div className={Style.sliderdiv}>
          <h3>Hosted Projects</h3>
          <div className={Style.projectbx}>
            {/* setup slider later */}
            <Hostedprojectcard />
            <Hostedprojectcard />
            <Hostedprojectcard />
          </div>
        </div>
        <div className="">
          <div className={Style.sliderdiv}>
            <h3>Non Hosted and UI based Projects</h3>
            <div className={Style.projectbx}>
              {/* setup slider later */}
              <Hostedprojectcard />
              <Hostedprojectcard />
              <Hostedprojectcard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
