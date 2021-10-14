import {actionTypes } from './actionTypes';

const INITIAL_STATE = {
    currentUser: '',
    userInfo: null,
}

export const userReducer = (state = INITIAL_STATE, action) => {
    console.log(action)
    switch(action.type) {
        case actionTypes.SET_USER_INFO :
            return {
                ...state,
                userInfo: action.payload,
                currentUser: action.payload.username
            }
        default :
            return state
            
    }
}