import React, { useReducer } from "react";
import newsContext from "./newsContext";
import { newsReducer } from "./newsReducer";

import { NUEVA_NOVEDAD } from "../types";

const NewsState = (props) => {
  const initialState = {
    newsList: [
      {
        radicado: "0001",
        fechaSolicitud: "2022-06-16",
        tipoPermiso: "Cita Médica",
        estado: 1,
      },
      {
        radicado: "0002",
        fechaSolicitud: "2022-06-16",
        tipoPermiso: "Retiro",
        estado: 2,
      },
      {
        radicado: "0003",
        fechaSolicitud: "2022-06-16",
        tipoPermiso: "Cita Médica",
        estado: 3,
      },
    ],
  };

  const [state, dispatch] = useReducer(newsReducer, initialState);

  const agregarNovedad = (data) => {
    dispatch({
      type: NUEVA_NOVEDAD,
      payload: data,
    });
  };

  return (
    <newsContext.Provider value={{ newsList: state.newsList, agregarNovedad }}>
      {props.children}
    </newsContext.Provider>
  );
};

export default NewsState;
