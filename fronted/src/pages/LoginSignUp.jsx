import React from "react";
import "./Styles/LoginSignUp.css";

const LoginSignUp = () => {
  return (
    <div className="login-sign-up">
      <div className="login-sign-up-container">
        <h1>Sign Up</h1>
        <div className="login-sign-up-fields">
          <input type="text" placeholder="Ivan" />
          <input type="email" placeholder="example@mail.com" />
          <input type="password" placeholder="Your password" />
        </div>
        <button>Continue</button>
        <p className="login-sign-up-login">
          Already have an account? <span>Login here</span>
          <div className="login-sign-up-agree">
            <input type="checkbox" name="" id="" />
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
          </div>
        </p>
      </div>
    </div>
  );
};

export default LoginSignUp;
