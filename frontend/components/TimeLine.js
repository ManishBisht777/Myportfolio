import React from "react";
import {
  Timeline,
  TimelineConnector,
  TimelineSeparator,
  TimelineItem,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";

import { useEffect, useState } from "react";

import { FaReact } from "react-icons/fa";

// import { Event } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

import style from "../styles/timeline.module.css";

const timelines = [
  {
    id: "1",
    date: "14-07-2022",
    name: "CurlCure",
    description: "Web Developer",
  },
  {
    id: "2",
    date: "2020-2023",
    name: "Keshav MahaVidayalaya",
    description: "BSC(H) Computer science",
  },
  {
    id: "3",
    date: "2018-2020",
    name: "Rpvv Yamuna Vihar",
    description: "Senior Secondary PCM - 93.25%",
  },
];
const TimeLine = () => {
  const [data, setdata] = useState("");

  // React.useEffect(() => {
  //   const fetchdata = async () => {
  //     let res = await fetch(
  //       `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/timelines?populate=*`
  //     );
  //     const json = await res.json();
  //     setdata(json);
  //   };

  //   fetchdata();
  // }, []);

  return (
    <div className={style.timeline}>
      <h4 className={style.timelineheading}>Time Line</h4>
      <Timeline position="alternate">
        {timelines.map((item) => (
          <TimelineItem key={item.id}>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="secondary"
            >
              {item.date}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="success">
                <FaReact />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6">{item.name}</Typography>
              <Typography>{item.description}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default TimeLine;
