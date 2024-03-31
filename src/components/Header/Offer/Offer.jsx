import React, { useState } from "react";
import "./offer.css";
import { GrFormClose } from "react-icons/gr";

const Offer = () => {
  const [offerOpen, setOfferOpen] = useState(true);

  return (
    <div className={offerOpen ? "offer" : "offerClosed"}>
      <button
        className="offerCloseBtn"
        onClick={() => setOfferOpen(!offerOpen)}
      >
        <GrFormClose className="" />
      </button>
      <p>50% تحفیف ویژه به مناسبت ایام نوروز</p>
      <button className="getOfferBtn">دریافت کد تخفیف</button>
    </div>
  );
};

export default Offer;
