import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const AdminRoute = ({ component: Component, ...rest }: any) => {
  const { onAuthCheck, authAdmin } = useAuth();

  useEffect(() => {
    onAuthCheck();
  }, [onAuthCheck]);

  return (
    <Route
      {...rest}
      render={props =>
        onAuthCheck() && authAdmin ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default AdminRoute;
