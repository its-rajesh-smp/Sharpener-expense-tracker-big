import React from "react";
import "./Homepage.css";
import Form from "../../Components/Form/Form";
import ExpenseContainer from "../../Components/Expense Container/ExpenseContainer";

function Homepage(props) {
  return (
    <div className=" Homepage-div ">
      <h1>EXPENSE TRACKER</h1>
      <Form />
      <ExpenseContainer />
    </div>
  );
}

export default Homepage;
