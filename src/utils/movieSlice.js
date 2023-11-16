import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        addNowPlayingMovies:null,
        trailerVideo:null,
        newVideo:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.addNowPlayingMovies=action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.addTopMovies=action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.addUpcomingMovies=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload;
        },
        addNewVideo:(state,action)=>{
            state.newVideo=action.payload;
        }
    }
});

export const{addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRatedMovies,addUpcomingMovies,addNewVideo}=moviesSlice.actions;
export default moviesSlice.reducer;