import React, { useState, useEffect } from "react";
import "./countdown.css";

const Countdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "September, 25, 2024";

  const getTime = () => {
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
    <>
      <div className="counterItem days">
        <span className="countDownNum">{days < 10 ? "0" + days : days}</span>
        <span className="countDownLabel">روز</span>
      </div>
      <div className="counterItem hours">
        <span className="countDownNum">{hours < 10 ? "0" + hours : hours}</span>
        <span className="countDownLabel">ساعت</span>
      </div>
      <div className="counterItem minutes">
        <span className="countDownNum">
          {minutes < 10 ? "0" + minutes : minutes}
        </span>
        <span className="countDownLabel">دقیقه</span>
      </div>
      <div className="counterItem seconds">
        <span className="countDownNum">
          {seconds < 10 ? "0" + seconds : seconds}
        </span>
        <span className="countDownLabel">ثانیه</span>
      </div>
    </>
  );
};

export default Countdown;
