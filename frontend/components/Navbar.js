import React from "react";
import Link from "next/link";

import styles from "../styles/navbar.module.css";
import { motion } from "framer";

const Navbar = () => {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0, transition: 0.5 },
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  const logoanimation = {
    scale: { transition: 0.5, y: -10 },
    scaledown: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className={styles.navbar}
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ type: "spring", delay: 1 }}
    >
      <motion.div className={styles.navtitle}>Portfolio</motion.div>
      <div className={styles.navlinks}>
        <motion.ul initial="hidden" animate="show" variants={container}>
          <Link href="/Home">
            <motion.a variants={item}>Home</motion.a>
          </Link>
          <Link href="/TopProject">
            <motion.a variants={item}>Projects</motion.a>
          </Link>
          <motion.a href="/TopProject" variants={item}>
            Tools
          </motion.a>
          <motion.a href="/TopProject" variants={item}>
            WorkExperiece
          </motion.a>
        </motion.ul>
      </div>
      <div className={styles.div3}>
        <button className={styles.stylebtn}>Hire me</button>
      </div>
    </motion.div>
  );
};

export default Navbar;
