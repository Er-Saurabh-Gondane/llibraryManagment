import { createSlice } from "@reduxjs/toolkit";
import initialBooks from "../data/books";

const bookSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    addBook: (state, action) => {
      state.unshift(action.payload);
    },
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
