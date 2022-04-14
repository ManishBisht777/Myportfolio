import React from "react";
import style from "../styles/landingpage.module.css";
import profile from "../assets/bg6.jpg";
import Image from "next/image";
import { motion } from "framer";

const Landingpage = () => {
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, transition: 1, y: -50 },
  };

  const fade = {
    visible: { opacity: 1 },
    hidden: { opacity: 0, transition: 1 },
  };

  return (
    <div className={style.maindiv}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ delay: 2.5 }}
        className={style.homepage}
      >
        <div className={style.introduction}>Hi There</div>
        <div>
          <h4 className={style.name}>
            I am Man <span>i</span> sh
          </h4>
        </div>
        <h4 className={style.role}>FrontEnd Developer</h4>
        <p className={style.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ea,
          esse minus recusandae repellendus provident est in! Repellat numquam
          consequuntur dolores unde repudiandae tempore quas corporis, quod
          quidem, iusto fugit?
        </p>
        <div className={style.buttonpair}>
          <motion.button
            initial="hidden"
            animate="visible"
            variants={fade}
            transition={{ delay: 3.5 }}
            className={style.explore}
          >
            Explore
          </motion.button>
          <motion.button
            initial="hidden"
            animate="visible"
            variants={fade}
            transition={{ delay: 3.5 }}
            className={style.explore}
          >
            Resume
          </motion.button>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fade}
        transition={{ delay: 4.5 }}
        className={style.profileimagebx}
      >
        <Image src={profile} alt="Image_hu-Mai" />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fade}
        transition={{ delay: 5 }}
        className={style.scrollme}
      >
        <p>scroll me</p>
        <p>scroll me</p>
        <p>scroll me</p>
        <p>scroll me</p>
        <p>scroll me</p>
        <p>scroll me</p>
        <p>scroll me</p>
        <p>scroll me</p>
        <p>scroll me</p>
        <p>scroll me</p>
        <p>scroll me</p>
        <p>scroll me</p>
      </motion.div>
      <motion.div
        className={style.scrollmeto}
        initial="hidden"
        animate="visible"
        variants={fade}
        transition={{ delay: 5.5 }}
      >
        <p>scroll me</p>
        <p>scroll me</p>
        <p>scroll me</p>
        <p>scroll me</p>
        <p>scroll me</p>
        <p>scroll me</p>
        <p>scroll me</p>
        <p>scroll me</p>
        <p>scroll me</p>
        <p>scroll me</p>
        <p>scroll me</p>
        <p>scroll me</p>
      </motion.div>
    </div>
  );
};

export default Landingpage;
