import React from "react";
import { Redirect, Route } from "react-router-dom/cjs/react-router-dom";
import Login from "../Page/Login/Login";
import Homepage from "../Page/Home Page/Homepage";
import PrivateRoutes from "./PrivateRoute";
import ConditionalRoute from "./ConditionalRoute";
import ProfilePage from "../Page/Profile Page/ProfilePage";
import Header from "../Components/Header/Header";

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

      <PrivateRoutes auth={true}>
        <Route path="/" component={Header} />
        <Route path="/home" component={Homepage} />
        <Route path="/profile" component={ProfilePage} />
      </PrivateRoutes>

      <Route path="*">
        <Redirect to="/" />
      </Route>
    </>
  );
}

export default MyRoutes;
