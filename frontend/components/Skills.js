import React from "react";
import style from "../styles/skills.module.css";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div className={style.skillbox}>
      {/* <div className={style.container}>
        <div className={style.left}></div>
        <div className={style.front}></div>
        <div className={style.right}></div>
        <div className={style.back}></div>
      </div> */}
      <h3>Skills</h3>
      <motion.div className={style.skills}>
        <motion.div className={style.skill}>Html</motion.div>
        <motion.div className={style.skill}>Css</motion.div>
        <motion.div className={style.skill}>JavaScript</motion.div>
        <motion.div className={style.skill}>NodeJS</motion.div>
        <motion.div className={style.skill}>Express</motion.div>
        <motion.div className={style.skill}>React</motion.div>
        <motion.div className={style.skill}>Nextjs</motion.div>
        <motion.div className={style.skill}>Mongodb</motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
