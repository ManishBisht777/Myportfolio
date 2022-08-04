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

function Footer() {
  return (
    <>
      <footer className={style.footer}>
        <div className={style.foot}>
          <div className={style.foot1}>
            <h1>Category</h1>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/products">All Products</Link>
              </li>
              <li>
                <Link href="/cart">Cart</Link>
              </li>
            </ul>
          </div>
          <div className={style.foot2}>
            <h1>Message Me</h1>
            {/* <div className="text"> </div> */}
            <form action="/">
              <div className={style.fields}>
                <div className={`${style["field"]} ${style["name"]}`}>
                  <input type="text" placeholder="Name" required />
                </div>
                <div className={`${style["field"]} ${style["email"]}`}>
                  <input type="email" placeholder="Email" required />
                </div>
              </div>
              <div className={style.field}>
                <input type="text" placeholder="Subject" required />
              </div>
              <div className={style.field}>
                <input type="text" placeholder="Message" required />
              </div>
              <button type="submit">Send message</button>
            </form>
          </div>
        </div>
        <div className={style.foot3}>
          <h1>Social as</h1>
          <ul className={style.as}>
            <li>
              <Link href="/">
                <FaFacebook />
              </Link>
            </li>
            <li>
              <Link href="/">
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link href="/">
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/ManishBisht777"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </Link>
            </li>
          </ul>
        </div>

        <span>
          Created With
          <span>
            <FaHeart />
          </span>
          <Link href="https://github.com/ManishBisht777">Manish Bisht </Link>
        </span>
      </footer>
    </>
  );
}

export default Footer;
