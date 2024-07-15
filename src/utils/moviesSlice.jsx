import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVdo: null,
    popularMovies: null,
    trendingMovies: null,
    upcomingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    popularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    trendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    upcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    trailerVdoActions: (state, action) => {
      state.trailerVdo = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  popularMovies,
  trendingMovies,
  upcomingMovies,
  trailerVdoActions,
} = moviesSlice.actions;
export default moviesSlice.reducer;
