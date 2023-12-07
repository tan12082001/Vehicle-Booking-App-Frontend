import { createSlice } from '@reduxjs/toolkit';
import { reserveCar } from '../thunk';

const initialState = {
  reservation: {},
  status: 'idle',
  error: null,
};

const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    reservationRequest: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    reservationSuccess: (state) => {
      state.status = 'succeeded';
    },
    reservationFailure: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(reserveCar.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(reserveCar.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(reserveCar.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { reservationRequest, reservationSuccess, reservationFailure } = reservationSlice.actions;
export default reservationSlice.reducer;
