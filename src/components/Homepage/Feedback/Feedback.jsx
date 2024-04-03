import React from "react";
import "./feedback.css";
import { comments } from "../../../dataUser";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, History } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Feedback = () => {
  return (
    <div className="feedback">
      <div className="feedbackHeader">
        <h2>نظرات کاربران</h2>
        <p>افتخار و اعتبار ما نظرات کاربران سایت در مورد ما می باشد</p>
      </div>

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        history={{
          key: "slide",
        }}
        modules={[Autoplay, Pagination, History]}
        className="swiperFeedback"
      >
        {comments.map((item) => (
          <SwiperSlide key={item.id} className="swiperFeedbackBox">
            <img src={item.image} alt="" />
            <h5>{item.name}</h5>
            <p>{item.feedback}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Feedback;
