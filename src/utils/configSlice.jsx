import { createSlice } from "@reduxjs/toolkit";
const configSlice = createSlice({
  name: "config",
  initialState: {
    initialLang: "en",
  },
  reducers: {
    languageChange: (state, action) => {
      state.initialLang = action.payload;
    },
  },
});
export const { languageChange } = configSlice.actions;
export default configSlice.reducer;
