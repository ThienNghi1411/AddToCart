import React from "react";

const LoginForm = (props) => {
  return (
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
          <span className="switch-action" onClick={props.switchForm}>
            Create An Account
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
