import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import LayoutB from "../Components/LayoutB";
import { Redirect } from "react-router-dom";
import Loader from "../Components/Loader";
import { errorMessage } from "../Components/Error";
import useAuth from "../Hooks/useAuth";
import useCart from "../Hooks/useCart";
const classes = require("../Style.module.css");

const Login = () => {
  const [values, setValues] = useState<{ email: string; password: string }>({
    email: "test@test.com",
    password: "12345"
  });
  const {
    onAuthLogin,
    authError,
    authLoading,
    authSuccess,
    onAuthRedirect,
    authUserRedirect
  } = useAuth();
  const { order } = useCart();

  const inputChangeHandler = (
    event: ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    setValues({ ...values, [key]: event.target.value });
  };

  const formSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAuthLogin({ email: values.email, password: values.password });
  };

  useEffect(() => {
    if (!order && authUserRedirect === "/order") {
      onAuthRedirect("/");
    }
  }, [onAuthRedirect, order, authUserRedirect]);

  return (
    <LayoutB title="로그인">
      {authSuccess && <Redirect to={authUserRedirect} />}
      {authLoading ? (
        <Loader className={classes.LoginLoader} />
      ) : (
        <form onSubmit={formSubmit} className={classes.Login}>
          <div>
            <label>이메일</label>
            <input
              onChange={event => inputChangeHandler(event, "email")}
              type="email"
              className={classes.FormInput}
              value={values.email}
              autoFocus
            />
          </div>
          <div>
            <label>비밀번호</label>
            <input
              onChange={event => inputChangeHandler(event, "password")}
              type="password"
              className={classes.FormInput}
              value={values.password}
            />
          </div>
          {errorMessage(authError)}
          <button className={classes.FormBtn}>로그인</button>
        </form>
      )}
    </LayoutB>
  );
};

export default Login;
