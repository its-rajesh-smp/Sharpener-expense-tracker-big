import React, { useContext, useRef, useState } from "react";
import "./Login.css";
import LoginContext from "../../Context/LoginCTX";

function Login(props) {
  const loginCTX = useContext(LoginContext);

  const emailInputRef = useRef();
  const passInputRef = useRef();
  const confPassInputRef = useRef();

  const [login, setLogin] = useState(false);
  const [loader, setLoader] = useState(false);

  /* -------------------------------------------------------------------------- */
  /*                         BTN CLICK LOGIN/CREATE ACC                         */
  /* -------------------------------------------------------------------------- */
  const onBtnClickHandeler = (e) => {
    e.preventDefault();
    if (!loader) {
      setLoader(true);
      const email = emailInputRef.current.value.replaceAll(" ", "");
      const pass = passInputRef.current.value.replaceAll(" ", "");

      const confPass = login
        ? ""
        : confPassInputRef.current.value.replaceAll(" ", "");

      if (pass.length < 6) {
        alert("Enter A Password of minimum length  6");
        return;
      }

      if (!login && pass !== confPass) {
        alert("Enter A Correct Confirm Password");
        return;
      }

      const enteredInputData = {
        email: email,
        password: pass,
        returnSecureToken: true,
      };
      loginCTX.loginAuth(
        enteredInputData,
        login ? "SIGNIN" : "SIGNUP",
        setLoader
      );
    }
  };

  return (
    <div className=" Login-div ">
      <h1>{login ? "LOGIN" : "CREATE NEW ACCOUNT"}</h1>
      {loader && <h1>LOADING....</h1>}
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
        {!login && (
          <input
            ref={confPassInputRef}
            required
            type="password"
            placeholder="Confirm Password"
            name="Confrim Password"
            id="confPassword"
          />
        )}
        {login && <p>Forgot Password</p>}
        <button onClick={onBtnClickHandeler}>
          {login ? "LOGIN" : "SIGN UP"}
        </button>
        <p
          onClick={() => {
            setLogin((p) => !p);
          }}
        >
          {login ? "Create New Account" : "Already Have An Account?"}
        </p>
      </form>
    </div>
  );
}

export default Login;
