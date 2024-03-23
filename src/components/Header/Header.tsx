"use client";
import "./header.css";
import { FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Image from "next/image";
import Logo from "@/assets/icons/acicon.png";
import Navbar from "../Navbar/Navbar";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { toggleMenu } from "@/redux/menuSlice";
import Link from "next/link";
import { useEffect } from "react";

const Header = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);
  const isSticky = () => {
    const header = document.querySelector(".header");
    const scrollTop = window.scrollY;
    scrollTop >= 300
      ? header?.classList.add("is-sticky")
      : header?.classList.remove("is-sticky");
  };

  return (
    <header className="header">
      <button className="hamburger" onClick={() => dispatch(toggleMenu())}>
        <GiHamburgerMenu />
      </button>
      <div className="headerTop">
        {/* Right */}
        <div className="headerTop-right">
          <div className="headerTop-right-logo">
            <Image
              src={Logo}
              width={40}
              height={40}
              alt="logo"
              className="header-logo-image"
            />
            <p>آکادمی آموزش آنلاین دیپ</p>
          </div>
          <div className="headerTop-right-searchbar">
            <form>
              <input
                type="text"
                placeholder="دوره مورد نظر خود را جستوجو کنید ..."
              />
              <button className="headerTop-right-searchbar-btn">جستوجو</button>
            </form>
          </div>
        </div>
        {/* Left */}
        <div className="headerTop-left">
          <Link href="/dashboard" className="headerTop-left-user">
            <FaRegUser className="header-user-icon" />
          </Link>
          <Link href="/cart" className="headerTop-left-cart">
            <span className="cartQuantity">1</span>
            <FaCartShopping className="header-cart-icon" />
          </Link>
        </div>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
