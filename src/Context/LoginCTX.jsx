import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  AUTH_SIGNUP,
  AUTH_SIGNIN,
  UPDATE_USER,
  GET_USER,
  VERIFY_USER,
} from "../assets/assets";

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
    isAuth: false,
  });

  /* -------------------------------------------------------------------------- */
  /*                                 FETCH AUTH                                 */
  /* -------------------------------------------------------------------------- */

  useEffect(() => {
    async function fireAuth() {
      try {
        const localAuth = JSON.parse(localStorage.getItem("data"));
        if (localAuth === null) {
          return;
        }
        const { data } = await axios.post(GET_USER, {
          idToken: localAuth.idToken,
        });

        setUserAuth({ ...localAuth, ...data.users[0], isAuth: true });
      } catch (error) {
        console.log(error);
      }
    }
    fireAuth();
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

      setUserAuth((p) => {
        return { ...p, ...data, isAuth: true };
      });
      localStorage.setItem("data", JSON.stringify(data));
    } catch (error) {
      alert(error.response.data.error.message);
    }
    setLoader(false);
  };

  /* -------------------------------------------------------------------------- */
  /*                             UPDATE USER PROFIEL                            */
  /* -------------------------------------------------------------------------- */
  const updateUserProfile = async (enteredData, setLoader, goBack) => {
    try {
      const userData = {
        ...enteredData,
        idToken: userAuth.idToken,
        deleteAttribute: [],
        returnSecureToken: true,
      };
      const { data } = await axios.post(UPDATE_USER, userData);
      setUserAuth((prev) => {
        return { ...prev, ...data, isAuth: true };
      });
      goBack();
    } catch (error) {
      console.log(error);
    }
    setLoader(false);
  };

  /* -------------------------------------------------------------------------- */
  /*                                 VERIFY USER                                */
  /* -------------------------------------------------------------------------- */
  const verifyUser = async (setLoader) => {
    try {
      const { data } = await axios.post(VERIFY_USER, {
        idToken: userAuth.idToken,
        requestType: "VERIFY_EMAIL",
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    setLoader(false);
  };

  /* -------------------------------------------------------------------------- */
  /*                                 LOGOUT USER                                */
  /* -------------------------------------------------------------------------- */

  const logOutUser = () => {
    localStorage.clear("data");
    setUserAuth({
      displayName: "",
      email: "",
      expiresIn: "",
      idToken: "",
      kind: "",
      localId: "",
      refreshToken: "",
      registered: false,
      isAuth: false,
    });
  };

  return (
    <LoginContext.Provider
      value={{ loginAuth, userAuth, updateUserProfile, verifyUser, logOutUser }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
