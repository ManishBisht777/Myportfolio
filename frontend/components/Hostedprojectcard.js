import React from "react";
import Image from "next/image";

import p1 from "../assets/profile.png";

import style from "../styles/hostedproject.module.css";

const Hostedprojectcard = () => {
  return (
    <div className={style.projectcard}>
      <Image src={p1} height={200} width={180} className={style.projectimg} />
      <div className={style.projectdetail}>
        <p className={style.projectname}># Project Name</p>
        <p>GitHub Link</p>
        <button className={style.view}>View Deployement</button>
      </div>
    </div>
  );
};

export default Hostedprojectcard;
