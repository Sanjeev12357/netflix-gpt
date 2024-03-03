import { createSlice } from "@reduxjs/toolkit";

const heartSlice=createSlice({
    name:"heart",
    initialState:{
        heart:[],
    },
    reducers:{
        addMovies:(state,action)=>{
            state.heart=[...state.heart, action.payload]
        }
    }
});

export const {addMovies}=heartSlice.actions;

export default heartSlice.reducer;