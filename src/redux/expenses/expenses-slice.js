import { createSlice } from '@reduxjs/toolkit';
import expensesOperations from './expenses-operations';

const initialState = { expenses: [], expenses_id: null, expense_date: '' };

const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  extraReducers: {
    [expensesOperations.fetchExpenses.fulfilled](state, action) {
      state.expenses = action.payload.expenses;
    },
    [expensesOperations.fetchExpensesById.fulfilled](state, action) {
      return { ...state, expenses_id: action.payload.expenses };
    },
    [expensesOperations.addExpenses.fulfilled](state, action) {
      state.expenses = [...state.expenses, action.payload.expenses];
    },

    [expensesOperations.updateExpenses.fulfilled](state, action) {
      state.expenses = [
        ...new Map(
          [...state.expenses, action.payload.expenses].map(item => [
            item['_id'],
            item,
          ]),
        ).values(),
      ];
    },
  },
});

export default expensesSlice.reducer;
