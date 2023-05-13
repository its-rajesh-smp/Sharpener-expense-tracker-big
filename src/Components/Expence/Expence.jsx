import React, { useState } from "react";
import "./Expence.css";
import { useContext } from "react";
import ExpenseContext from "../../Context/ExpenseCTX";

function Expence(props) {
  const expenseCTX = useContext(ExpenseContext);
  const [desc, setDesc] = useState(props.data.desc);
  const [price, setprice] = useState(props.data.price);
  const [cata, setCata] = useState(props.data.cata);

  /* -------------------------------------------------------------------------- */
  /*                             ON DELETE BTN CLICK                            */
  /* -------------------------------------------------------------------------- */
  const deleteBtnHandeler = () => {
    expenseCTX.deleteExpencess(props.data.id);
  };

  /* -------------------------------------------------------------------------- */
  /*                              ON EDIT BTN CLICK                             */
  /* -------------------------------------------------------------------------- */
  const [isEditable, setIsEditable] = useState(false);

  const editBtnHandeler = () => {
    setIsEditable((p) => !p);
  };

  const [editDesc, editSetDesc] = useState(props.data.desc);
  const [editPrice, editSetprice] = useState(props.data.price);
  const [editCata, editSetCata] = useState(props.data.cata);

  const onSaveBtnClickHandeler = (e) => {
    e.preventDefault();
    expenseCTX.editExpencess(
      { desc: editDesc, price: editPrice, cata: editCata },
      props.data.id,
      setDesc,
      setprice,
      setCata,
      setIsEditable
    );
  };

  return (
    <div className=" Expence-div ">
      <p>{desc}</p>
      <p>{price}</p>
      <p>{cata}</p>
      <button onClick={editBtnHandeler}>EDIT</button>
      <button onClick={deleteBtnHandeler}>DELETE</button>

      {/* SHOWING FORM IF CLICK ON EDIT BTN IN SAME PLACE */}
      {isEditable && (
        <form className="Expence-div__form">
          <h3>EDIT</h3>
          <input
            onChange={(e) => {
              editSetDesc(e.target.value);
            }}
            value={editDesc}
            type="text"
            name=""
            id=""
          />

          <input
            onChange={(e) => {
              editSetprice(e.target.value);
            }}
            value={editPrice}
            type="text"
            name=""
            id=""
          />

          <select
            onChange={(e) => {
              editSetCata(e.target.value);
            }}
            value={editCata}
            name=""
            id=""
          >
            <option value="Food">Food</option>
            <option value="Cloth">Cloth</option>
            <option value="Petrol">Petrol</option>
            <option value="Salary">Salary</option>
          </select>

          <button onClick={onSaveBtnClickHandeler}>SAVE</button>
        </form>
      )}
    </div>
  );
}

export default Expence;
