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
      <div className="">
        <h2>All Projects</h2>
        <div className="">
          <h3>Hosted Projects</h3>
          <div className="">
            {/* setup slider later */}
            <Hostedprojectcard />
          </div>
        </div>
        <div className="">
          <h3>Non Hosted and UI based Projects</h3>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
