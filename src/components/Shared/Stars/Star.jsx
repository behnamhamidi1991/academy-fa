import React from "react";
import { IoIosStar } from "react-icons/io";
import "./star.css";

const Star = () => {
  return (
    <div className="starsContainer">
      <IoIosStar className="singleStar" />
      <IoIosStar className="singleStar" />
      <IoIosStar className="singleStar" />
      <IoIosStar className="singleStar" />
      <IoIosStar className="singleStar" />
    </div>
  );
};

export default Star;
