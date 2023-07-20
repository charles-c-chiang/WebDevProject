import React from "react";
import { Link } from "react-router-dom";
import stashlogo from '../../Assets/stashlogo.png';

const AuthForm = ({ user, isLogin, onChange, onSubmit }) => {
  return (
    <div>
        <div className="container-fluid text-center">
            <img src={stashlogo} alt="Logo" className="w-25 text-center" />
        </div>
      <form onSubmit={onSubmit} autoComplete="off">
      {/* Only shown when registering, not logging in */}
      {!isLogin ? 
      <div>
        <div className="form-group">
          <label>First Name</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="first-name-input"
            value={user.firstName}
            onChange={onChange}
            name="firstName"
            placeholder="first name"
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="last-name-input"
            value={user.lastName}
            onChange={onChange}
            name="lastName"
            required
          />
        </div>{" "}
        </div> : <></>}

        {/* Always shown */}
        <div className="form-group">
          <label>Email</label>
          <br />
          <input
            type="email"
            className="form-control"
            id="email-input"
            value={user.email}
            onChange={onChange}
            name="email"
            required
          />
        </div>{" "}
        <div className="form-group">
          <label>Password</label>
          <br />
          <input
            type="password"
            className="form-control"
            id="password-input"
            value={user.password}
            onChange={onChange}
            name="password"
            min="0"
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary" onSubmit={onSubmit}>
            Submit
          </button>
        </div>
        <div>
        <Link to="/auth">
                <button className="btn btn-primary">Back</button>
            </Link>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;


