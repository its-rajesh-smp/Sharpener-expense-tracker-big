import React, { useEffect, useState } from "react";
import axios from "axios";
import { DATABASE } from "../assets/assets";
import { useContext } from "react";
import LoginContext from "./LoginCTX";
const ExpenseContext = React.createContext();

export const ExpenseContextProvider = ({ children }) => {
  const loginCTX = useContext(LoginContext);
  const [expensess, setExpensess] = useState([]);

  /* -------------------------------------------------------------------------- */
  /*                                 FETCH DATA                                 */
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    const fetchExpensess = async () => {
      try {
        const { data } = await axios.get(
          `${DATABASE}/${loginCTX.userAuth.email
            .replace("@", "")
            .replace(".", "")}/expencess.json`
        );
        if (data === null) {
          return;
        }
        const dataArray = Object.keys(data).map((val) => {
          return { ...data[val], id: val };
        });

        setExpensess(dataArray);
      } catch (error) {
        console.log(error);
      }
    };
    fetchExpensess();
  }, [loginCTX.userAuth]);

  /* -------------------------------------------------------------------------- */
  /*                                ADD EXPENCESS                               */
  /* -------------------------------------------------------------------------- */
  const addExpencess = async (expenceData) => {
    try {
      const { data } = await axios.post(
        `${DATABASE}/${loginCTX.userAuth.email
          .replace("@", "")
          .replace(".", "")}/expencess.json`,
        expenceData
      );

      setExpensess((prev) => {
        return [{ ...expenceData, id: data.name }, ...prev];
      });
    } catch (error) {
      console.log(error);
    }
  };

  /* -------------------------------------------------------------------------- */
  /*                              DELETE EXPENCESS                              */
  /* -------------------------------------------------------------------------- */
  const deleteExpencess = async (expenceId) => {
    try {
      const responce = await axios.delete(
        `${DATABASE}/${loginCTX.userAuth.email
          .replace("@", "")
          .replace(".", "")}/expencess/${expenceId}.json`
      );
      console.log(responce, expenceId);
      setExpensess((prev) => {
        return prev.filter((val) => {
          if (val.id !== expenceId) {
            return val;
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  /* -------------------------------------------------------------------------- */
  /*                               EDIT EXPENCESS                               */
  /* -------------------------------------------------------------------------- */
  const editExpencess = async (
    editedData,
    expenceid,
    setDesc,
    setprice,
    setCata,
    setIsEditable
  ) => {
    try {
      const { data } = await axios.put(
        `${DATABASE}/${loginCTX.userAuth.email
          .replace("@", "")
          .replace(".", "")}/expencess/${expenceid}.json`,
        editedData
      );

      setIsEditable(false);
      setDesc(data.desc);
      setprice(data.price);
      setCata(data.cata);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ExpenseContext.Provider
      value={{ addExpencess, expensess, deleteExpencess, editExpencess }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseContext;
