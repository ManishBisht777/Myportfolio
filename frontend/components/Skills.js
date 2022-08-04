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
            <Link href="/" className={style.skilla}>
              <FaCss3Alt style={{ color: "#9FC088" }} />
            </Link>
          </li>
          <li className={style.skilllist}>
            <Link href="/" className={style.skilla}>
              <FaHtml5 />
            </Link>
          </li>
          <li className={style.skilllist}>
            <Link href="/" className={style.skilla}>
              <IoLogoJavascript />
            </Link>
          </li>
          <li className={style.skilllist}>
            <Link href="/" className={style.skilla}>
              <FaReact />
            </Link>
          </li>
          <li className={style.skilllist}>
            <Link href="/" className={style.skilla}>
              <SiMongodb />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
