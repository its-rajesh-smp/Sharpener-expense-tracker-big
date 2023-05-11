import React, { useEffect, useState } from "react";
import axios from "axios";
import { AUTH_SIGNUP, AUTH_SIGNIN, UPDATE_USER } from "../assets/assets";

const LoginContext = React.createContext({
  loginAuth: () => {},
  userAuth: {},
});

export const LoginContextProvider = ({ children }) => {
  const [userAuth, setUserAuth] = useState({
    displayName: "",
    email: "",
    expiresIn: "",
    idToken: "",
    kind: "",
    localId: "",
    refreshToken: "",
    registered: false,
  });

  /* -------------------------------------------------------------------------- */
  /*                                 FETCH AUTH                                 */
  /* -------------------------------------------------------------------------- */

  useEffect(() => {
    const localAuth = JSON.parse(localStorage.getItem("data"));
    if (localAuth !== null) {
      setUserAuth(localAuth);
    }
  }, []);
  /* -------------------------------------------------------------------------- */
  /*                          LOGIN/CREATE NEW ACCOUNT                          */
  /* -------------------------------------------------------------------------- */
  const loginAuth = async (enteredData, type, setLoader) => {
    try {
      const { data } = await axios.post(
        type === "SIGNIN" ? AUTH_SIGNIN : AUTH_SIGNUP,
        enteredData
      );
      setUserAuth(data);
      localStorage.setItem("data", JSON.stringify(data));
    } catch (error) {
      alert(error.response.data.error.message);
    }
    setLoader(false);
  };

  /* -------------------------------------------------------------------------- */
  /*                             UPDATE USER PROFIEL                            */
  /* -------------------------------------------------------------------------- */
  const updateUserProfile = async (enteredData, setLoader) => {
    try {
      const userData = {
        ...enteredData,
        idToken: userAuth.idToken,
        deleteAttribute: [],
        returnSecureToken: true,
      };
      const { data } = await axios.post(UPDATE_USER, userData);
      localStorage.setItem("userProfile", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
    setLoader(false);
  };

  return (
    <LoginContext.Provider value={{ loginAuth, userAuth, updateUserProfile }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
