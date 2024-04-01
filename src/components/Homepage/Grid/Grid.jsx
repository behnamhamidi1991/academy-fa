import React from "react";
import "./grid.css";
import { courses } from "../../../data";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";

const Grid = () => {
  const selectedIds = [19, 3, 14, 20, 6, 9];
  const filteredCourses = courses
    .filter((item) => selectedIds.includes(Number(item.id)))
    .sort(
      (a, b) =>
        selectedIds.indexOf(Number(a.id)) - selectedIds.indexOf(Number(b.id))
    );

  return (
    <div className="gridHomepage">
      <div className="gridHomepage-header"></div>

      <div className="gridHomepage-container">
        {filteredCourses.map((item) => (
          <div key={item.id} className="gridHomepage-box">
            <img src={item.image} alt="" />
            <div className="gridHomepage-content">
              <h2>{item.title}</h2>
              <p>{item.content.substring(0, 70)} ...</p>
              <Link to="/" className="gridHomepage-ReadBtn">
                جزئیات بیشتر
              </Link>
              <div className="gridHomepage-iconContainer">
                <IoIosShareAlt className="gridHomepage-icon" />
                <CiBookmark className="gridHomepage-icon" />
                <CiHeart className="gridHomepage-icon" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
