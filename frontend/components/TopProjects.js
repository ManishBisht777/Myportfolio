import { useState } from "react";

import TopProjectCard from "./TopProjectCard";
import p1 from "../assets/1.png";
import p2 from "../assets/2.png";
import p3 from "../assets/5.png";

import styles from "../styles/topprojects.module.css";

const topproject = [
  {
    id: "01",
    image: p1,
    name: "project 1",
  },
  {
    id: "02",
    image: p2,
    name: "project 2",
  },
  {
    id: "03",
    image: p3,
    name: "project 3",
  },
];

const TopProjects = () => {
  const [topprojects, settopprojects] = useState(topproject);

  return (
    <div className={styles.container}>
      <div className={styles.titlecontainer}>
        <h3 className={styles.heading}>
          Discover <br /> My Best Projects Here
        </h3>
        <p className={styles.description}>
          My Best Projects <span className={styles.span}>Througout</span> the
          Journey of my <br />
          <span className={styles.span}>Web Developement</span>
        </p>
        <button className={styles.discover}>Discover</button>
      </div>
      <div className={styles.projects}>
        {topprojects.map((projects, index) => {
          return (
            <TopProjectCard
              key={index}
              image={projects.image}
              name={projects.name}
              id={projects.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TopProjects;
