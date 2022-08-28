import { useState } from "react";
import React from "react";

import TopProjectCard from "./TopProjectCard";

import styles from "../styles/topprojects.module.css";
import Link from "next/link";

const topproject = [
  {
    id: "01",
    link: "getsetbuy.netlify.app/",
    name: "project 1",
    image:
      "https://res.cloudinary.com/drsm0ncyx/image/upload/v1642348420/GetsetBuy/1_tpdxxf.png",
  },
  {
    id: "02",
    image:
      "https://res.cloudinary.com/drsm0ncyx/image/upload/v1660472709/projects/portfolio_dikjzp.png",
    name: "project 2",
    link: "https://manishbishtportfolio.netlify.app/",
  },
  {
    id: "03",
    image:
      "https://res.cloudinary.com/drsm0ncyx/image/upload/v1661678830/projects/notesapp_qboei8.png",
    name: "project 3",
    link: "https://github.com/ManishBisht777/GetyourNotes",
  },
];

const TopProjects = () => {
  // const [topprojects, settopprojects] = useState(topproject);
  // const [data, setdata] = useState("");

  // React.useEffect(() => {
  //   const fetchdata = async () => {
  //     let res = await fetch(
  //       `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/Topprojects?populate=*`
  //     );
  //     const json = await res.json();
  //     setdata(json);
  //   };

  //   fetchdata();
  // }, []);

  return (
    <div className={styles.container} id="project">
      <div className={styles.titlecontainer}>
        <h3 className={styles.heading}>
          Discover <br /> My Best Projects Here
        </h3>
        <p className={styles.description}>
          My Best Projects <span className={styles.span}>Througout</span> the
          Journey of my <br />
          <span className={styles.span}>Web Developement</span>
        </p>
        <button className={styles.discover}>
          <a href="#topproject">Discover</a>
        </button>
      </div>
      <div className={styles.projects} id="topproject">
        {topproject.map((item, index) => {
          return (
            <TopProjectCard
              key={index}
              image={item.image}
              name={item.name}
              id={item.id}
              link={item.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TopProjects;
