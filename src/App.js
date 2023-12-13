import './styles/App.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router from './routes/routes';
import { fetchCarReservations, fetchCars } from './redux/thunk';

function App() {
  const authenticationStatus = useSelector((state) => state.authentication.status);
  const finalIsAuthenticated = authenticationStatus === 'succeeded';
  const dispatch = useDispatch();

  useEffect(() => {
    if (finalIsAuthenticated) {
      dispatch(fetchCars());
      dispatch(fetchCarReservations());
    }
  }, [dispatch, finalIsAuthenticated]);

  return (
    <>
      <Router />
    </>
  );
}

export default App;
