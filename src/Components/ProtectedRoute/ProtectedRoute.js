import React from "react";
import { useNavigate } from "react-router-dom";
import { checkUser } from "../Auth/AuthService";

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const navigate = useNavigate();

  if (!checkUser()) {
    navigate("/auth");
    return null;
  } else {
    return <Component />;
  }
};

export default ProtectedRoute;
