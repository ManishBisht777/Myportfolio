import React from "react";
import Image from "next/image";

import p1 from "../assets/skillbg.jpg";

import style from "../styles/hostedproject.module.css";

const Hostedprojectcard = () => {
  return (
    <div className={style.projectcard}>
      <div className={style.projectimg}>
        <Image src={p1} width={250} height={300} objectFit="cover" />
      </div>
      <div className={style.projectdesc}>
        <h4>Name</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia vel
          atque accusantium sequi doloribus corporis aperiam voluptas tenetur
          quisquam earum? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quia vel atque accusantium sequi doloribus corporis aperiam
          voluptas tenetur quisquam earum?
        </p>
        <div className={style.buttons}>
          <button>Live Link</button>
          <button>Github Link</button>
        </div>
      </div>
    </div>
  );
};

export default Hostedprojectcard;
