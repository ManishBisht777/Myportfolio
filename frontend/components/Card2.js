import React from "react";
import { motion } from "framer-motion";

import style from "../styles/card.module.css";

import bg from "../assets/bg6.jpg";

import Image from "next/image";

const Card2 = () => {
  return (
    <div className={style.card}>
      <div className={style.card_img}>
        <Image src={bg} objectFit="cover" />
      </div>
      <div className={style.card_info}>
        <div className={style.card_name}>
          <p>Ecommerce Website</p>
        </div>
        <div className={style.card_links}>
          <button>
            <Image src={bg} objectFit="cover" />
          </button>
          <button>
            <a href="/">yo</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card2;
