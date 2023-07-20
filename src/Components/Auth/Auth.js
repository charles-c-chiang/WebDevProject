import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { checkUser } from "./AuthService";
import stashlogo from '../../Assets/stashlogo.png';

const AuthModule = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (checkUser()) {
      navigate("/home");
    }
  }, [navigate]);

  return (
    <div>
      <br />
      <br />
      <br />
      <div className = "text-center">
        <img src={stashlogo} alt="Logo" className="rounded" />
      </div>
      <br />
      <div class="text-center">
        <h1> Welcome to Stash! Register or login below.</h1>
      </div>
      <br />
      <div class = "container-fluid">
        <div class = "row">
          <div class = "col-sm"></div>
          <div class = "col-2"></div>
          <div class = "col">
          <Link to="/auth/register">
            <button type="button" class="btn btn-primary btn-lg" >Register</button>
          </Link>
          </div>

          <div class = "col">
          <Link to="/auth/login">
            <button type="button" class="btn btn-primary btn-lg">Login</button>
          </Link>
          </div>
          <div class = "col"></div>
        </div>
      </div>

    </div>
  );
};

export default AuthModule;
