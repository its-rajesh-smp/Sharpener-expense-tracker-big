import React from "react";
import axios from "axios";
import { AUTH_SIGNUP } from "../assets/assets";

const LoginContext = React.createContext({ loginAuth: () => {} });

export const LoginContextProvider = ({ children }) => {
  /* -------------------------------------------------------------------------- */
  /*                          LOGIN/CREATE NEW ACCOUNT                          */
  /* -------------------------------------------------------------------------- */
  const loginAuth = async (enteredData) => {
    console.log(enteredData);
    try {
      const { data } = await axios.post(AUTH_SIGNUP, enteredData);
      console.log(data);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <LoginContext.Provider value={{ loginAuth }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
