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

// import { Event } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

import style from "../styles/timeline.module.css";

const TimeLine = ({ timelines = [] }) => {
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
              12/12/2003
              {/* {item.date.toString().split("T")[0]} */}
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="success">{/* <Event /> */}</TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6">GetSetBuy</Typography>
              <Typography>Online Ecommerce webiste</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default TimeLine;
