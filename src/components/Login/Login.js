import React, { useState } from "react";
import "./login.scss";

import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = e => {
    const { value, name } = e.target;
    setState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="login">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={state.email}
          label="email"
          required
          handleChange={handleChange}
        />
        <FormInput
          name="password"
          type="password"
          label="password"
          value={state.password}
          handleChange={handleChange}
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default Login;
