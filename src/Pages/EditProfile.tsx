import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { errorMessage, infoChangeClass } from "../Components/Error";
import LayoutC from "../Components/LayoutC";
import { Redirect } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
const classes = require("../Style.module.css");

const EditProfile = () => {
  const [values, setValues] = useState<{
    name: string;
    email: string;
    phone: string;
  }>({
    name: "",
    email: "",
    phone: ""
  });

  const {
    authName,
    authEmail,
    authPhone,
    authToken,
    authError,
    authParam,
    authUserEdit,
    onAuthEdit
  } = useAuth();

  useEffect(() => {
    setValues({
      ...values,
      name: authName,
      email: authEmail,
      phone: authPhone
    });
  }, []);

  const inputChangeHandler = (
    event: ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    setValues({ ...values, [key]: event.target.value });
  };

  const formSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userData = {
      name: values.name,
      email: values.email,
      phone: values.phone
    };
    onAuthEdit(authToken, userData);
  };

  return (
    <LayoutC>
      {authUserEdit && <Redirect to="/profile" />}
      <div className={classes.EditProfile}>
        <h3>내 정보 수정하기</h3>
        {errorMessage(authError)}
        <form className={classes.InfoForm} onSubmit={formSubmit}>
          <div>
            <label>이름</label>
            <input
              type="text"
              className={infoChangeClass("name", authParam)}
              onChange={event => inputChangeHandler(event, "name")}
              value={values.name}
            />
          </div>
          <div>
            <label>이메일</label>
            <input
              type="text"
              className={infoChangeClass("email", authParam)}
              onChange={event => inputChangeHandler(event, "email")}
              value={values.email}
            />
          </div>
          <div>
            <label>휴대전화</label>
            <input
              type="number"
              className={infoChangeClass("phone", authParam)}
              onChange={event => inputChangeHandler(event, "phone")}
              value={values.phone}
            />
          </div>
          <button className={classes.InfoFormBtn}>수정하기</button>
        </form>
      </div>
    </LayoutC>
  );
};

export default EditProfile;
