import React from "react";
import "./Login.css";
import { useState, useEffect } from "react";
const Login = () => {
  const [action, setAction] = useState("Login");
  const switchForm = () => {
    if (action === "Login") {
      setAction("Register");
      document.getElementsByClassName("imgForm")[0].style.transform =
        "translateX(-400px)";
    } else {
      setAction("Login");
      document.getElementsByClassName("imgForm")[0].style.transform =
        "translateX(0px)";
    }
  };
  useEffect(() => {
    if (action === "Login") {
      document.getElementsByClassName(
        "formSignUp-Register"
      )[0].style.transform = "translateX(0px)";
    } else {
      document.getElementsByClassName(
        "formSignUp-Register"
      )[0].style.transform = "translateX(400px)";
    }
  });
  return (
    <div className="login-page">
      <div className="form-page">
        {action === "Register" && (
          <div className="formSignUp-Register form-register">
            <div className="center-form">
              <div className="title-form">
                Welcome To <br></br>
                <span className="speacial-word">#MDS</span> Store
              </div>
              <div className="title-page">REGISTER</div>
              <div className="inputForm">
                <input
                  type="text"
                  className="input-form input-account"
                  placeholder="Account"
                />
                <input
                  type="text"
                  className="input-form input-password"
                  placeholder="Password"
                />
                <input
                  type="text"
                  className="input-form input-re-password"
                  placeholder="Check Password"
                />
                <input
                  type="text"
                  className="input-form input-email"
                  placeholder="Your Email"
                />
                {/* <input
              type="text"
              className="input-form input-phone"
              placeholder="Your Phone"
            /> */}
              </div>
              <div className="btn-confirm-form">REGISTER</div>
              <div className="switch-form">
                Have Already An Account ?
                <span className="switch-action" onClick={switchForm}>
                  Login here
                </span>
              </div>
            </div>
          </div>
        )}
        {action === "Login" && (
          <div className="formSignUp-Register form-login">
            <div className="center-form">
              <div className="title-form">
                Welcome To <br></br>
                <span className="speacial-word">#MDS</span> Store
              </div>
              <div className="title-page">LOGIN</div>
              <div className="inputForm">
                <input
                  type="text"
                  className="input-form input-account"
                  placeholder="Account"
                />
                <input
                  type="text"
                  className="input-form input-password"
                  placeholder="Password"
                />
              </div>
              <div className="btn-confirm-form">LOGIN</div>
              <div className="switch-form">
                Don't Have An Account Yet ?
                <span className="switch-action" onClick={switchForm}>
                  Create An Account
                </span>
              </div>
            </div>
          </div>
        )}
        <div className="imgForm"></div>
      </div>
    </div>
  );
};

export default Login;
