import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";

// nested vertical slider - slider 1 in slider and image gallery at 2nd slide
import { Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import Style from "../Styles/allprojects.module.css";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

let projects = [
  {
    name: "sample name",
    description: "sample desc",
    githublink: "githublink",
    livelink: "egtsetloda",
    startdate: "12-1-20",
    enddate: "12-1-212",
    techstack: ["html", "css", "js", "node", "mongodb"],
    image:
      "https://i.picsum.photos/id/931/220/250.jpg?hmac=37E4_2yVB_qQrDBsjTvs0wIPOL_WZsf5JkKSnBLgo-U",
  },
  {
    name: "sample name 2",
    description: "sample desc",
    githublink: "githublasdasdadink",
    livelink: "livelink",
    startdate: "12-1-20",
    enddate: "12-1-212",
    techstack: ["html", "css", "js", "node", "mongodb"],
    image:
      "https://i.picsum.photos/id/931/220/250.jpg?hmac=37E4_2yVB_qQrDBsjTvs0wIPOL_WZsf5JkKSnBLgo-U",
  },
  {
    name: "sample name 3",
    description: "sample desc",
    githublink: "githublink",
    livelink: "asdad",
    startdate: "12-1-20",
    enddate: "12-1-212",
    techstack: ["html", "css", "js", "node", "mongodb"],
    image:
      "https://i.picsum.photos/id/931/220/250.jpg?hmac=37E4_2yVB_qQrDBsjTvs0wIPOL_WZsf5JkKSnBLgo-U",
  },
  {
    name: "sample name 4",
    description: "sample desc",
    githublink: "githublink",
    livelink: "adadasdasda",
    startdate: "12-1-20",
    enddate: "12-1-212",
    techstack: ["html", "css", "js", "node", "mongodb"],
    image:
      "https://i.picsum.photos/id/931/220/250.jpg?hmac=37E4_2yVB_qQrDBsjTvs0wIPOL_WZsf5JkKSnBLgo-U",
  },
  {
    name: "sample name 5",
    description: "sample desc",
    githublink: "asdasdadsad",
    livelink: "livelink",
    startdate: "12-1-20",
    enddate: "12-1-212",
    techstack: ["html", "css", "js", "node", "mongodb"],
    image:
      "https://i.picsum.photos/id/931/220/250.jpg?hmac=37E4_2yVB_qQrDBsjTvs0wIPOL_WZsf5JkKSnBLgo-U",
  },
];

const AllProjects = (props) => {
  // const [data, setdata] = useState("");

  // React.useEffect(() => {
  //   const fetchdata = async () => {
  //     let res = await fetch(
  //       `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects?populate=*`
  //     );
  //     const json = await res.json();
  //     setdata(json);
  //   };

  //   fetchdata();
  // }, []);

  return (
    <div className={Style.allprojectbx}>
      <h2>All Projects </h2>

      <div className={Style.sliderdiv}>
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          loop={true}
          centeredSlides={true}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          navigation={true}
          modules={[Navigation, Autoplay]}
          // className="mySwiper"
        >
          {projects.map((item, index) => {
            return (
              <SwiperSlide key={index} className={Style.swiperslide}>
                <Link href={`/project/${item.name}`}>
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
                          <Link href={`${item.githublink}`}>
                            <AiFillGithub size={20} />
                          </Link>
                        </button>
                        <button>
                          <Link href={`${item.livelink}`}>
                            <AiOutlineLink size={20} />
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

// export async function getServerSideProps(context) {
//   let headers = {
//     Authorization:
//       "Bearer 23d0e366c6479ab7e52a182aacea18d843c4495b8ef1b29011e83e632cc547ad3ee1d2dd3d522a96e2bf35e64a0fe80694238344ab3846479abc1a57856090a35f393765ad1e240776a994fddebe095b393f5bad510c514be6c11d70d91c95abdc84882cf81c3d1878d1f61c30d60e5a46abdc6ed2ee6172ac2b19b9999ee22f",
//   };
//   let res = await fetch("http://localhost:1337/api/projects?populate=*", {
//     headers: headers,
//   });

//   let projects = await res.json();
//   console.log(projects);

//   return {
//     props: { projects: projects }, // will be passed to the page component as props
//   };
// }

export default AllProjects;
