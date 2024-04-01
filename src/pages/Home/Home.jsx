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
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import "./home.css";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="TEST">
      <div className="homeTest">
        <div className="imageWrapper">
          <img src={image1} width={600} alt="image" className="homeImage" />
          <div className="homeContent">
            <h2>دوره آموزش باریستا</h2>
            <p>در فضایی گرم و صمیمی تجربه کنید!</p>
            <div className="iconTestcontainer">
              <li className="testHover">
                <CiHeart className="iconic" />
              </li>
              <IoLogoWhatsapp className="iconic" />
              <AiFillInstagram className="iconic" />
            </div>
          </div>
        </div>
        <div className="imageWrapper">
          <img src={image2} alt="image" className="homeImage" />

          <div className="homeContent">
            <h2>دوره آموزش باریستا</h2>
            <p>در فضایی گرم و صمیمی تجربه کنید!</p>
          </div>
        </div>
        <div className="imageWrapper">
          <img src={image3} alt="image" />

          {/* <div className="homeContent">
            <h2>دوره آموزش باریستا</h2>
            <p>در فضایی گرم و صمیمی تجربه کنید!</p>
          </div> */}
        </div>
        <div className="imageWrapper">
          <img src={image4} alt="image" className="homeImage" />

          {/* <div className="homeContent">
            <h2>دوره آموزش باریستا</h2>
            <p>در فضایی گرم و صمیمی تجربه کنید!</p>
          </div> */}
        </div>
        <div className="imageWrapper">
          <img src={image5} alt="image" className="homeImage" />

          {/* <div className="homeContent">
            <h2>دوره آموزش باریستا</h2>
            <p>در فضایی گرم و صمیمی تجربه کنید!</p>
          </div> */}
        </div>
        <div className="imageWrapper">
          <img src={image6} alt="image" className="homeImage" />

          {/* <div className="homeContent">
            <h2>دوره آموزش باریستا</h2>
            <p>در فضایی گرم و صمیمی تجربه کنید!</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
