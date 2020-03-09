import React from "react";
import { Link } from "react-router-dom";
const classes = require("../Style.module.css");

interface SideMenuProps {
  id: string;
}

const SideMenu = ({ id }: SideMenuProps) => {
  const menuMouseOver = () => {
    (document.querySelector("#drop")! as HTMLElement).style.display = "block";
  };
  const menuMouseOut = () => {
    (document.querySelector("#drop")! as HTMLElement).style.display = "none";
  };

  return (
    <div
      className={classes.SideMenu}
      id={id}
      onMouseOver={menuMouseOver}
      onMouseOut={menuMouseOut}
    >
      <ul>
        <li className={classes.SideMenuPlant}>
          <Link to="/products">
            <span>상품</span>
          </Link>
        </li>

        <li className={classes.SideMenuPlant}>
          <Link to="/products">
            <span>기획전</span>
          </Link>
        </li>

        <li className={classes.SideMenuPlant}>
          <Link to="/products">
            <span>세일</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
