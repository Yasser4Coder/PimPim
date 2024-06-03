import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="reg__form">
      <div className="reg__titel">
        <h2 style={{ fontSize: "50px" }}>Login</h2>
      </div>
      <div className="reg__container">
        <form className="reg__form">
          <div>
            <h1>Email:</h1>
            <input type="email" />
          </div>
          <div>
            <h1>Password:</h1>
            <input type="password" />
          </div>
          <div>
            <h1 style={{ textAlign: "center" }}>
              you don't have account?
              <Link to="/register" className="login__link">
                register
              </Link>
            </h1>
          </div>
          <button type="button" className="custom__button">
            login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
