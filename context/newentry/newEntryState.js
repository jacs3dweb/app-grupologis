import React, { useReducer } from "react";
import newEntryContext from "./newEntryContext";
import { newEntryReducer } from "./newEntryReducer";
import { GET_NEWENTRY } from "../types";

const NewEntryState = (props) => {
  const initialState = {
    newEntryList: [
      {
        RAD: "099",
        nombre: "Jorge Castro",
        Identificacion: "102938392",
        fecha: "2022-06-16",
        estado: 1,
      },
      {
        RAD: "199",
        nombre: "Jorge Castro",
        Identificacion: "102938392",
        fecha: "2022-06-16",
        estado: 2,
      },
      {
        RAD: "299",
        nombre: "Jorge Castro",
        Identificacion: "102938392",
        fecha: "2022-06-16",
        estado: 3,
      },
    ],
  };

  const [state, dispatch] = useReducer(newEntryReducer, initialState);

  const obtenerNewEntry = (data) => {
    dispatch({
      type: GET_NEWENTRY,
      payload: data,
    });
  };

  return (
    <newEntryContext.Provider
      value={{ newEntryList: state.newEntryList, obtenerNewEntry }}
    >
      {props.children}
    </newEntryContext.Provider>
  );
};

export default NewEntryState;
