import React from "react";

import "./LoginRegister.scss";
import Login from "../Login/Login";
import Register from "../Register/Register";

const LoginRegister = () => {
  return (
    <div className="login-register">
      <Login />
      <Register />
    </div>
  );
};

export default LoginRegister;
