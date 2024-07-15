import { createSlice } from "@reduxjs/toolkit";
const gptSearchSlice = createSlice({
  name: "gpt",
  initialState: {
    showgptsearch: false,
    gptMovies: null,
    movieNames: null,
    movieResult: null,
  },
  reducers: {
    showGPTSearchView: (state) => {
      state.showgptsearch = !state.showgptsearch;
    },
    addgptMovieResult: (state, action) => {
      const { movieNames, movieResult } = action.payload;
      state.movieNames = movieNames;
      state.movieResult = movieResult;
    },
  },
});

export const { showGPTSearchView, addgptMovieResult } = gptSearchSlice.actions;

export default gptSearchSlice.reducer;
