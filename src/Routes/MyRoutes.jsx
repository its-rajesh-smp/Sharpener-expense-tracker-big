import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom/cjs/react-router-dom";
import Login from "../Page/Login/Login";
import Homepage from "../Page/Home Page/Homepage";
import ProfilePage from "../Page/Profile Page/ProfilePage";
import Header from "../Components/Header/Header";
import ForgotPassword from "../Page/Forgot Password/ForgotPassword";
import LoginContext from "../Context/LoginCTX";

function MyRoutes(props) {
  const loginCTX = useContext(LoginContext);

  return (
    <Switch>
      {loginCTX.userAuth.isAuth && (
        <>
          <Header />
          <Route exact={true} path="/" component={Homepage} />
          <Route path="/home" component={Homepage} />
          <Route path="/profile" component={ProfilePage} />
        </>
      )}
      {!loginCTX.userAuth.isAuth && (
        <>
          <Route
            exact={true}
            path="/forgotpassword"
            component={ForgotPassword}
          />
          <Route exact={true} path="/" component={Login} />
          <Route path="/login/:id" component={Login} />
        </>
      )}

      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

export default MyRoutes;
