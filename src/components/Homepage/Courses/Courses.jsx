import React, { useEffect, useState } from "react";
import "./courses.css";
import { courses } from "../../../data";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { IoIosStar } from "react-icons/io";
import Star from "../../Shared/Stars/Star";

const Courses = () => {
  const [dislayedCourses, setDisplayedCourses] = useState([]);

  const [courseCount, setCourseCount] = useState(8);

  useEffect(() => {
    setDisplayedCourses(courses.slice(0, courseCount));
  }, [courseCount]);

  const loadMoreCourses = () => {
    setCourseCount((prevCount) => prevCount + 8);
  };

  return (
    <div className="allCourses">
      <div className="allCoursesHeader">
        <h2>برترین دوره ها</h2>
        <p>برترین دوره ها بر اساس رای و بازخورد کاربران سایت</p>
      </div>

      <div className="allCoursesWrapper">
        <div className="coursesContainer">
          {dislayedCourses.map((item) => (
            <div key={item.id} className="allCourses-courseBox">
              <div className="allCourses-courseBox-imageContainer">
                <img src={item.image} alt={item.title} loading="lazy" />
              </div>
              <div className="allCourses-courseBox-contentWrapper">
                <div className="allCourses-courseBox-content">
                  <h3>{item.title}</h3>
                  <p>{item.content.substring(0, 282)} ...</p>
                </div>
                <div className="allCourses-courseBox-details">
                  <span>قیمت: {item.price.toLocaleString()}</span>
                  <span>قیمت ویژه: {item.offPrice.toLocaleString()}</span>
                  <span>{item.category}</span>
                  <span>
                    <PiStudentFill className="studentIcon" /> {item.numStudent}{" "}
                    دانشجو
                  </span>
                  <span className="starContainer">
                    <Star />
                  </span>
                </div>
                <div className="allCourses-courseBox-btnContainer">
                  <Link to="/" className="allCourses-ReadmoreBtn">
                    بیشتر بخوانید
                  </Link>
                  <button className="allCourses-buyBtn">
                    <FaShoppingCart className="allCourses-buyBtn-icon" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {courseCount < courses.length && (
          <button className="loadMoreBtn" onClick={loadMoreCourses}>
            مشاهده دوره های بیشتر
          </button>
        )}
      </div>
    </div>
  );
};

export default Courses;
