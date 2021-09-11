import { createStore, combineReducers } from 'redux';
import { userReducer } from './loginReducer';


const rootReducer = combineReducers({
    user: userReducer,
    
})
const store = createStore(rootReducer);

export default store;