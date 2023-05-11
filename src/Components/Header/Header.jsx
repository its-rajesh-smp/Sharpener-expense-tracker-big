import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import LoginContext from "../../Context/LoginCTX";

function Header(props) {
  const loginCTX = useContext(LoginContext);

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

      <button onClick={loginCTX.logOutUser}>LOGOUT</button>
    </header>
  );
}

export default Header;
