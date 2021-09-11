import { createStore, combineReducers } from "redux";
import { userReducer } from "./loginReducer";
import { userDataReducer } from "./userDataReducer";

const rootReducer = combineReducers({
  user: userReducer,
  userData: userDataReducer,
});
const store = createStore(rootReducer);

export default store;
