import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom/cjs/react-router-dom";
import Login from "../Page/Login/Login";
import Homepage from "../Page/Home Page/Homepage";
import PrivateRoutes from "./PrivateRoute";
import ProfilePage from "../Page/Profile Page/ProfilePage";
import Header from "../Components/Header/Header";
import ForgotPassword from "../Page/Forgot Password/ForgotPassword";
import LoginContext from "../Context/LoginCTX";

function MyRoutes(props) {
  const loginCTX = useContext(LoginContext);

  return (
    <>
      {loginCTX.userAuth.isAuth ? (
        <Route exact={true} path="/" component={Header} />
      ) : (
        <Route exact={true} path="/" component={Login} />
      )}

      <PrivateRoutes auth={true}>
        <Route path="/home" component={Homepage} />
        <Route path="/profile" component={ProfilePage} />
      </PrivateRoutes>

      <PrivateRoutes auth={false}>
        <Route path="/login/:id" component={Login} />
        <Route path="/forgotpassword" component={ForgotPassword} />
      </PrivateRoutes>

      {/* <Route path="*">
        <Redirect to="/" />
      </Route> */}
    </>
  );
}

export default MyRoutes;
