import "./header.css";
import { FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Image from "next/image";
import Logo from "@/assets/icons/acicon.png";
import Link from "next/link";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <header className="header">
      <div className="headerTop">
        {/* Right */}
        <div className="headerTop-right">
          <div className="headerTop-right-logo">
            <Image src={Logo} width={40} height={40} alt="logo" />
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
