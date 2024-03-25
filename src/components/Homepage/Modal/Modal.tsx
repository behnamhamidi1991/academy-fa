"use client";
import React, { useEffect, useState } from "react";
import "./mainmodal.css";
import Image from "next/image";
import eydImage from "@/assets/images/eyd.jpg";
import Link from "next/link";

const Modal = () => {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    // Check if 'modalShown' key exists in localStorage
    const modalShown = sessionStorage.getItem("modalShown");

    if (!modalShown) {
      const timer = setInterval(() => {
        setModal(true);
        sessionStorage.setItem("modalShown", "true");
        clearInterval(timer);
      }, 2000);

      return () => clearInterval(timer);
    }
  }, []);

  useEffect(() => {
    if (modal) {
      // Prevent Scrolling
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [modal]);

  return (
    <div className={modal === false ? "hidden" : "modalWrapper"}>
      <div className="mainModal">
        <button className="closeModal" onClick={() => setModal(false)}>
          بستن
        </button>
        <Image src={eydImage} alt="norooz-image" />
        <h1>تخفیف ویژه نوروز</h1>
        <p>تخفیف 50% به مناسبت ایام نوروز به مدت یک ماه</p>
        <p>
          برای دانشجویان و دانش آموزان تا 60% تخفیف با اراه کارت دانشجویی یا
          گواهی تحصیلی
        </p>
        <Link href="/cart">جهت اطلاع بیشتر کلیک کنید</Link>
      </div>
    </div>
  );
};

export default Modal;
