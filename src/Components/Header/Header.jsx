import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import LoginContext from "../../Context/LoginCTX";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

function Header(props) {
  const loginCTX = useContext(LoginContext);
  const history = useHistory();

  /* -------------------------------------------------------------------------- */
  /*                                  ON LOGOUT                                 */
  /* -------------------------------------------------------------------------- */
  const onLogoutBtnHandeler = () => {
    loginCTX.logOutUser();
    history.replace("/");
  };

  return (
    <header className="Header-div__header">
      <h1>Welcome to Expense Tracker</h1>

      <Link to="/profile">
        <p className="Header-div__header__p">
          {!loginCTX.userAuth.emailVerified
            ? "Your Profile Is Incomplete Complete Now"
            : "EDIT PROFILE"}
        </p>
      </Link>

      <button onClick={onLogoutBtnHandeler}>LOGOUT</button>
    </header>
  );
}

export default Header;
