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

      <div className="feedbackContainer">
        {comments.map((item) => (
          <div key={item.id} className="swiperFeedbackBox">
            <img src={item.image} alt="" />
            <h5>{item.name}</h5>
            <p>{item.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
