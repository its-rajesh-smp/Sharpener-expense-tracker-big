import React, { useContext, useRef } from "react";
import "./Login.css";
import LoginContext from "../../Context/LoginCTX";

function Login(props) {
  const loginCTX = useContext(LoginContext);

  const emailInputRef = useRef();
  const passInputRef = useRef();
  const confPassInputRef = useRef();

  /* -------------------------------------------------------------------------- */
  /*                         BTN CLICK LOGIN/CREATE ACC                         */
  /* -------------------------------------------------------------------------- */
  const onBtnClickHandeler = (e) => {
    e.preventDefault();
    const email = emailInputRef.current.value.replaceAll(" ", "");
    const pass = passInputRef.current.value.replaceAll(" ", "");
    const confPass = confPassInputRef.current.value.replaceAll(" ", "");
    if (pass.length < 6) {
      alert("Enter A Password of minimum length  6");
      return;
    }
    if (pass !== confPass) {
      alert("Enter A Correct Confirm Password");
      return;
    }
    const enteredInputData = {
      email: email,
      password: pass,
      returnSecureToken: true,
    };
    loginCTX.loginAuth(enteredInputData);
  };

  return (
    <div className=" Login-div ">
      <h1>SIGN UP</h1>
      <form>
        <input
          ref={emailInputRef}
          required
          type="email"
          placeholder="Email"
          name="Email"
          id="email"
        />
        <input
          ref={passInputRef}
          required
          type="password"
          placeholder="Password"
          name="Password"
          id="password"
        />
        <input
          ref={confPassInputRef}
          required
          type="password"
          placeholder="Confirm Password"
          name="Confrim Password"
          id="confPassword"
        />
        <button onClick={onBtnClickHandeler}>Create Account</button>
      </form>
    </div>
  );
}

export default Login;
