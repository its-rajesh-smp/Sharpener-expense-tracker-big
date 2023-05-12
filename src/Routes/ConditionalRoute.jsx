import React from "react";
import { useContext } from "react";
import { Route } from "react-router-dom/cjs/react-router-dom";
import LoginContext from "../Context/LoginCTX";

function ConditionalRoute(props) {
  const loginCTX = useContext(LoginContext);
  if (loginCTX.userAuth.isAuth === props.auth) {
    return (
      <Route
        exact={true}
        path={props.firstPath}
        component={props.firstComponent}
      />
    );
  } else {
    return (
      <Route
        exact={true}
        path={props.secondPath}
        component={props.secondComponent}
      />
    );
  }
}

export default ConditionalRoute;
