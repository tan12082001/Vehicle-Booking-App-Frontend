import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authenticationReducer from './authentication/authenticationSlice';
import reservationReducer from './reservations/reservationSlice';
import carsReducer from './cars/carsSlice'

const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    cars: carsReducer,
    reservation: reservationReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
