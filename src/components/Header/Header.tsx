import "./header.css";
import { FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  return (
    <header>
      <div className="headerTop">
        <div className="headerTop-right"></div>
        <div className="headerTop-left"></div>
      </div>
      <div className="headerBottom">
        <ul className="headerNavbar"></ul>
      </div>
    </header>
  );
};

export default Header;
