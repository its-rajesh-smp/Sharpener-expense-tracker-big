import React, { useContext } from "react";
import "./ExpenseContainer.css";
import Expence from "../Expence/Expence";
import ExpenseContext from "../../Context/ExpenseCTX";

function ExpenseContainer(props) {
  const expenseCTX = useContext(ExpenseContext);
  console.log(expenseCTX);

  return (
    <div className=" ExpenseContainer-div ">
      {expenseCTX.expensess.map((val) => {
        return <Expence key={Math.random()} data={val} />;
      })}
    </div>
  );
}

export default ExpenseContainer;
