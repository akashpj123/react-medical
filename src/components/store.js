import { configureStore } from "@reduxjs/toolkit";
import authReducer from './store/authSlice';


var store = configureStore({
    reducer:{
             auth: authReducer
    }
});
export default store;