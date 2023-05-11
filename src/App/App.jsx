import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import MyRoutes from "../Routes/MyRoutes";

function App(props) {
  return (
    <div className=" App-div ">
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
