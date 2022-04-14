import React from "react";
import style from "../styles/skills.module.css";

import { FaCss3Alt, FaHtml5, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb } from "react-icons/si";

const Skills = () => {
  return (
    <div className={style.skillbox}>
      {/* <h3>Skills</h3> */}
      <div className={style.skills}>
        <ul>
          <li className={style.skilllist}>
            <a href="/" className={style.skilla}>
              <FaCss3Alt style={{ color: "#9FC088" }} />
            </a>
          </li>
          <li className={style.skilllist}>
            <a href="/" className={style.skilla}>
              <FaHtml5 />
            </a>
          </li>
          <li className={style.skilllist}>
            <a href="/" className={style.skilla}>
              <IoLogoJavascript />
            </a>
          </li>
          <li className={style.skilllist}>
            <a href="/" className={style.skilla}>
              <FaReact />
            </a>
          </li>
          <li className={style.skilllist}>
            <a href="/" className={style.skilla}>
              <SiMongodb />
            </a>
          </li>
          <li className={style.skilllist}>
            <a href="/" className={style.skilla}>
              <FaNodeJs />
            </a>
          </li>
          <li className={style.skilllist}>
            <a href="/" className={style.skilla}>
              <FaCss3Alt style={{ color: "#9FC088" }} />
            </a>
          </li>
          <li className={style.skilllist}>
            <a href="/" className={style.skilla}>
              <FaHtml5 />
            </a>
          </li>
          <li className={style.skilllist}>
            <a href="/" className={style.skilla}>
              <IoLogoJavascript />
            </a>
          </li>
          <li className={style.skilllist}>
            <a href="/" className={style.skilla}>
              <FaReact />
            </a>
          </li>
          <li className={style.skilllist}>
            <a href="/" className={style.skilla}>
              <SiMongodb />
            </a>
          </li>
          <li className={style.skilllist}>
            <a href="/" className={style.skilla}>
              <FaNodeJs />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
