import React, { useEffect } from "react";

import "react-loading-skeleton/dist/skeleton.css";
import "./home.css";
import Story from "../../components/Homepage/Story/Story";
import Grid from "../../components/Homepage/Grid/Grid";
import Courses from "../../components/Homepage/Courses/Courses";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="homepage">
      <Story />
      <Grid />
      <Courses />
    </div>
  );
};

export default Home;
