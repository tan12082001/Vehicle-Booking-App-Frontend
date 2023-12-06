import { createSlice } from '@reduxjs/toolkit';
import {
  userSignUp, userLogin, userLogout, fetchUser,
} from '../thunk';

const initialState = {
  authenticatedUser: {},
  status: 'idle',
  error: null,
};

const authenticationSlice = createSlice({
  name: 'authenticatedUser',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(userSignUp.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(userSignUp.fulfilled, (state, action) => {
        state.authenticatedUser = action.payload.data;
        state.status = action.payload.status === 200 ? 'succeeded' : 'failed';
      })
      .addCase(userSignUp.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(userLogin.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.authenticatedUser = action.payload.data;
        state.status = action.payload.status === 200 ? 'succeeded' : 'failed';
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(userLogout.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(userLogout.fulfilled, (state, action) => {
        state.authenticatedUser = {};
        state.status = action.payload.status;
      })
      .addCase(userLogout.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.authenticatedUser = action.payload.data;
        state.status = 'succeeded';
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default authenticationSlice.reducer;
