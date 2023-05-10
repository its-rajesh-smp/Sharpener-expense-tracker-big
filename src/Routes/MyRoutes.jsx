import React from "react";
import { Route } from "react-router-dom/cjs/react-router-dom";
import Login from "../Page/Login/Login";
import Homepage from "../Page/Home Page/Homepage";
import PrivateRoutes from "./PrivateRoute";
import ConditionalRoute from "./ConditionalRoute";

function MyRoutes(props) {
  return (
    <>
      <ConditionalRoute
        exact={true}
        firstPath="/"
        firstComponent={Homepage}
        secondPath="/"
        secondComponent={Login}
      />
      <PrivateRoutes path="/home" component={Homepage} auth={true} />
    </>
  );
}

export default MyRoutes;
