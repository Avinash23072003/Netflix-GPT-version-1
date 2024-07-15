// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice"; // Import the movies reducer
import gptReducer from "./gptSearchSlice";
import languageReducer from "./configSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    config: languageReducer, // Add the movies reducer
  },
});

export default store;
