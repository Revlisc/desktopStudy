import { DATA } from "../TEST_DATA/DATA";
import { actionTypes } from "./actionTypes";

const INITIAL_STATE = {
  userData: DATA,
};

export const userDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_SET:
      return {
        ...state,
        userData: action.payload,
      };
    case actionTypes.CREATE_SET:
      return {
        ...state,
        userData: state.userData.concat(action.payload),
      };

    case actionTypes.DELETE_SET:
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};
