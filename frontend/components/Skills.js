import React from "react";
import style from "../styles/skills.module.css";
import Link from "next/link";

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
              {/* <FaCss3Alt style={{ color: "#9FC088" }} /> */}
              <img
                src="https://res.cloudinary.com/drsm0ncyx/image/upload/v1660468176/languages/html-5_aed99c.png"
                alt=""
              />
            </Link>
          </li>
          <li className={style.skilllist}>
            <Link href="/" className={style.skilla}>
              {/* <FaHtml5 /> */}
              <img
                src="https://res.cloudinary.com/drsm0ncyx/image/upload/v1660468175/languages/css_z5upro.png"
                alt=""
              />
            </Link>
          </li>
          <li className={style.skilllist}>
            <Link href="/" className={style.skilla}>
              {/* <IoLogoJavascript /> */}
              <img
                src="https://res.cloudinary.com/drsm0ncyx/image/upload/v1660468178/languages/js_ejooe1.png"
                alt=""
              />
            </Link>
          </li>
          <li className={style.skilllist}>
            <Link href="/" className={style.skilla}>
              {/* <FaReact /> */}
              <img
                src="https://res.cloudinary.com/drsm0ncyx/image/upload/v1660468182/languages/structure_bvdkl2.png"
                alt=""
              />
            </Link>
          </li>
          <li className={style.skilllist}>
            <Link href="/" className={style.skilla}>
              {/* <FaReact /> */}
              <img
                src="https://res.cloudinary.com/drsm0ncyx/image/upload/v1660468175/languages/c-_jbinui.png"
                alt=""
              />
            </Link>
          </li>
          <li className={style.skilllist}>
            <Link href="/" className={style.skilla}>
              <SiMongodb style={{ color: "#3FA037" }} />
            </Link>
          </li>
          <li className={style.skilllist}>
            <Link href="/" className={style.skilla}>
              {/* <SiMongodb /> */}
              <img
                src="https://res.cloudinary.com/drsm0ncyx/image/upload/v1660468177/languages/nodejs_nbcofr.png"
                alt=""
              />
            </Link>
          </li>
          <li className={style.skilllist}>
            <Link href="/" className={style.skilla}>
              {/* <SiMongodb /> */}
              <img
                src="https://res.cloudinary.com/drsm0ncyx/image/upload/v1660468851/languages/redux-seeklogo.com_sjpa6n.svg"
                alt=""
              />
            </Link>
          </li>
          <li className={style.skilllist}>
            <Link href="/" className={style.skilla}>
              {/* <SiMongodb /> */}
              <img
                src="https://res.cloudinary.com/drsm0ncyx/image/upload/v1660469022/languages/next-js-seeklogo.com_xzp1dj.svg"
                alt=""
              />
            </Link>
          </li>
          <li className={style.skilllist}>
            <Link href="/" className={style.skilla}>
              {/* <SiMongodb /> */}
              <img
                src="https://res.cloudinary.com/drsm0ncyx/image/upload/v1660469243/languages/shopify_gqdr0g.png"
                alt=""
              />
            </Link>
          </li>
          <li className={style.skilllist}>
            <Link href="/" className={style.skilla}>
              {/* <SiMongodb /> */}
              <img
                src="https://res.cloudinary.com/drsm0ncyx/image/upload/v1660469251/languages/git_da6bou.png"
                alt=""
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
