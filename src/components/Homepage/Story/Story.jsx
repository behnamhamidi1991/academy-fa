import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./story.css";
import { people } from "../../../dataUser";

const Story = () => {
  return (
    <div className="storyContainer">
      <Swiper
        slidesPerView={15}
        spaceBetween={10}
        grabCursor={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        {people.map((item) => (
          <SwiperSlide key={item.id} className="storyBox">
            <img src={item.image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Story;
