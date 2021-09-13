import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { userReducer } from "./loginReducer";
import { userDataReducer } from "./userDataReducer";

const rootReducer = combineReducers(
  {
    user: userReducer,
    userData: userDataReducer,
  },
  applyMiddleware(logger)
);
const store = createStore(rootReducer);

export default store;
