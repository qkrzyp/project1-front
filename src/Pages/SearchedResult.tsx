import React, { useEffect } from "react";
import LayoutC from "../Components/LayoutC";
import Items from "../Components/Items";
import useSearch from "../Hooks/useSearch";
const classes = require("../Style.module.css");

const SearchedResult = () => {
  const { searchResults, onSearchRedirect } = useSearch();

  useEffect(() => {
    onSearchRedirect();
  }, [onSearchRedirect]);

  const noResult = () => {
    if (searchResults.length < 1) {
      return <p className={classes.noResult}>검색 결과가 존재하지 않습니다.</p>;
    }
  };

  return (
    <LayoutC>
      <div className={classes.SearchedResult}>
        <h3>검색 결과</h3>
        {noResult()}
        <Items products={searchResults} />
      </div>
    </LayoutC>
  );
};

export default SearchedResult;
