import React, { useReducer } from "react";
import authContext from "./authContext";
import { authReducer } from "./authReducer";

import { ESTABLECER_EMPRESA, ESTABLECER_ROL } from "../types";

const AuthState = (props) => {
  const initialState = {
    userData: {
      name: "Prueba cambio desde state",
      business: "",
      email: "mary33@gmail.com",
      phone: "3005658749",
      role: "business",
    },
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const setBusiness = (payload) => {
    dispatch({
      type: ESTABLECER_EMPRESA,
      payload,
    });
  };

  const setRole = (payload) => {
    dispatch({
      type: ESTABLECER_ROL,
      payload,
    });
  };

  return (
    <authContext.Provider
      value={{ userData: state.userData, setBusiness, setRole }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
