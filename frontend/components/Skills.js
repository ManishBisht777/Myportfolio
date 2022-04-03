import React from "react";
import style from "../styles/skills.module.css";

const Skills = () => {
  return (
    <div className={style.skillbox}>
      <div className={style.container}>
        <div className={style.left}></div>
        <div className={style.front}></div>
        <div className={style.right}></div>
        <div className={style.back}></div>

        {/* <div className={style.shadow}></div> */}
      </div>
    </div>
  );
};

export default Skills;
