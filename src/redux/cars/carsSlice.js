import { createSlice } from '@reduxjs/toolkit';
import { deleteCar, fetchCars, postNewCar } from '../thunk';

const initialState = {
  cars: [],
  status: 'idle',
  error: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    removeMarkStatus: (state, action) => {
      const newState = state.cars.map(
        (car) => (car.id === action.payload ? ({ ...car, removed: true }) : car),
      );
      state.cars = newState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const rawcars = action.payload;
        const customData = [];
        rawcars.forEach((car) => {
          const data = { ...car, removed: false };
          customData.push(data);
        });
        state.cars = customData;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(deleteCar.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(deleteCar.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(deleteCar.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload ? action.payload.error : 'Delete failed';
      })
      .addCase(postNewCar.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(postNewCar.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cars = [...state.cars, action.payload];
        console.log('Car state :', state.cars);
      })
      .addCase(postNewCar.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload ? action.payload.error : 'Post new car failed';
      });
  },
});

export const { removeMarkStatus } = carsSlice.actions;
export default carsSlice.reducer;
