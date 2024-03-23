"use client";
import "./allcourses.css";
import { otherCourses } from "@/data";
import Image from "next/image";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const AllCourses = () => {
  // const [category, setCategory] = useState("");

  // const musicCategory = otherCourses.filter(
  //   (item) => item.category === "موسیقی"
  // );

  return (
    <div className="allCourses">
      <div className="allCourses-header">
        <button>برترین ها</button>
        <button>برنامه نویسی</button>
        <button>موسیقی</button>
        <button>آشپزی</button>
        <button>ورزشی</button>
        <button>علوم پایه</button>
      </div>
      <div className="allCourses-main">
        {otherCourses.map((item) => (
          <div key={item.id} className="allCourses-main-box">
            <div className="allCourses-moreinfo"></div>
            <div className="allCourses-image-container">
              <Image
                src={item.image}
                alt={item.title}
                className="allCourse-image"
              />
            </div>
            <div className="allCourses-content">
              <h2>{item.title}</h2>
              <div className="allCourses-info">
                <p className="info-item">قیمت: {item.price}</p>
                <p className="info-item">قیمت با تخفیف: {item.offPrice}</p>
                <p className="info-item">دسته بندی: {item.category}</p>
                <button className="info-item">
                  <FaShoppingCart />
                </button>
                <button className="allCourses-readBtn">بیشتر بخوانید</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
