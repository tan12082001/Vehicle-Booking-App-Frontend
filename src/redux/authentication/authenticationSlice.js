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
        console.log('Action staus: blahh is', state.status);
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        if (action.payload.status === 'failed') {
          state.status = 'failed';
          state.error = action.payload.error;
        } else {
          state.authenticatedUser = action.payload.user;
          state.status = action.payload.status || 'succeeded';
          console.log('Action paylod to check if there is a status:', action.payload);
          console.log('Authenticated user is: ', state.authenticatedUser);
          console.log('Authenticated user action status: ', state.status);
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
        state.status = action.payload.status;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default authenticationSlice.reducer;
