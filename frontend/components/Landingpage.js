import React from "react";
import style from "../styles/landingpage.module.css";
const Landingpage = () => {
  return (
    <div className={style.homepage}>
      <div className={style.introduction}>Hi There</div>
      <div className={style.name}>
        I am Man <span>i</span> sh
      </div>
    </div>
  );
};

export default Landingpage;
