import React from "react";
import Image from "next/image";

import p1 from "../assets/5.png";

import style from "../styles/hostedproject.module.css";

const Hostedprojectcard = () => {
  return (
    <div className={style.projectcard}>
      <div className={style.projectimg}>
        <Image src={p1} height={200} width={180} objectFit={"cover"} />
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
