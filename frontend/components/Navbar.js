import React from "react";
import Link from "next/link";

import styles from "../styles/navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navtitle}>Portfolio</div>
      <div className={styles.navlinks}>
        <ul>
          <Link href="/Home">
            <a>Home</a>
          </Link>
          <Link href="/TopProject">
            <a>Projects</a>
          </Link>
          <Link href="/">
            <a>Tools</a>
          </Link>
          <Link href="/">
            <a>Work Experience</a>
          </Link>
        </ul>
      </div>
      <div className={styles.div3}>
        <button className={styles.stylebtn}>Hire me</button>
      </div>
    </div>
  );
};

export default Navbar;
