import React from "react";
import { useContext } from "react";
import { Route } from "react-router-dom/cjs/react-router-dom";
import LoginContext from "../Context/LoginCTX";

function ConditionalRoute(props) {
  const loginCTX = useContext(LoginContext);
  console.log("SDFKJSDBFSJHD");
  if (loginCTX.userAuth.isAuth === true) {
    return (
      <Route
        exact={props.exact !== undefined ? true : false}
        path={props.firstPath}
        component={props.firstComponent}
      />
    );
  } else {
    return (
      <Route
        exact={props.exact !== undefined ? true : false}
        path={props.secondPath}
        component={props.secondComponent}
      />
    );
  }
}

export default ConditionalRoute;
