import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Logout = () => {
  const { onAuthLogout } = useAuth();

  useEffect(() => {
    onAuthLogout();
  }, [onAuthLogout]);

  return <Redirect to="/" />;
};

export default Logout;
