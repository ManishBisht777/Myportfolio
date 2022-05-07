import React from "react";
import AllProjects from "../components/AllProjects";
import Landingpage from "../components/Landingpage";
import Skills from "../components/Skills";
import TimeLine from "../components/TimeLine";
import TopProjects from "../components/TopProjects";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      <Landingpage />
      <TopProjects />
      <TimeLine timelines={[1, 2, 3, 4]} />
      <AllProjects />
      <Skills />
      <Footer />
    </>
  );
};

export default Home;
