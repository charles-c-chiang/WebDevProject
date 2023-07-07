import React, { useEffect, useState } from "react";
import { createUser, checkUser } from "./AuthService";
import AuthForm from "./AuthForm";
import { useNavigate } from "react-router-dom";

const AuthRegister = () => {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const [add, setAdd] = useState(false);

  //redirects authorized users to home page instead of /auth page

  useEffect(() => {
    if (checkUser()) {
      alert("You are already logged in");
      navigate("/home");
    }
  }, [navigate]);

  useEffect(() => {
    if (newUser && add) {
      createUser(newUser).then((userCreated) => {
        if (userCreated) {
          alert(`${userCreated.get("firstName")}, you successfully registered!`);
        }
        if (checkUser()) {
          alert("You have been logged in");
          navigate("/home");
        }
        setAdd(false);
      });
    }
  }, [newUser, add, navigate]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setAdd(true);
  };

  return (
    <div>
      <AuthForm
        user={newUser}
        onChange={onChangeHandler}
        onSubmit={onSubmitHandler}
      />
    </div>
  );
};

export default AuthRegister;
