import { useState } from "react";
import React from "react";

import TopProjectCard from "./TopProjectCard";

import styles from "../styles/topprojects.module.css";

const topproject = [
  {
    id: "01",
    image: "https://picsum.photos/220/250",
    name: "project 1",
  },
  {
    id: "02",
    image: "https://picsum.photos/220/250",
    name: "project 2",
  },
  {
    id: "03",
    image: "https://picsum.photos/220/250",
    name: "project 3",
  },
];

const TopProjects = () => {
  const [topprojects, settopprojects] = useState(topproject);
  const [data, setdata] = useState("");

  React.useEffect(() => {
    const fetchdata = async () => {
      let res = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/Topprojects?populate=*`
      );
      const json = await res.json();
      setdata(json);
    };

    fetchdata();
  }, []);

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
        {data &&
          data.data.map((item, index) => {
            return (
              <TopProjectCard
                key={index}
                image={item.attributes.Coverphoto.data.attributes.name}
                name={item.attributes.Name}
                id={item.id}
              />
            );
          })}
      </div>
    </div>
  );
};

export default TopProjects;
