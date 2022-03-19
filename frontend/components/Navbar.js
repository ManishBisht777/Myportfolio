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
          <button className={styles.stylebtn}>Hire me</button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
