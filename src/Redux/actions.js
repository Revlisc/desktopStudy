import { actionTypes } from "./actionTypes";

export const setUserInfo = (values) => ({
  type: actionTypes.SET_USER_INFO,
  payload: values,
});

export const addQuestion = (updatedSet) => ({
  type: actionTypes.ADD_QUESTION,
  payload: updatedSet,
});

export const setPercent = (percent) => ({
    type: actionTypes.SET_PERCENT,
    payload: percent,
});
