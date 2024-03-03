import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import gptReducer from "./gptSlic";
import heartReducer from './heartSlice'
import heartSlice from "./heartSlice";
const appStore=configureStore({
    reducer:{
        user:userReducer,
        movies:moviesReducer,
        gpt:gptReducer,
        heart:heartSlice,

    }
})

export default appStore;
