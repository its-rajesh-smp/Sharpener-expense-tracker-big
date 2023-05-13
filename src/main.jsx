import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import "./index.css";
import { LoginContextProvider } from "./Context/LoginCTX";
import { ExpenseContextProvider } from "./Context/ExpenseCTX";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoginContextProvider>
      <ExpenseContextProvider>
        <App />
      </ExpenseContextProvider>
    </LoginContextProvider>
  </React.StrictMode>
);
