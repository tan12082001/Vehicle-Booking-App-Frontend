import './styles/App.css';
import React, {useEffect} from 'react';
import Router from './routes/routes';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarReservations, fetchCars } from './redux/thunk';

function App() {
  const authenticationStatus = useSelector((state) => state.authentication.status);
  const isAuthenticated = authenticationStatus === 'succeeded';
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchCars());
      dispatch(fetchCarReservations());
    }
  }, [dispatch, isAuthenticated]);

  return (
    <>
      <Router />
    </>
  );
}

export default App;
