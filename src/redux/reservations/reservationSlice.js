import { createSlice } from '@reduxjs/toolkit';
import { fetchCarReservations, postReserveCar } from '../thunk';

const initialState = {
  reservations: [],
  status: 'idle',
  error: null,
};

const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postReserveCar.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(postReserveCar.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.reservations = [...state.reservations, action.payload];
      })
      .addCase(postReserveCar.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchCarReservations.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchCarReservations.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.reservations = action.payload;
      })
      .addCase(fetchCarReservations.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default reservationSlice.reducer;
