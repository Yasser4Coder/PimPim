import React from "react";
import { Navbar } from "../../components";
import LoginForm from "./components/LoginForm";

const Login = () => {
  return (
    <div className="reg__page">
      <Navbar />
      <LoginForm />
    </div>
  );
};

export default Login;
