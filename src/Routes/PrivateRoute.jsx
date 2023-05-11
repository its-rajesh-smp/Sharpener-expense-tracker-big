import React, { useContext } from "react";
import LoginContext from "../Context/LoginCTX";
function PrivateRoutes(props) {
  const LoginCTX = useContext(LoginContext);

  if (LoginCTX.userAuth.registered === true) {
    return <>{props.children}</>;
  }
}

export default PrivateRoutes;
