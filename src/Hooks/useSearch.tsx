import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../index";
import { searchRedirect, searching } from "../store/actions";
import { useCallback } from "react";

const useSearch = () => {
  const searchResults = useSelector(
    (state: RootState) => state.search.searchResults
  );
  const searchLoading = useSelector((state: RootState) => state.search.loading);
  const searchSuccess = useSelector((state: RootState) => state.search.success);

  const dispatch = useDispatch();
  const onSearchRedirect = useCallback(() => dispatch(searchRedirect()), [
    dispatch
  ]);
  const onSearching = (term: { term: string }) => dispatch(searching(term));

  return {
    searchResults,
    searchLoading,
    searchSuccess,
    onSearchRedirect,
    onSearching
  };
};

export default useSearch;
