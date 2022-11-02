import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  transations: [],
};

export const expenseSlice = createSlice({
  name: "Expense",
  initialState,
  reducers: {
    getTransaction: (state) => {},
  },
});

export const { getTransaction } = expenseSlice.actions;
export default expenseSlice.reducer;
