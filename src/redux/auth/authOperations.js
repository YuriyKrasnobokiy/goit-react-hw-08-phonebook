import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// export const instance = axios.create({
//   baseURL: 'https://connections-api.herokuapp.com',
// });

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const unsetToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', userData);
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
      const { data } = await axios.post('/users/login', userData);

      setToken(data.token);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/logout');
    unsetToken();

    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.token;
    setToken(token);
    const { data } = await axios.get('/users/current');
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
