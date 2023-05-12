import React, { useContext, useRef, useState } from "react";
import "./ForgotPassword.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import LoginContext from "../../Context/LoginCTX";

function ForgotPassword(props) {
  const loginCTX = useContext(LoginContext);
  const [loader, setLoader] = useState(false);
  /* -------------------------------------------------------------------------- */
  /*                            ON GO BACK BTN CLICK                            */
  /* -------------------------------------------------------------------------- */
  const history = useHistory();
  const onBackBtnClickHandeler = () => {
    history.replace("/login/login");
  };

  /* -------------------------------------------------------------------------- */
  /*                             ON SUBMIT BTN CLICK                            */
  /* -------------------------------------------------------------------------- */
  const emailRef = useRef();
  const onBtnClickHandeler = () => {
    if (!loader) {
      setLoader(true);
      loginCTX.forgotUserPassword(
        emailRef.current.value.trim().toLowerCase(),
        setLoader,
        onBackBtnClickHandeler
      );
    }
  };

  return (
    <div className=" ForgotPassword-div ">
      <h1>FORGOT PASSWORD</h1>
      <input
        required
        ref={emailRef}
        type="email"
        placeholder="Enter Your Registered Email"
        name=""
        id=""
      />
      <button onClick={onBtnClickHandeler}>
        {loader ? "CHECK YOUR MAIL" : "SEND PASSWORD RESET LINK"}
      </button>
      <p onClick={onBackBtnClickHandeler}>GO BACK</p>
      {loader && <h2>SENDING...</h2>}
    </div>
  );
}

export default ForgotPassword;
