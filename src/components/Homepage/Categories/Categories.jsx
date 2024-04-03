import React from "react";
import "./categories.css";
import { categoryIcons } from "../../../data";

const Categories = () => {
  return (
    <div className="categories">
      {categoryIcons.map((item) => (
        <div key={item.id} className="categoryBox">
          <img src={item.image} alt="" />
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Categories;
