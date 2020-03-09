import * as actionTypes from "../actions/actionTypes";
import { AuthState, AuthAction } from "./reducerTypes";

const initialState: AuthState = {
  token: null,
  user: {
    _id: "",
    name: "",
    email: "",
    admin: false,
    phone: ""
  },
  error: null,
  loading: false,
  param: [],
  success: false,
  redirect: "/",
  edit: false
};

const reducer = (
  state: AuthState = initialState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return { ...state, loading: true, error: null, success: false };
    case actionTypes.AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.token,
        user: action.user,
        success: true
      };
    case actionTypes.AUTH_LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        success: false
      };
    case actionTypes.AUTH_SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true
      };
    case actionTypes.AUTH_SIGNUP_FAIL:
      let param = [...action.error].map(p => p.param);
      return {
        ...state,
        loading: false,
        error: action.error[0].msg,
        param,
        success: false
      };
    case actionTypes.AUTH_LOGOUT:
      return {
        ...state,
        token: null,
        user: { _id: "", name: "", email: "", admin: false, phone: "" },
        success: false
      };
    case actionTypes.AUTH_REDIRECT:
      return { ...state, redirect: action.redirect };
    case actionTypes.AUTH_EDIT_SUCCESS:
      return { ...state, edit: true };
    case actionTypes.AUTH_EDIT_FAIL:
      return { ...state, edit: false };
    case actionTypes.AUTH_EDIT_REDIRECT:
      return { ...state, edit: false };
    default:
      return state;
  }
};

export default reducer;
