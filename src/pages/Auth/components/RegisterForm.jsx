import React, { useState } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const RegisterForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/auth/register", values)
      .then((res) => {
        if (res.data.Error == "this email is already exists.") {
          setError("this email is already exists.");
        } else if (res.data.Error == "Email is required") {
          setError("Email is required");
        } else {
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="reg__form">
      <div className="reg__titel">
        <h2 style={{ fontSize: "50px" }}> Register</h2>
      </div>
      <div className="reg__container">
        <form onSubmit={handleSubmit} className="reg__form">
          {error && <h1 className="text-[16px] text-red-600">{error}</h1>}
          <div>
            <h1>Full name:</h1>
            <input
              onChange={(e) => setValues({ ...values, name: e.target.value })}
              type="text"
            />
          </div>
          <div>
            <h1>Email:</h1>
            <input
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              type="email"
            />
          </div>
          <div>
            <h1>Password:</h1>
            <input
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
              type="password"
            />
          </div>
          <div>
            <h1 style={{ textAlign: "center" }}>
              you already have account?{" "}
              <Link to="/login" className="login__link">
                Login
              </Link>
            </h1>
          </div>
          <button type="submit" className="custom__button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
