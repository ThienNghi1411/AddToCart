import React from "react";
import "./Login.css";
import { useState, useEffect } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

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
          <RegisterForm switchForm={switchForm}></RegisterForm>
        )}
        {action === "Login" && <LoginForm switchForm={switchForm}></LoginForm>}
        <div className="imgForm"></div>
      </div>
    </div>
  );
};

export default Login;
