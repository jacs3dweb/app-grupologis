import { GET_NEWENTRY } from "../types";

export const newEntryReducer = (state, action) => {
  switch (action.type) {
    case GET_NEWENTRY:
      return {
        ...state,
        newEntryList: [...state.newEntryList, action.payload],
      };
    default:
      return state;
  }
};
