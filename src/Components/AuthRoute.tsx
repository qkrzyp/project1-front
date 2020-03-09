import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const AuthRoute = ({ component: Component, ...rest }: any) => {
  const { onAuthCheck } = useAuth();

  useEffect(() => {
    onAuthCheck();
  }, [onAuthCheck]);

  return (
    <Route
      {...rest}
      render={props =>
        onAuthCheck() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default AuthRoute;
