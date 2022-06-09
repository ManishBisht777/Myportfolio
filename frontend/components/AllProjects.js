import React from "react";
import { useEffect, useState } from "react";

// nested vertical slider - slider 1 in slider and image gallery at 2nd slide
import { Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import Style from "../styles/allprojects.module.css";
import Card2 from "./card2";
import Hostedprojectcard from "./Hostedprojectcard";

const AllProjects = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:1337/api/projects", {
      headers: {
        Authorization:
          "Bearer 23d0e366c6479ab7e52a182aacea18d843c4495b8ef1b29011e83e632cc547ad3ee1d2dd3d522a96e2bf35e64a0fe80694238344ab3846479abc1a57856090a35f393765ad1e240776a94fddebe095b393f5bad510c514be6c11d70d91c95abdc84882cf81c3d1878d1f61c30d60e5a46abdc6ed2ee6172ac2b19b9999ee22f",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  console.log(data);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div className={Style.allprojectbx}>
      <h2>All Projects</h2>
      <div className={Style.sliderdiv}>
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
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
            <Card2 />
          </SwiperSlide>
          <SwiperSlide>
            <Card2 />
          </SwiperSlide>
          <SwiperSlide>
            <Card2 />
          </SwiperSlide>
          <SwiperSlide>
            <Card2 />
          </SwiperSlide>
          <SwiperSlide>
            <Card2 />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

// export async function getServerSideProps(context) {
//   let res = await fetch("http://localhost:1337/api/projects", {
//     headers: {
//       Authorization:
//         "Bearer 23d0e366c6479ab7e52a182aacea18d843c4495b8ef1b29011e83e632cc547ad3ee1d2dd3d522a96e2bf35e64a0fe80694238344ab3846479abc1a57856090a35f393765ad1e240776a94fddebe095b393f5bad510c514be6c11d70d91c95abdc84882cf81c3d1878d1f61c30d60e5a46abdc6ed2ee6172ac2b19b9999ee22f",
//     },
//   });

//   let projects = await res.json();
//   console.log(projects.data);

//   return {
//     props: { products }, // will be passed to the page component as props
//   };
// }

export default AllProjects;
