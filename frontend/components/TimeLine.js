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

import { amber } from "@mui/material/colors";

// import { Event } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

import style from "../styles/timeline.module.css";

const timelines = [
  {
    date: "12-10-2022",
    name: "Hello 1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the .",
  },
  {
    date: "12-10-2022",
    name: "Hello 2",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the .",
  },
  {
    date: "12-10-2022",
    name: "Hello 3",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the .",
  },
  {
    date: "12-10-2022",
    name: "Hello 4",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the .",
  },
];
const TimeLine = () => {
  return (
    <div className={style.timeline}>
      <h4 className={style.timelineheading}>Meri Timeline</h4>
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
              {/* {item.date.toString().split("T")[0]} */}
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
