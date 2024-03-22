"use client";
import "./offer.css";
import { IoClose } from "react-icons/io5";
import { useState, useEffect } from "react";

const Offer = () => {
  const [offerOpen, setOfferOpen] = useState(true);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "September, 25, 2024";

  const getTime = (deadline: any) => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

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
        <div className="days">
          <span>{days < 10 ? "0" + days : days}</span>{" "}
          <span className="label">روز</span>
        </div>
        <div className="hours">
          <span>{hours < 10 ? "0" + hours : hours}</span>{" "}
          <span className="label"> ساعت</span>
        </div>
        <div className="minutes">
          <span>{minutes < 10 ? "0" + minutes : minutes}</span>{" "}
          <span className="label">دقیقه</span>
        </div>
        <div className="seconds">
          <span>{seconds < 10 ? "0" + seconds : seconds}</span>{" "}
          <span className="label">ثانیه</span>
        </div>
      </div>
    </div>
  );
};

export default Offer;
