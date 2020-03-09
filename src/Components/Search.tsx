import React, { useState, ChangeEvent, FormEvent } from "react";
import { Redirect } from "react-router-dom";
import useSearch from "../Hooks/useSearch";
const classes = require("../Style.module.css");

const Search = () => {
  const [term, setTerm] = useState("");

  const { onSearching, searchSuccess } = useSearch();

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  const formSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearching({ term });
  };

  return (
    <div className={classes.Search}>
      {searchSuccess && <Redirect to="/search" />}
      <form onSubmit={formSubmit}>
        <button />
        <input
          type="text"
          placeholder="제품명을 검색해주세요."
          onChange={inputChangeHandler}
        />
      </form>
    </div>
  );
};

export default Search;
