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
  return (
    <div className={style.timeline}>
      <h4 className={style.timelineheading}>Time Line</h4>
      <Timeline position="alternate">
        {timelines.map((item, index) => (
          <TimelineItem key={index}>
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
