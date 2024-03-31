import React from "react";
import "./megamnue.css";
import { megaMenu } from "./data";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Megamenu = () => {
  const theme = useSelector((state) => state.theme.dark);
  return (
    <div className={theme ? "megaMenu dark" : "megaMenu light"}>
      {megaMenu.map((item) => (
        <div key={item.id} className="megaMenuBox">
          <ul className="megaMenuUl">
            <li className="megaMenuLi">
              <div className="megaMenuIcon">{item.icon}</div>
              <Link to="/" className="megaMenuTitle">
                {item.title}
              </Link>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Megamenu;
