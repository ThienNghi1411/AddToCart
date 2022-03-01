import React from "react";

const RegisterForm = (props) => {
  return (
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
          <span className="switch-action" onClick={props.switchForm}>
            Login here
          </span>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
