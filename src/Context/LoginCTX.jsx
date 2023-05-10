import React, { useState } from "react";
import axios from "axios";
import { AUTH_SIGNUP, AUTH_SIGNIN } from "../assets/assets";

const LoginContext = React.createContext({
  loginAuth: () => {},
  userAuth: {},
});

export const LoginContextProvider = ({ children }) => {
  const [userAuth, setUserAuth] = useState(false);

  /* -------------------------------------------------------------------------- */
  /*                          LOGIN/CREATE NEW ACCOUNT                          */
  /* -------------------------------------------------------------------------- */
  const loginAuth = async (enteredData, type, setLoader) => {
    try {
      const { data } = await axios.post(
        type === "SIGNIN" ? AUTH_SIGNIN : AUTH_SIGNUP,
        enteredData
      );
      setUserAuth(true);
      localStorage.setItem("data", JSON.stringify(data));
    } catch (error) {
      alert(error.response.data.error.message);
    }
    setLoader(false);
  };

  return (
    <LoginContext.Provider value={{ loginAuth, userAuth }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
