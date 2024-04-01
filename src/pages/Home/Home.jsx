import React, { useEffect } from "react";
import image1 from "../../assets/images/barista.jpg";
import image2 from "../../assets/images/js.jpg";
import image3 from "../../assets/images/kotlin.jpg";
import image4 from "../../assets/images/sp.jpg";
import image5 from "../../assets/images/guitar.jpg";
import image6 from "../../assets/images/en.jpg";
import { CiHeart } from "react-icons/ci";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import "react-loading-skeleton/dist/skeleton.css";
import "./home.css";
import Story from "../../components/Homepage/Story/Story";
import Grid from "../../components/Homepage/Grid/Grid";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="homepage">
      <Story />
      <Grid />
    </div>
  );
};

export default Home;
