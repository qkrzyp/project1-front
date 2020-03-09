import * as actionTypes from "../actions/actionTypes";
import { SearchState, SearchAction } from "./reducerTypes";

const initialState: SearchState = {
  searchResults: [],
  loading: false,
  success: false
};

const reducer = (
  state: SearchState = initialState,
  action: SearchAction
): SearchState => {
  switch (action.type) {
    case actionTypes.SEARCH_START:
      return { ...state, loading: true, success: false };
    case actionTypes.SEARCH_SUCCESS:
      return {
        ...state,
        searchResults: action.searchResults,
        loading: false,
        success: true
      };
    case actionTypes.SEARCH_FAIL:
      return { ...state, loading: false, success: false };
    case actionTypes.SEARCH_REDIRECT:
      return { ...state, success: false };
    default:
      return state;
  }
};

export default reducer;
