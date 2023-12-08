import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiEndpoints from '../thunk';

export const registerUser = createAsyncThunk('auth/register', async (user) => {
  const response = await apiEndpoints.register(user);
  return response;
});

export const loginUser = createAsyncThunk('auth/login', async (user) => {
  const response = await apiEndpoints.login(user);
  return response;
});

export const logoutUser = createAsyncThunk('auth/logout', async () => {
  const response = await apiEndpoints.logout();
  return response;
});

const initialState = {
  authenticatedUser: {},
  status: 'idle',
  error: null,
};

const authenticationSlice = createSlice({
  name: 'authenticatedUser',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.authenticatedUser = action.payload.data;
        state.status = action.payload.status === 'succeeded' ? 'succeeded' : 'failed';
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.authenticatedUser = action.payload.data;
        state.status = action.payload.status === 'succeeded' ? 'succeeded' : 'failed';
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(logoutUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.authenticatedUser = {};
        state.status = action.payload.status;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default authenticationSlice.reducer;
