import React from "react";
import { Navbar } from "../../components";
import RegisterForm from "./components/RegisterForm";
import "../../App.css";

const Register = () => {
  return (
    <div className="reg__page">
      <Navbar />
      <RegisterForm />
    </div>
  );
};

export default Register;
