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
  {
    name: "Notes App",
    githublink: "https://github.com/ManishBisht777/GetyourNotes",
    livelink: "https://github.com/ManishBisht777/GetyourNotes",
    image:
      "https://res.cloudinary.com/drsm0ncyx/image/upload/v1661678830/projects/notesapp_qboei8.png",
  },
  {
    name: "Recipe App",
    githublink:
      "https://github.com/ManishBisht777/All-Projects/tree/master/RandomRecipe",
    livelink:
      "https://github.com/ManishBisht777/All-Projects/tree/master/RandomRecipe",
    image:
      "https://res.cloudinary.com/drsm0ncyx/image/upload/v1661678835/projects/ReciepeApp_whnhc2.png",
  },
  {
    name: "Image Slider",
    githublink:
      "https://github.com/ManishBisht777/All-Projects/tree/master/image-slider",
    livelink:
      "https://github.com/ManishBisht777/All-Projects/tree/master/image-slider",
    image:
      "https://res.cloudinary.com/drsm0ncyx/image/upload/v1661678842/projects/slider1_ea2tfp.png",
  },
  {
    name: "Login Form",
    githublink:
      "https://github.com/ManishBisht777/All-Projects/tree/master/loginform",
    livelink:
      "https://github.com/ManishBisht777/All-Projects/tree/master/loginform",
    image:
      "https://res.cloudinary.com/drsm0ncyx/image/upload/v1661678827/projects/LoginForm2_xokh6a.png",
  },
  {
    name: "GlassMorphism Form",
    githublink:
      "https://github.com/ManishBisht777/All-Projects/tree/master/loginForm2",
    livelink:
      "https://github.com/ManishBisht777/All-Projects/tree/master/loginForm2",
    image:
      "https://res.cloudinary.com/drsm0ncyx/image/upload/v1661678824/projects/loginForm1_mlrbj2.png",
  },
  {
    name: "Hotel Landing Page",
    githublink:
      "https://github.com/ManishBisht777/All-Projects/tree/master/landlingPageHospital",
    livelink:
      "https://github.com/ManishBisht777/All-Projects/tree/master/landlingPageHospital",
    image:
      "https://res.cloudinary.com/drsm0ncyx/image/upload/v1661678823/projects/LandingPageResturant_jutogz.png",
  },
  {
    name: "College Website",
    githublink:
      "https://github.com/ManishBisht777/All-Projects/tree/master/CollegeWebsite",
    livelink:
      "https://github.com/ManishBisht777/All-Projects/tree/master/CollegeWebsite",
    image:
      "https://res.cloudinary.com/drsm0ncyx/image/upload/v1661678821/projects/CollegeWebiste_dmrhkm.png",
  },
  {
    name: "Hospital Landing Page",
    githublink:
      "https://github.com/ManishBisht777/All-Projects/tree/master/landlingPageHospital",
    livelink:
      "https://github.com/ManishBisht777/All-Projects/tree/master/landlingPageHospital",
    image:
      "https://res.cloudinary.com/drsm0ncyx/image/upload/v1661678822/projects/LandingPageHsopital_wkmhuy.png",
  },
  {
    name: "Parallax Scroll",
    githublink:
      "https://github.com/ManishBisht777/All-Projects/tree/master/paralax%20scrolling",
    livelink:
      "https://github.com/ManishBisht777/All-Projects/tree/master/paralax%20scrolling",
    image:
      "https://res.cloudinary.com/drsm0ncyx/image/upload/v1661679750/projects/parallax_Scroll_rtirbl.png",
  },
  {
    name: "Tool Tip Navbar",
    githublink:
      "https://github.com/ManishBisht777/All-Projects/tree/master/ToolTipNavbar",
    livelink:
      "https://github.com/ManishBisht777/All-Projects/tree/master/ToolTipNavbar",
    image:
      "https://res.cloudinary.com/drsm0ncyx/image/upload/v1661678843/projects/ToolTipNavbar_mas6bk.png",
  },
  {
    name: "Shop Website",
    githublink:
      "https://github.com/ManishBisht777/All-Projects/tree/master/ToolTipNavbar",
    livelink:
      "https://github.com/ManishBisht777/All-Projects/tree/master/ToolTipNavbar",
    image:
      "https://res.cloudinary.com/drsm0ncyx/image/upload/v1661678837/projects/ShopWebiste_tpdnzk.png",
  },
  {
    name: "Button Effect",
    githublink:
      "https://github.com/ManishBisht777/All-Projects/tree/master/button",
    livelink:
      "https://github.com/ManishBisht777/All-Projects/tree/master/button",
    image:
      "https://res.cloudinary.com/drsm0ncyx/image/upload/v1661678819/projects/buttonEffect_qaa0pn.png",
  },
  {
    name: "CountDown App",
    githublink:
      "https://github.com/ManishBisht777/All-Projects/tree/master/countdown%20app",
    livelink:
      "https://github.com/ManishBisht777/All-Projects/tree/master/countdown%20app",
    image:
      "https://res.cloudinary.com/drsm0ncyx/image/upload/v1661680047/projects/countDown_app_zd4r1r.png",
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
