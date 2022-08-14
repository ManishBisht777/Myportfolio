import React, { useEffect, useState } from "react";
import AllProjects from "../components/AllProjects";
import Landingpage from "../components/Landingpage";
import Skills from "../components/Skills";
import TimeLine from "../components/TimeLine";
import TopProjects from "../components/TopProjects";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
const Home = () => {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setloading(false);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Landingpage />
          <TopProjects />
          <TimeLine />
          <AllProjects />
          <Skills />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
