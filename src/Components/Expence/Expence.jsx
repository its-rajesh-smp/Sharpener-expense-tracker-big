import React from "react";
import "./Expence.css";

function Expence(props) {
  return (
    <div className=" Expence-div ">
      <p>{props.data.desc}</p>
      <p>{props.data.price}</p>
      <p>{props.data.cata}</p>
    </div>
  );
}

export default Expence;
