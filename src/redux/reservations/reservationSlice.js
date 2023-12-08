import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiEndpoints from '../thunk';

export const reserveCar = createAsyncThunk('reservations/newReservation', async () => {
  try {
    const response = await apiEndpoints.newReserve();
    return response;
  } catch (error) {
    throw error;
  }
});

const initialState = {
  reservation: {},
  status: 'idle',
  error: null,
};

const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(reserveCar.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(reserveCar.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.reservation = action.payload.data;
      })
      .addCase(reserveCar.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default reservationSlice.reducer;
