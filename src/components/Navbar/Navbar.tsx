import Link from "next/link";
import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
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
