import * as actionTypes from "./actionTypes";
import { search } from "../../api";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../../index";
import { SearchAction, CartItems } from "../reducers/reducerTypes";

export const searchStart = () => {
  return {
    type: actionTypes.SEARCH_START
  };
};

export const searchSuccess = (searchResults: CartItems[]) => {
  return {
    type: actionTypes.SEARCH_SUCCESS,
    searchResults
  };
};

export const searchFail = () => {
  return {
    type: actionTypes.SEARCH_FAIL
  };
};

export const searching = (term: {
  term: string;
}): ThunkAction<void, RootState, null, SearchAction> => {
  return dispatch => {
    dispatch(searchStart());
    search(term).then(result => {
      if (result.error) {
        dispatch(searchFail());
      } else {
        dispatch(searchSuccess(result));
      }
    });
  };
};

export const searchRedirect = () => {
  return {
    type: actionTypes.SEARCH_REDIRECT
  };
};
