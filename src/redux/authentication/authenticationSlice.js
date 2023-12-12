import { createSlice } from '@reduxjs/toolkit';
import { loginUser, logoutUser, registerUser } from '../thunk';

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
        if (action.payload.status === 'failed') {
          state.status = 'failed';
          state.error = action.payload.error;
        } else {
          state.authenticatedUser = action.payload.user;
          state.status = action.payload.status || 'succeeded';
        }
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
        // console.log('user has been logged out');
        state.status = action.payload.status;
        // console.log('current status is:', state.status);
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default authenticationSlice.reducer;
