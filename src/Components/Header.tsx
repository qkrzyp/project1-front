import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import SideMenu from "./SideMenu";
import useAuth from "../Hooks/useAuth";
const classes = require("../Style.module.css");

const Header = () => {
  const { onAuthCheck, authAdmin } = useAuth();

  useEffect(() => {
    onAuthCheck();
  }, [onAuthCheck]);

  const menuMouseOver = () => {
    (document.querySelector("#drop")! as HTMLElement).style.display = "block";
  };
  const menuMouseOut = () => {
    (document.querySelector("#drop")! as HTMLElement).style.display = "none";
  };

  return (
    <header className={classes.Header}>
      <div className={classes.Logo}>
        <Link to="/">The Plant Shop</Link>
      </div>
      <SideMenu id="drop" />
      <ul className={classes.MenuUl}>
        <li
          className={classes.MenuLiSide}
          id="menu"
          onMouseOver={menuMouseOver}
          onMouseOut={menuMouseOut}
        >
          <NavLink activeClassName={classes.Active} to="/products" exact>
            전체 상품
          </NavLink>
        </li>

        <li>
          <NavLink to="/cart" activeClassName={classes.Active}>
            장바구니
          </NavLink>
        </li>
        {onAuthCheck() && authAdmin && (
          <li>
            <NavLink to="/admin" activeClassName={classes.Active}>
              관리
            </NavLink>
          </li>
        )}
        {onAuthCheck() && (
          <>
            <li>
              <NavLink to="/profile" activeClassName={classes.Active}>
                내정보
              </NavLink>
            </li>
            <li>
              <NavLink to="/logout" activeClassName={classes.Active}>
                로그아웃
              </NavLink>
            </li>
          </>
        )}
        {!onAuthCheck() && (
          <>
            <li>
              <NavLink to="/login" activeClassName={classes.Active}>
                로그인
              </NavLink>
            </li>
            <li>
              <NavLink to="/signup" activeClassName={classes.Active}>
                회원가입
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};

export default Header;
