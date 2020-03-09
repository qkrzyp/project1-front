import React, { useState, ChangeEvent, FormEvent } from "react";
import LayoutB from "../Components/LayoutB";
import { errorMessage, changeClass } from "../Components/Error";
import Loader from "../Components/Loader";
import { Redirect } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
const classes = require("../Style.module.css");

interface SignupValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
}

const Signup = () => {
  const [values, setValues] = useState<SignupValues>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: ""
  });
  const {
    onAuthSignup,
    authError,
    authParam,
    authLoading,
    authSuccess
  } = useAuth();

  const inputChangeHandler = (
    event: ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    setValues({ ...values, [key]: event.target.value });
  };

  const formSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAuthSignup({
      name: values.name,
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword,
      phone: values.phone
    });
  };

  return (
    <LayoutB title="회원가입">
      {authSuccess && <Redirect to="/signup-success" />}
      {authLoading ? (
        <Loader className={classes.SignupLoader} />
      ) : (
        <form onSubmit={formSubmit} className={classes.Signup}>
          <div>
            <label className="text-muted">이름</label>
            <input
              onChange={event => inputChangeHandler(event, "name")}
              type="text"
              className={changeClass("name", authParam)}
              value={values.name}
              autoFocus
            />
          </div>
          <div>
            <label className="text-muted">이메일</label>
            <input
              onChange={event => inputChangeHandler(event, "email")}
              type="email"
              className={changeClass("email", authParam)}
              value={values.email}
            />
          </div>
          <div>
            <label className="text-muted">비밀번호</label>
            <input
              onChange={event => inputChangeHandler(event, "password")}
              type="password"
              className={changeClass("password", authParam)}
              value={values.password}
            />
          </div>
          <div>
            <label className="text-muted">비밀번호 확인</label>
            <input
              onChange={event => inputChangeHandler(event, "confirmPassword")}
              type="password"
              className={changeClass("confirmPassword", authParam)}
              value={values.confirmPassword}
            />
          </div>
          <div>
            <label className="text-muted">휴대전화</label>
            <input
              onChange={event => inputChangeHandler(event, "phone")}
              type="number"
              className={changeClass("phone", authParam)}
              value={values.phone}
            />
          </div>
          {errorMessage(authError)}
          <button className={classes.FormBtn}>회원가입</button>
        </form>
      )}
    </LayoutB>
  );
};

export default Signup;
