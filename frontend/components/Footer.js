import React from "react";
import style from "../styles/footer.module.css";

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
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/products">All Products</a>
              </li>
              <li>
                <a href="/cart">Cart</a>
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
              <a href="/">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="/">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="/">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ManishBisht777"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>

        <span>
          Created With
          <span>
            <FaHeart />
          </span>
          <a href="https://github.com/ManishBisht777">Manish Bisht </a>
        </span>
      </footer>
    </>
  );
}

export default Footer;
