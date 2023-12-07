import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authenticationReducer from './authentication/authenticationSlice';

const store = configureStore({
  reducer: {
    authencation: authenticationReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
