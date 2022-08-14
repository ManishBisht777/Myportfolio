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
              <Link
                href="https://github.com/ManishBisht777"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/manish-bisht-21b02b220/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin />
              </Link>
            </li>
            <li>
              <Link
                href="https://leetcode.com/ManishBisht777/"
                target="_blank"
                rel="noreferrer"
              >
                <SiLeetcode />
              </Link>
            </li>
          </ul>
        </div>

        {/* <video src="./footervideo.mp4" type="video/mp4" loop autoPlay></video> */}
      </footer>
    </>
  );
}

export default Footer;
