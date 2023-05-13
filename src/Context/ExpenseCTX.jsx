import React, { useState } from "react";
const ExpenseContext = React.createContext();

export const ExpenseContextProvider = ({ children }) => {
  const [expensess, setExpensess] = useState([]);

  /* -------------------------------------------------------------------------- */
  /*                                ADD EXPENCESS                               */
  /* -------------------------------------------------------------------------- */
  const addExpencess = (expenceData) => {
    setExpensess((prev) => {
      return [expenceData, ...prev];
    });
  };

  return (
    <ExpenseContext.Provider value={{ addExpencess, expensess }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseContext;
