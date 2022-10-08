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

const fetchIncome = createAsyncThunk('users/income', async (_, thunkAPI) => {
  const state = thunkAPI.getState();

  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue();
  }

  token.set(persistedToken);
  try {
    const { data } = await axios.get('income');

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue();
  }
});

const addIncome = createAsyncThunk(
  'users/incomeAdd',
  async (credentials, thunkAPI) => {
    const state = thunkAPI.getState();

    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.post('income', credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

const operations = {
  fetchIncome,
  addIncome,
};
export default operations;
