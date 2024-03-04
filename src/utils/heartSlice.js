import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("heartState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("heartState", serializedState);
  } catch (err) {
    // Handle errors here
  }
};

const heartSlice = createSlice({
  name: "heart",
  initialState: {
    heart: loadState() ? loadState().heart : [], // Load state from localStorage
  },
  reducers: {
    addMovies: (state, action) => {
        const isMovieAlreadyAdded = state.heart.some(
          (item) => item.movieId === action.payload.movieId
        );
        if(!isMovieAlreadyAdded){

        
      state.heart = [...state.heart, action.payload];
      saveState(state); // Save state to localStorage on each change
        }
    },
    removeMovies:(state,action)=>{
        const index=state.heart.findIndex(item => item.movieId === action.payload);
        state.heart.splice(index,1);
        saveState(state);
    }
  },
});

export const { addMovies, removeMovies } = heartSlice.actions;

export default heartSlice.reducer;
