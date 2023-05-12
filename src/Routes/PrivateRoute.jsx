import React, { useContext } from "react";
import LoginContext from "../Context/LoginCTX";
function PrivateRoutes(props) {
  const LoginCTX = useContext(LoginContext);

  if (LoginCTX.userAuth.isAuth === props.auth) {
    console.log(LoginCTX.userAuth.isAuth);
    console.log(props.auth);
    return <>{props.children}</>;
  }
}

export default PrivateRoutes;
