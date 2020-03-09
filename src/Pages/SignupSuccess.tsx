import React from "react";
import { Link } from "react-router-dom";
import LayoutC from "../Components/LayoutC";
const classes = require("../Style.module.css");

const SignupSuccess = () => (
  <LayoutC>
    <div className={classes.SignupSuccessBack}>
      <div className={classes.SignupSuccess}>
        <h3>가입을 축하합니다!</h3>
        <p>회원가입이 완료되었습니다.</p>
        <Link to="/login">로그인하러 가기</Link>
      </div>
    </div>
  </LayoutC>
);

export default SignupSuccess;
