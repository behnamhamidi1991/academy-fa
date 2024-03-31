import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../features/themeSlice/themeSlice";
import logo from "../../assets/icons/acicon.png";
import sunIcon from "../../assets/icons/sun.svg";
import moonIcon from "../../assets/icons/moon.svg";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import Countdown from "../Shared/Countdown/Countdown";
import { GiHamburgerMenu } from "react-icons/gi";
import Megamenu from "./Megamenu/Megamenu";

const Header = () => {
  const theme = useSelector((state) => state.theme.dark);
  const dispatch = useDispatch();

  return (
    <div className="headerWrapper">
      <header className={theme ? "header dark" : "header light"}>
        <div className="logoAndLinks">
          <Link to="/" className="headerLogo">
            <img src={logo} alt="logo" />
            <p>آکادمی آموزشی دیپ لرن</p>
          </Link>
          <div className="hamburgerContainer">
            <button className="hamburgerBtn">
              <GiHamburgerMenu className="hamburgerIcon" />
            </button>
          </div>
          <ul className="headerLinks">
            <li className="headerLink">
              <Link to="" className="headerLinkItem">
                صفحه اصلی
              </Link>
            </li>
            <li>
              <button className="headerLinkBtn">
                <MdKeyboardArrowDown />
                منوی سایت
              </button>
            </li>
            <li>
              <button className="headerLinkBtn">
                <MdKeyboardArrowDown />
                دسته بندی
              </button>
            </li>
            <li className="headerLink">
              <Link className="headerLinkItem">رویداد ها</Link>
            </li>
            <li className="headerLink">
              <Link className="headerLinkItem">درباره ما</Link>
            </li>
            <li className="headerLink">
              <Link className="headerLinkItem">تماس با ما</Link>
            </li>
          </ul>
        </div>

        <div className="countDownContainer">
          <BiSolidOffer className="offIcon" />
          <Countdown />
        </div>

        <div className="headerIcons">
          <button>
            <FaShoppingCart />
          </button>
          <button>
            <FaUser />
          </button>
          <button onClick={() => dispatch(toggle(!theme))}>
            {theme === true ? (
              <img src={moonIcon} alt="" />
            ) : (
              <img src={sunIcon} alt="" />
            )}
          </button>
        </div>
      </header>
      <Megamenu />
    </div>
  );
};

export default Header;
