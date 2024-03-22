"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

import "./slider.css";
import { FaCode } from "react-icons/fa";
import { SlChemistry } from "react-icons/sl";
import { FaMusic } from "react-icons/fa6";
import { IoLanguageSharp } from "react-icons/io5";
import { PiCookingPotFill } from "react-icons/pi";
import { MdBakeryDining } from "react-icons/md";
import { SiBuymeacoffee } from "react-icons/si";
import { MdOutlineSportsFootball } from "react-icons/md";

const Slider = () => {
  return (
    <div className="iconsectionContainer">
      <Swiper
        className="iconsContainer"
        slidesPerView={7}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          100: {
            slidesPerView: 2,
            spaceBetween: 18,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 18,
          },
          980: {
            slidesPerView: 7,
            spaceBetween: 18,
          },
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide className="iconBox coding">
          <FaCode className="iconBox-icon" />
          <p>برنامه نویسی</p>
        </SwiperSlide>
        <SwiperSlide className="iconBox chemistry">
          <SlChemistry className="iconBox-icon" />
          <p>علوم پایه</p>
        </SwiperSlide>
        <SwiperSlide className="iconBox language">
          <IoLanguageSharp className="iconBox-icon" />
          <p>زبان های خارجه</p>
        </SwiperSlide>
        <SwiperSlide className="iconBox cooking">
          <PiCookingPotFill className="iconBox-icon" />
          <p>آشپزی</p>
        </SwiperSlide>
        <SwiperSlide className="iconBox bakery">
          <MdBakeryDining className="iconBox-icon" />
          <p>شیرینی پزی</p>
        </SwiperSlide>
        <SwiperSlide className="iconBox coffee">
          <SiBuymeacoffee className="iconBox-icon" />
          <p>باریستا</p>
        </SwiperSlide>
        <SwiperSlide className="iconBox music">
          <FaMusic className="iconBox-icon" />
          <p>موسیقی</p>
        </SwiperSlide>
        <SwiperSlide className="iconBox sports">
          <MdOutlineSportsFootball className="iconBox-icon" />
          <p>ورزشی</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
