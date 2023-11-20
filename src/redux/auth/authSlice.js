import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refresh, register } from './authOperations';

const initialState = {
  userData: { name: null, email: null },
  token: null,
  isLoading: false,
  error: false,
  isLoggedIn: false,
  isRefreshing: false,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state, action) => {
        state.userData = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, handleRejected)

      .addCase(login.pending, handlePending)
      .addCase(login.fulfilled, (state, action) => {
        state.userData = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, handleRejected)

      .addCase(logout.pending, handlePending)
      .addCase(logout.fulfilled, () => {
        return initialState;
      })
      .addCase(logout.rejected, handleRejected)

      .addCase(refresh.pending, handlePending)
      .addCase(refresh.fulfilled, (state, action) => {
        state.userData = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(refresh.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
