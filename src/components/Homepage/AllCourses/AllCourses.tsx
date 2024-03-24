"use client";
import "./allcourses.css";
import { otherCourses } from "@/data";
import Image from "next/image";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "@/features/cartSlice";

const AllCourses = () => {
  const [category, setCategory] = useState("all");

  const dispatch = useDispatch();

  const filterMusic = otherCourses.filter((item) => item.category === "موسیقی");
  const filterLang = otherCourses.filter((item) => item.category === "زبان");
  const filterCooking = otherCourses.filter(
    (item) => item.category === "غذا و نوشیدنی"
  );
  const filterDev = otherCourses.filter(
    (item) => item.category === "برنامه نویسی"
  );
  const filterScience = otherCourses.filter((item) => item.category === "پایه");

  const handleAddItem = (id: string) => {
    dispatch(addToCart(id));
  };

  return (
    <div className="allCourses">
      <div className="allCourses-header">
        <button onClick={() => setCategory("all")}>برترین ها</button>
        <button onClick={() => setCategory("dev")}>برنامه نویسی</button>
        <button onClick={() => setCategory("music")}>موسیقی</button>
        <button onClick={() => setCategory("cooking")}>آشپزی</button>
        <button onClick={() => setCategory("lang")}>زبان</button>
        <button onClick={() => setCategory("science")}>علوم پایه</button>
      </div>
      <div className="allCourses-main">
        {category === "music"
          ? filterMusic.map((item) => (
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
                    <button
                      className="info-item"
                      onClick={() => handleAddItem(item.id)}
                    >
                      <FaShoppingCart />
                    </button>
                    <button className="allCourses-readBtn">
                      بیشتر بخوانید
                    </button>
                  </div>
                </div>
              </div>
            ))
          : category === "dev"
          ? filterDev.map((item) => (
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
                    <button className="allCourses-readBtn">
                      بیشتر بخوانید
                    </button>
                  </div>
                </div>
              </div>
            ))
          : category === "cooking"
          ? filterCooking.map((item) => (
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
                    <button className="allCourses-readBtn">
                      بیشتر بخوانید
                    </button>
                  </div>
                </div>
              </div>
            ))
          : category === "lang"
          ? filterLang.map((item) => (
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
                    <button className="allCourses-readBtn">
                      بیشتر بخوانید
                    </button>
                  </div>
                </div>
              </div>
            ))
          : category === "science"
          ? filterScience.map((item) => (
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
                    <button className="allCourses-readBtn">
                      بیشتر بخوانید
                    </button>
                  </div>
                </div>
              </div>
            ))
          : otherCourses.map((item) => (
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
                    <button className="allCourses-readBtn">
                      بیشتر بخوانید
                    </button>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default AllCourses;
