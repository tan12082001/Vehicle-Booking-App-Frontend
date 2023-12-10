import { createSlice } from '@reduxjs/toolkit';
import { fetchCarReservations, postReserveCar } from '../thunk';

const initialState = {
  reservations: [],
  newReservationName: '',
  status: 'idle',
  error: null,
};

const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    getNewReservationName: (state, action) => {
      state.newReservationName = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postReserveCar.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(postReserveCar.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.reservations = [...state.reservations, action.payload.data];
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

export const { getNewReservationName } = reservationSlice.actions;
export default reservationSlice.reducer;
