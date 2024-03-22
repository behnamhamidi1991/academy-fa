"use client";
import "./header.css";
import { FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Image from "next/image";
import Logo from "@/assets/icons/acicon.png";
import Navbar from "../Navbar/Navbar";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "@/redux/features/menuSlice";

const Header = () => {
  const menuToggle = useSelector((state) => state.menu.value);
  const dispatch = useDispatch();

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
          <div className="headerTop-left-user">
            <FaRegUser className="header-user-icon" />
          </div>
          <div className="headerTop-left-cart">
            <span className="cartQuantity">1</span>
            <FaCartShopping className="header-cart-icon" />
          </div>
        </div>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
