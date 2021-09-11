import { DATA } from "../TEST_DATA/DATA";

const INITIAL_STATE = {
  userData: DATA,
};

export const userDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
