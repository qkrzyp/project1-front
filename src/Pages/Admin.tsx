import React from "react";
import LayoutB from "../Components/LayoutB";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
const classes = require("../Style.module.css");

const Admin = () => {
  const { authName } = useAuth();

  return (
    <LayoutB title={`관리자 ${authName}님의 관리페이지`}>
      <div className={classes.Admin}>
        <h3>관리</h3>
        <ul>
          <li>
            <Link to="/admin/create-product"> > 상품 생성하기 </Link>
          </li>
          <li>
            <Link to="/admin/products"> > 상품 수정하기 </Link>
          </li>
          <li>
            <Link to="/admin/create-category"> > 카테고리 생성하기 </Link>
          </li>
          <li>
            <Link to="/admin/categories"> > 카테고리 수정하기</Link>
          </li>
          <li>
            <Link to="/admin/users"> > 전체 회원 관리</Link>
          </li>
          <li>
            <Link to="/admin/orders"> > 전체 주문 관리 </Link>
          </li>
        </ul>
      </div>
    </LayoutB>
  );
};

export default Admin;
