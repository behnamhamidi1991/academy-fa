import React, { useEffect, useState } from "react";
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

  const [openMenu, setOpenMenu] = useState(false);
  const [openBurger, setOpenBurger] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      // Ensure window is defined (for SSR)
      if (typeof window !== "undefined") {
        const threshold = 30;
        const currentScrollPos = window.pageYOffset;
        const shouldBeSticky = currentScrollPos > threshold;

        if (shouldBeSticky !== isSticky) {
          setIsSticky(shouldBeSticky);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isSticky]);

  const headerClass = isSticky ? "headerWrapper fixed" : "headerWrapper";

  return (
    <div className={headerClass}>
      <header className={theme ? "header dark" : "header light"}>
        <div className="logoAndLinks">
          <Link to="/" className="headerLogo">
            <img src={logo} alt="logo" />
            <p>آکادمی آموزشی دیپ لرن</p>
          </Link>
          <div className="hamburgerContainer">
            <button
              className="hamburgerBtn"
              onClick={() => setOpenBurger(!openBurger)}
            >
              <GiHamburgerMenu className="hamburgerIcon" />
            </button>
          </div>
          <ul
            className={
              openBurger ? "headerLinks showBurgerMenu" : "headerLinks"
            }
          >
            <li className="headerLink">
              <Link to="" className="headerLinkItem">
                صفحه اصلی
              </Link>
            </li>
            <li className="headerLinkMenuLi">
              <button
                className={
                  openMenu
                    ? "headerLinkBtn headerLinkBtnSelected"
                    : "headerLinkBtn"
                }
                onClick={() => setOpenMenu(!openMenu)}
              >
                {openMenu ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                منوی سایت
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
      {openMenu && (
        <div className="megaMenuHeader">
          <Megamenu />
        </div>
      )}
    </div>
  );
};

export default Header;
