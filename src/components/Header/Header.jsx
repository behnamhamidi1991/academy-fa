import React from "react";
import "./header.css";
import logo from "../../assets/icons/acicon.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="headerWrapper">
      <header className="header">
        <div className="logoAndLinks">
          <div className="headerLogo">
            <img src={logo} alt="" />
            <p>آکادمی آموزشی دیپ لرن</p>
          </div>
          <ul className="headerLinks">
            <li className="headerLink">
              <Link to="" className="headerLinkItem">
                صفحه اصلی
              </Link>
            </li>
            <li>
              <button>منوی سایت</button>
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
          <div>00:00:00:00</div>
        </div>

        <div className="headerIcons"></div>
      </header>
    </div>
  );
};

export default Header;
