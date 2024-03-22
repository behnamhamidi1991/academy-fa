import React from "react";
import { courses } from "@/data";
import Image from "next/image";
import "./courses.css";
import ReadBtn from "@/components/shared/ReadBtn/Button";
import { FaShoppingCart } from "react-icons/fa";

const Courses = () => {
  return (
    <div className="courses-section">
      <div className="courses-section-header">
        <h2>دوره های آموزشی برنامه نویسی</h2>
      </div>

      <div className="courses-section-content">
        {courses.map((item) => (
          <div key={item.id} className="courseBox">
            <div className="courseBox-image-container">
              <Image
                src={item.image}
                alt={item.title}
                className="courseImage"
              />
            </div>
            <div className="courseBox-details">
              <h3>{item.title}</h3>
              <p>{item.content.substring(0, 299)} ...</p>
              <div className="priceCategory">
                <span className="price">{item.price}</span>
                <span className="offPrice">{item.offPrice}</span>
                <span className="category">{item.category}</span>
              </div>
              <div className="courseBox-btnContainer">
                <ReadBtn>بیشتر بخوانید</ReadBtn>
                <button className="cartBtn">
                  <FaShoppingCart />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
