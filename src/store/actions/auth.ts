import * as actionTypes from "./actionTypes";
import { login, signup, editUser } from "../../api";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../../index";
import { AuthAction, User } from "../reducers/reducerTypes";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authLoginSuccess = (token: string, user: User) => {
  return {
    type: actionTypes.AUTH_LOGIN_SUCCESS,
    token,
    user
  };
};

export const authLoginFail = (error: string) => {
  return {
    type: actionTypes.AUTH_LOGIN_FAIL,
    error
  };
};

export const authSignupSuccess = () => {
  return {
    type: actionTypes.AUTH_SIGNUP_SUCCESS
  };
};

export const authSignupFail = (
  error: { value: string; msg: string; param: string }[]
) => {
  return {
    type: actionTypes.AUTH_SIGNUP_FAIL,
    error
  };
};

export const authLogout = () => {
  localStorage.removeItem("data");
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const authLogin = (loginData: {
  email: string;
  password: string;
}): ThunkAction<void, RootState, null, AuthAction> => {
  return dispatch => {
    dispatch(authStart());
    login(loginData).then(result => {
      if (result.error) {
        dispatch(authLoginFail(result.error));
      } else {
        localStorage.setItem("data", JSON.stringify(result));
        dispatch(authLoginSuccess(result.token, result.user));
      }
    });
  };
};

export const authSignup = (signupData: {
  name: string;
  password: string;
  confirmPassword: string;
  email: string;
  phone: string;
}): ThunkAction<void, RootState, null, AuthAction> => {
  return dispatch => {
    dispatch(authStart());
    signup(signupData).then(result => {
      if (result.error) {
        dispatch(authSignupFail(result.error));
      } else {
        dispatch(authSignupSuccess());
      }
    });
  };
};

export const authRedirect = (redirect: string) => {
  return {
    type: actionTypes.AUTH_REDIRECT,
    redirect
  };
};

export const authCheck = (): ThunkAction<void, RootState, null, AuthAction> => {
  return dispatch => {
    const data = JSON.parse(localStorage.getItem("data")!);
    if (data) {
      dispatch(authLoginSuccess(data.token, data.user));
      return data;
    } else {
      dispatch(authLogout());
      return false;
    }
  };
};

export const authEditSuccess = () => {
  return {
    type: actionTypes.AUTH_EDIT_SUCCESS
  };
};

export const authEditFail = () => {
  return {
    type: actionTypes.AUTH_EDIT_FAIL
  };
};

export const authEditRedirect = () => {
  return {
    type: actionTypes.AUTH_EDIT_REDIRECT
  };
};

export const authEdit = (
  token: string | null,
  userData: { name: string; email: string; phone: string }
): ThunkAction<void, RootState, null, AuthAction> => {
  return dispatch => {
    editUser(token, userData).then(result => {
      if (result.error) {
        dispatch(authEditFail());
      } else {
        const data = JSON.parse(localStorage.getItem("data")!);
        const user = {
          ...data.user,
          ...userData
        };
        data.user = user;
        localStorage.setItem("data", JSON.stringify(data));
        dispatch(authEditSuccess());
      }
    });
  };
};
