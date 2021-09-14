import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { userReducer } from "./loginReducer";
import { userDataReducer } from "./userDataReducer";


const rootReducer = combineReducers(
  {
    user: userReducer,
    userData: userDataReducer,
    
  },
  
);
const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
