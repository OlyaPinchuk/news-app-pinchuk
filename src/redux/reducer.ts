import { configureStore } from "@reduxjs/toolkit";
import IStore from "../interfaces/storeInterface";


const initialState: IStore = {
    userLogged: localStorage.hasOwnProperty('user'),
    user: {}

}

const storeReducer = (state=initialState, action:any) => {
    switch (action.type) {
        case 'LOG_USER':
            return {
                ...state,
                userLogged: true,
                user: action.payload
            }
        case 'LOG_OUT_USER': 
            return {
                ...state,
                userLogged: false
            }
        
        default:
            return state
    }
}

const store = configureStore({reducer: storeReducer});

export default store;
