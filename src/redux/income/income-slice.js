import { createSlice } from '@reduxjs/toolkit';
import incomeOperations from './income-operations';

const initialState = { income: [] };

const incomeSlice = createSlice({
  name: 'income',
  initialState,
  extraReducers: {
    [incomeOperations.fetchIncome.fulfilled](state, action) {
      state.income = action.payload.income;
    },

    [incomeOperations.addIncome.fulfilled](state, action) {
      state.income = [...state.income, action.payload.income];
    },
  },
});

export default incomeSlice.reducer;
