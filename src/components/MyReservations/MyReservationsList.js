import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCarReservations } from '../../redux/thunk';

const MyReservationsList = () => {
  const authenticationStatus = useSelector((state) => state.authentication.status);
  const finalIsAuthenticated = authenticationStatus === 'succeeded';
  const reservationsState = useSelector((state) => state.reservation.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (finalIsAuthenticated) {
      dispatch(fetchCarReservations());
    }
  }, [dispatch, finalIsAuthenticated]);

  const myReservations = useSelector((state) => state.reservation.reservations);
  const error = useSelector((state) => state.reservation.error);

  if (reservationsState === 'loading') {
    return <p>Loading...</p>;
  }

  if (reservationsState === 'failed') {
    return (
      <p>
        Error:
        {error}
      </p>
    );
  }

  return (
    <div className="my-reservations-inner">
      {myReservations && myReservations.map((reservation) => (
        <div key={reservation.id} className="each-reservation-div">
          <span>{`Booked For 🚗: ${reservation.car && reservation.car.name ? reservation.car.name : 'Meow'}`}</span>
          <span>{`Reservation is on 📆: ${reservation.date}`}</span>
          <span>{`Reservation is at  📍: ${reservation.city}`}</span>
        </div>
      ))}
    </div>
  );
};

export default MyReservationsList;
