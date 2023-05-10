import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom/cjs/react-router-dom";
import LoginContext from "../Context/LoginCTX";
function PrivateRoutes(props) {
  const LoginCTX = useContext(LoginContext);

  return (
    <>
      {LoginCTX.userAuth === props.auth ? (
        <Route
          exact={props.exact !== undefined ? true : false}
          path={props.path}
          component={props.component}
        />
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
}

export default PrivateRoutes;
