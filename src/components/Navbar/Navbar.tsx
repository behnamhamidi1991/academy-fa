"use client";
import Link from "next/link";
import React from "react";
import "./navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const toggleMenu = useSelector((state) => state.menu.value);

  return (
    <div className={toggleMenu ? "navbar" : "navbar hideMenu"}>
      <ul className="navLinks">
        <li>
          <Link href="/" className="navLink">
            صفحه اصلی
          </Link>
        </li>
        <li>
          <Link href="/" className="navLink">
            دسته بندی
          </Link>
        </li>
        <li>
          <Link href="/" className="navLink">
            وبلاگ
          </Link>
        </li>
        <li>
          <Link href="/" className="navLink">
            درباره ما
          </Link>
        </li>
        <li>
          <Link href="/" className="navLink">
            تماس با ما
          </Link>
        </li>
        <li>
          <Link href="/" className="navLink">
            همکاری با ما
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
