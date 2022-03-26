import React from "react";
import Image from "next/image";

import p1 from "../assets/5.png";

import style from "../styles/hostedproject.module.css";

const Hostedprojectcard = () => {
  return (
    <div data-swiper-parallax="300" className={style.projectcard}>
      <div data-swiper-parallax="300" className={style.projectimg}>
        <Image src={p1} />
      </div>
      <div className={style.projectdetail}>
        <p className={style.projectname}>Project Name</p>
        <p className={style.projectname}>GitHub Link</p>
        <button className={style.view}>View Deployement</button>
      </div>
    </div>
  );
};

export default Hostedprojectcard;
