import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { checkUser } from "./AuthService";

const AuthModule = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (checkUser()) {
      navigate("/home");
    }
  }, [navigate]);

  return (
    <div>
      <Link to="/auth/register">
        <button>Register</button>
      </Link>
      <br />
      <Link to="/auth/login">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default AuthModule;
