import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      const { data } = await instance.post('/users/signup', userData);
      setToken(data.token);
      return data;
    } catch (e) {
      if (e?.response?.data?.name === 'MongoError') {
        alert(
          `User ${userData.name} or email ${userData.email} has already registered!`
        );
      }
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    try {
      const { data } = await instance.post('/users/login', userData);
      setToken(data.token);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const { data } = await instance.post('/users/logout');
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
