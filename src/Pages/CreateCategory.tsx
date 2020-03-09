import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { RouteComponentProps } from "react-router-dom";
import LayoutB from "../Components/LayoutB";
import { errorMessage } from "../Components/Error";
import { createCategory, getCategory, editCategory } from "../api";
import { Redirect } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
const classes = require("../Style.module.css");

interface CategoryProps extends RouteComponentProps<any> {}

const CreateCategory = ({ match }: CategoryProps) => {
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const { authToken } = useAuth();
  const cateogryId = match.params.categoryId;

  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  useEffect(() => {
    if (cateogryId) {
      getCategory(cateogryId).then(result => {
        setName(result.name);
      });
    }
  }, [cateogryId]);

  const formSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (cateogryId) {
      editCategory(authToken, { name }, cateogryId).then(result => {
        if (result.error) {
          setError(result.error[0].msg);
        } else {
          setSuccess(true);
        }
      });
    } else {
      createCategory(authToken, { name }).then(result => {
        if (result.error) {
          setError(result.error[0].msg);
        } else {
          setSuccess(true);
        }
      });
    }
  };

  return (
    <LayoutB title="카테고리 생성">
      {success && <Redirect to="/admin/categories" />}
      <div className={classes.CreateProduct}>
        <h3>카테고리 상세정보</h3>
        {errorMessage(error)}
        <form className={classes.InfoForm} onSubmit={formSubmit}>
          <div>
            <label>카테고리명</label>
            <input
              type="text"
              className={classes.InfoInput}
              onChange={inputChangeHandler}
              value={name}
            />
          </div>
          <button className={classes.InfoFormBtn}>생성하기</button>
        </form>
      </div>
    </LayoutB>
  );
};

export default CreateCategory;
