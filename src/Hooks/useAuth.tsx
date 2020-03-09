import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../index";
import {
  authCheck,
  authEdit,
  authEditRedirect,
  authLogin,
  authLogout,
  authRedirect,
  authSignup
} from "../store/actions";
import { useCallback } from "react";

const useAuth = () => {
  const authId = useSelector((state: RootState) => state.auth.user._id);
  const authAdmin = useSelector((state: RootState) => state.auth.user.admin);
  const authEmail = useSelector((state: RootState) => state.auth.user.email);
  const authName = useSelector((state: RootState) => state.auth.user.name);
  const authPhone = useSelector((state: RootState) => state.auth.user.phone);
  const authError = useSelector((state: RootState) => state.auth.error);
  const authLoading = useSelector((state: RootState) => state.auth.loading);
  const authParam = useSelector((state: RootState) => state.auth.param);
  const authUserRedirect = useSelector(
    (state: RootState) => state.auth.redirect
  );
  const authSuccess = useSelector((state: RootState) => state.auth.success);
  const authToken = useSelector((state: RootState) => state.auth.token);
  const authUserEdit = useSelector((state: RootState) => state.auth.edit);

  const dispatch = useDispatch();
  const onAuthCheck = useCallback(() => dispatch(authCheck()), [dispatch]);
  const onAuthEdit = (
    token: string | null,
    userData: { name: string; email: string; phone: string }
  ) => dispatch(authEdit(token, userData));
  const onAuthEditRedirect = useCallback(() => dispatch(authEditRedirect()), [
    dispatch
  ]);
  const onAuthLogin = (data: { email: string; password: string }) =>
    dispatch(authLogin(data));
  const onAuthRedirect = (redirect: string) => dispatch(authRedirect(redirect));
  const onAuthSignup = (data: {
    name: string;
    password: string;
    confirmPassword: string;
    email: string;
    phone: string;
  }) => dispatch(authSignup(data));
  const onAuthLogout = useCallback(() => dispatch(authLogout()), [dispatch]);

  return {
    authId,
    authAdmin,
    authName,
    authEmail,
    authPhone,
    authError,
    authLoading,
    authParam,
    authUserRedirect,
    authSuccess,
    authToken,
    authUserEdit,
    onAuthCheck,
    onAuthEdit,
    onAuthEditRedirect,
    onAuthLogin,
    onAuthRedirect,
    onAuthSignup,
    onAuthLogout
  };
};

export default useAuth;
