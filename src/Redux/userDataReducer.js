import { DATA } from "../TEST_DATA/DATA";
import { actionTypes } from "./actionTypes";

const INITIAL_STATE = {
  userData: DATA,
};

export const userDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_QUESTION:
      return {
        ...state,
        userData: action.payload,
      };

    case actionTypes.EDIT_QUESTION:
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};
