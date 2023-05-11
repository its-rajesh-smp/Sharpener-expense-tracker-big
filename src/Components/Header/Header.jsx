import React from "react";
import "./Header.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Header(props) {
  return (
    <header className="Header-div__header">
      <h1>Welcome to Expense Tracker</h1>

      <Link to="/profile">
        <p className="Header-div__header__p">
          Your Profile Is Incomplete Complete Now
        </p>
      </Link>
    </header>
  );
}

export default Header;
