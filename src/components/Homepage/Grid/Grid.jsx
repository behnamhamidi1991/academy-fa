import React from "react";
import "./grid.css";
import { courses } from "../../../data";

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
            <div className="gridHomepage-imageContent"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
