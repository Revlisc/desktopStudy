import { actionTypes } from "./actionTypes";

export const setUserInfo = (values) => ({
  type: actionTypes.SET_USER_INFO,
  payload: values,
});

export const addQuestion = (updatedState) => ({
  type: actionTypes.ADD_QUESTION,
  payload: updatedState,
});
