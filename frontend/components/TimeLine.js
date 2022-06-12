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
    date: "Who Knows",
    name: "Google",
    description: "SDE",
  },
  {
    date: "2020-2023",
    name: "Keshav MahaVidayalaya",
    description: "BSC(H) Computer science",
  },
  {
    date: "2018-2020",
    name: "Rpvv Yamuna Vihar",
    description: "Senior Secondary PCM - 93.25%",
  },
];
const TimeLine = () => {
  const [data, setdata] = useState("");

  React.useEffect(() => {
    const fetchdata = async () => {
      let headers = {
        Authorization:
          "Bearer 23d0e366c6479ab7e52a182aacea18d843c4495b8ef1b29011e83e632cc547ad3ee1d2dd3d522a96e2bf35e64a0fe80694238344ab3846479abc1a57856090a35f393765ad1e240776a994fddebe095b393f5bad510c514be6c11d70d91c95abdc84882cf81c3d1878d1f61c30d60e5a46abdc6ed2ee6172ac2b19b9999ee22f",
      };
      let res = await fetch("http://localhost:1337/api/timelines?populate=*", {
        headers: headers,
      });

      const json = await res.json();
      setdata(json);
    };

    fetchdata();
  }, []);

  return (
    <div className={style.timeline}>
      <h4 className={style.timelineheading}>Time Line</h4>
      <Timeline position="alternate">
        {}
        {data &&
          data.data.map((item) => (
            <TimelineItem key={item.id}>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
                color="secondary"
              >
                {item.attributes.Startdate}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="success">
                  <FaReact />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6">{item.attributes.title}</Typography>
                <Typography>{item.attributes.Role}</Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
      </Timeline>
    </div>
  );
};

export default TimeLine;
