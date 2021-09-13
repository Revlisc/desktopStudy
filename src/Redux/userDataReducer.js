import { DATA } from "../TEST_DATA/DATA";
import { actionTypes } from "./actionTypes";

const INITIAL_STATE = {
  userData: DATA,
};

export const userDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_QUESTION:
      console.log("initial action", action.payload);
      console.log("initial state", state);

      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};
