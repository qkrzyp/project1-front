import React from "react";
import LayoutC from "../Components/LayoutC";
import { Link } from "react-router-dom";
const classes = require("../Style.module.css");

const OrderSuccess = () => (
  <LayoutC>
    <div className={classes.SignupSuccessBack}>
      <div className={classes.SignupSuccess}>
        <h3>주문해 주셔서 감사합니다.</h3>
        <p>결제가 완료되었습니다.</p>
        <Link to="/products">다른상품 보러가기</Link>
      </div>
    </div>
  </LayoutC>
);

export default OrderSuccess;
