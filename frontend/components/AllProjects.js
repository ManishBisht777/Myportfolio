import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";

// nested vertical slider - slider 1 in slider and image gallery at 2nd slide
import { Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import Style from "../styles/allprojects.module.css";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

let projects = [
  {
    name: "GetSetBuy",
    githublink: "https://github.com/ManishBisht777/GetSetBuy",
    livelink: "https://getsetbuy.netlify.app/",
    image:
      "https://res.cloudinary.com/drsm0ncyx/image/upload/v1642348420/GetsetBuy/1_tpdxxf.png",
  },
  {
    name: "PortFolio App",
    githublink: "https://github.com/ManishBisht777/Myportfolio",
    livelink: "https://manishbishtportfolio.netlify.app/",
    image:
      "https://res.cloudinary.com/drsm0ncyx/image/upload/v1660472709/projects/portfolio_dikjzp.png",
  },
];

const AllProjects = (props) => {
  return (
    <div className={Style.allprojectbx}>
      <h2>All Projects </h2>

      <div className={Style.sliderdiv}>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          centeredSlides={true}
          navigation={true}
          modules={[Navigation, Autoplay]}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {projects.map((item, index) => {
            return (
              <SwiperSlide key={index} className={Style.swiperslide}>
                {/* <Link href={`/project/${item.name}`}> */}
                <div className={Style.card}>
                  <div className={Style.card_img}>
                    <img src={item.image} alt="Picture of the author" />
                  </div>

                  <div className={Style.card_info}>
                    <div className={Style.card_name}>
                      <p>{item.name}</p>
                    </div>
                    <div className={Style.card_links}>
                      <button>
                        <a
                          href={item.githublink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <AiFillGithub size={20} />
                        </a>
                      </button>
                      <button>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={item.livelink}
                        >
                          <AiOutlineLink size={20} />
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
                {/* </Link> */}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default AllProjects;
