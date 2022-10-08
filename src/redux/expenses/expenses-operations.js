import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://salty-badlands-10459.herokuapp.com/api/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const fetchExpenses = createAsyncThunk(
  'users/expenses',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();

    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('expenses');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

const fetchExpensesById = createAsyncThunk(
  'users/expensesId',
  async (_id, thunkAPI) => {
    const state = thunkAPI.getState();

    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get(`expenses/${_id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

const addExpenses = createAsyncThunk(
  'users/expensesAdd',
  async (credentials, thunkAPI) => {
    const state = thunkAPI.getState();

    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.post('expenses', credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

const updateExpenses = createAsyncThunk(
  'users/expensesUpdate',
  async (credentials, thunkAPI) => {
    const state = thunkAPI.getState();

    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    const { _id, ...fields } = credentials;
    try {
      const { data } = await axios.put(`expenses/${_id}`, fields);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

const operations = {
  fetchExpenses,
  addExpenses,
  updateExpenses,
  fetchExpensesById,
};
export default operations;
