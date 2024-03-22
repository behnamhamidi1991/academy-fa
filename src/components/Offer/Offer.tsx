"use client";
import "./offer.css";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Offer = () => {
  const [offerOpen, setOfferOpen] = useState(true);

  return (
    <div className={offerOpen ? "offer" : "offerClosed"}>
      <button
        className="offerCloseBtn"
        onClick={() => setOfferOpen(!offerOpen)}
      >
        <IoClose />
      </button>
      <p className="offText">
        50% خفیف ویژه به مناسبت ایام نوروز روی تمامی دوره های سایت
      </p>
      <div className="offCountdown">
        <span className="offCountdown-days">00</span>:
        <span className="offCountdown-hours">00</span>:
        <span className="offCountdown-minutes">00</span>:
        <span className="offCountdown-seconds">00</span>
      </div>
    </div>
  );
};

export default Offer;
