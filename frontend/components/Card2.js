import React from "react";
import style from "../styles/card.module.css";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

const Card2 = () => {
  return (
    <div className={style.card}>
      <div className={style.card_img}>
        <img src="/bg6.jpg" alt="Picture of the author" />
      </div>

      <div className={style.card_info}>
        <div className={style.card_name}>
          <p>Ecommerce Website</p>
        </div>
        <div className={style.card_links}>
          <button>
            <AiFillGithub size={20} />
          </button>
          <button>
            <AiOutlineLink size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card2;
