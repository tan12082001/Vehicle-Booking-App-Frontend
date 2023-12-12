import './styles/App.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Router from './routes/routes';
import { fetchCarReservations, fetchCars } from './redux/thunk';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
    dispatch(fetchCarReservations());
  }, [dispatch]);

  return (
    <>
      <Router />
    </>
  );
}

export default App;
