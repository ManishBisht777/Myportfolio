import React from "react";
import AllProjects from "./AllProjects";
import Landingpage from "./Landingpage";
import Navbar from "./Navbar";
import Skills from "./Skills";
import TimeLine from "./TimeLine";
import TopProjects from "./TopProjects";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Landingpage />
      <TopProjects />
      <TimeLine timelines={[1, 2, 3, 4]} />
      <AllProjects />
      <Skills />
    </>
  );
};

export default Homepage;
