const getExpenses = state => state.expenses.expenses;
const getExpensesById = state => state.expenses.expenses_id;
const expensesSelectors = {
  getExpenses,
  getExpensesById
};
export default expensesSelectors;
