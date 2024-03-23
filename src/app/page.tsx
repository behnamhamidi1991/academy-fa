import AllCourses from "@/components/Homepage/AllCourses/AllCourses";
import CourseHighlights from "@/components/Homepage/CourseHighlights/CourseHighlights";
import Courses from "@/components/Homepage/Courses/Courses";
import Slider from "@/components/Homepage/Slider/Slider";
import React from "react";

const Home = () => {
  return (
    <main>
      <Slider />
      <Courses />
      <CourseHighlights />
      <AllCourses />
    </main>
  );
};

export default Home;
