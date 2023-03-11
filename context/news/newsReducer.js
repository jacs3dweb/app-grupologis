import { NUEVA_NOVEDAD } from "../types";

export const newsReducer = (state, action) => {
  switch (action.type) {
    case NUEVA_NOVEDAD:
      return {
        ...state,
        newsList: [...state.newsList, action.payload],
      };
    default:
      return state;
  }
};
