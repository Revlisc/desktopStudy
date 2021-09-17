import { actionTypes } from "./actionTypes";

export const setUserInfo = (values) => ({
  type: actionTypes.SET_USER_INFO,
  payload: values,
});

export const updateSet = (updatedState) => ({
  type: actionTypes.UPDATE_SET,
  payload: updatedState,
});

export const setPercent = (percent) => ({
  type: actionTypes.SET_PERCENT,
  payload: percent,
});

export const createSet = (newSet) => ({
  type: actionTypes.CREATE_SET,
  payload: newSet,
});
