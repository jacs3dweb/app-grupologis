import { NUEVA_NOVEDAD, CAMBIAR_CAMPO_NOVEDAD } from "../types";

export const newsReducer = (state, action) => {
  switch (action.type) {
    case NUEVA_NOVEDAD:
      return {
        ...state,
        newsList: [...state.newsList, action.payload],
      };
    case CAMBIAR_CAMPO_NOVEDAD:
      return {
        ...state,
        newForm: {
          ...state.newForm,
          [action.payload.field]: action.payload.value,
        },
      };
    default:
      return state;
  }
};
