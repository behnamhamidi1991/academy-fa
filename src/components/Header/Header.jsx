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

const Header = () => {
  const theme = useSelector((state) => state.theme.dark);
  const dispatch = useDispatch();

  return (
    <div className="headerWrapper">
      <header className={theme ? "header dark" : "header light"}>
        <div className="logoAndLinks">
          <div className="headerLogo">
            <img src={logo} alt="logo" />
            <p>آکادمی آموزشی دیپ لرن</p>
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

        <div className="countDown">
          <div className="counterItem days">
            <span className="countDownNum">00</span>
            <span className="countDownLabel">روز</span>
          </div>
          <div className="counterItem hours">
            <span className="countDownNum">00</span>
            <span className="countDownLabel">ساعت</span>
          </div>
          <div className="counterItem minutes">
            <span className="countDownNum">00</span>
            <span className="countDownLabel">دقیقه</span>
          </div>
          <div className="counterItem seconds">
            <span className="countDownNum">00</span>
            <span className="countDownLabel">ثانیه</span>
          </div>
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
    </div>
  );
};

export default Header;