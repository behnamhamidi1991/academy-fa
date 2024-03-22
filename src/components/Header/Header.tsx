import "./header.css";
import { FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Image from "next/image";
import Logo from "@/assets/icons/acicon.png";

const Header = () => {
  return (
    <header>
      <div className="headerTop">
        <div className="headerTop-right">
          <div className="headerTop-right-logo">
            <Image src={Logo} width={40} height={40} alt="logo" />
            <p>آکادمی آموزش آنلاین دیپ</p>
          </div>
          <div className="headerTop-right-searchbar">
            <input
              type="text"
              placeholder="دوره مورد نظر خود را جستوجو کنید ..."
            />
          </div>
          div.
        </div>
        <div className="headerTop-left">
          <div className="headerTop-left-user">
            <FaRegUser className="header-user-icon" />
          </div>
          <div className="headerTop-left-cart">
            <FaCartShopping className="header-cart-icon" />
          </div>
        </div>
      </div>
      <div className="headerBottom">
        <ul className="headerNavbar"></ul>
      </div>
    </header>
  );
};

export default Header;
