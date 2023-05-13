import React, { useState } from "react";
import "./Form.css";
import { useContext } from "react";
import ExpenseContext from "../../Context/ExpenseCTX";

function Form(props) {
  const ExpenseCTX = useContext(ExpenseContext);

  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [cata, setcata] = useState("Food");

  /* -------------------------------------------------------------------------- */
  /*                              ON ADD BTN CLICK                              */
  /* -------------------------------------------------------------------------- */
  const onAddBtnClickHandeler = (e) => {
    e.preventDefault();
    ExpenseCTX.addExpencess({ desc, price, cata });
  };

  return (
    <form className=" Form-div ">
      <input
        onChange={(e) => {
          setDesc(e.target.value);
        }}
        type="text"
        placeholder="Money"
        name=""
        id=""
      />
      <input
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        type="text"
        placeholder="Desc"
        name=""
        id=""
      />
      <select
        name=""
        id=""
        onChange={(e) => {
          setcata(e.target.value);
        }}
      >
        <option value="Food">Food</option>
        <option value="Cloth">Cloth</option>
        <option value="Petrol">Petrol</option>
        <option value="Salary">Salary</option>
      </select>
      <button onClick={onAddBtnClickHandeler}>ADD EXPENSE</button>
    </form>
  );
}

export default Form;
