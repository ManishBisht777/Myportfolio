import React from "react";
import style from "../styles/footer.module.css";
import Link from "next/link";

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaHeart,
} from "react-icons/fa";

import { AiFillLinkedin } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";

function Footer() {
  return (
    <>
      <footer className={style.footer}>
        <div className={style.contact}>
          <h4>Socials As</h4>
          <ul>
            <li>
              <a
                href="https://github.com/ManishBisht777"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/manish-bisht-21b02b220/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://leetcode.com/ManishBisht777/"
                target="_blank"
                rel="noreferrer"
              >
                <SiLeetcode />
              </a>
            </li>
          </ul>
        </div>

        {/* <video src="./footervideo.mp4" type="video/mp4" loop autoPlay></video> */}
      </footer>
    </>
  );
}

export default Footer;
