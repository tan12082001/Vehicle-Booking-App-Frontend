import { createSlice } from '@reduxjs/toolkit';
import { deleteCar, fetchCars } from '../thunk';

const initialState = {
    cars: [],
    status: 'idle',
    error: null
};


const carSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
        markCarDelete: (state, action) => {
            const newState = state.cars.map((car) => (car.carId === action.payload ? ({...car, removed: true}) : car));
            state.cars = newState;
        }
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchCars.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        })
        .addCase(fetchCars.fulfilled, (state, action) => {
            state.status = 'succeeded';
            const fetchedData = [];
            action.payload.forEach((car) => {
                const data = {...car, removed: false}
                fetchedData.push(data);
            })
            state.cars = fetchedData;
            console.log('the cars: ')
            console.log(state.cars);
        })
        .addCase(fetchCars.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
        .addCase(deleteCar.pending, (state) => {
          state.status = 'loading';
          state.error = null;
        })
        .addCase(deleteCar.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.cars = state.cars.filter((car) => car.carId !== action.payload.id);        })
        .addCase(deleteCar.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.payload ? action.payload.error : 'Delete failed';
        });
    },
  });
  
  export const {markCarDelete} = carSlice.actions;
  export default carSlice.reducer;