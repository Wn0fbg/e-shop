import React, { useState } from "react";
import "./Styles/LoginSignUp.css";

const LoginSignUp = () => {
  const [state, setState] = useState("Sign Up");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log("Login", formData);

    let responseData;
    await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        responseData = data;
      });

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  const signup = async () => {
    console.log("Sign Up", formData);

    let responseData;
    await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        responseData = data;
      });

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  return (
    // <div className="login-sign-up">
    //   <div className="login-sign-up-container">
    //     <h1>Sign Up</h1>
    //     <div className="login-sign-up-fields">
    //       <input type="text" placeholder="Ivan" />
    //       <input type="email" placeholder="example@mail.com" />
    //       <input type="password" placeholder="Your password" />
    //     </div>
    //     <button>Continue</button>
    //     <p className="login-sign-up-login">
    //       Already have an account? <span>Login here</span>
    //       <div className="login-sign-up-agree">
    //         <input type="checkbox" name="" id="" />
    //         <p>By continuing, i agree to the terms of use & privacy policy.</p>
    //       </div>
    //     </p>
    //   </div>
    // </div>
    <div className="login-sign-up">
      <div className="login-sign-up-container">
        <h1>{state}</h1>
        <div className="login-sign-up-fields">
          {state === "Sign Up" ? (
            <input
              name="username"
              value={formData.username}
              onChange={changeHandler}
              type="text"
              placeholder="Ivan"
            />
          ) : (
            <></>
          )}
          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder="example@mail.com"
          />
          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder="Your password"
          />
        </div>
        <button
          onClick={() => {
            state === "Login" ? login() : signup();
          }}
        >
          Continue
        </button>
        {state === "Sign Up" ? (
          <p className="login-sign-up-login">
            Already have an account?{" "}
            <span onClick={() => setState("Login")}>Login here</span>
            <div className="login-sign-up-agree">
              <input type="checkbox" name="" id="" />
              <p>
                By continuing, i agree to the terms of use & privacy policy.
              </p>
            </div>
          </p>
        ) : (
          <p className="login-sign-up-login">
            Create an account?{" "}
            <span onClick={() => setState("Sign Up")}>Click here</span>
            <div className="login-sign-up-agree">
              <input type="checkbox" name="" id="" />
              <p>
                By continuing, i agree to the terms of use & privacy policy.
              </p>
            </div>
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginSignUp;
