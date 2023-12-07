import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authenticationReducer from './authentication/authenticationSlice';
import reservationReducer from './reservations/reservationSlice';

const store = configureStore({
  reducer: {
    authencation: authenticationReducer,
    reservation: reservationReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
