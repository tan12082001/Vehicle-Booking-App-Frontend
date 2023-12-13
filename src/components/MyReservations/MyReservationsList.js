import React from 'react';
import { useSelector } from 'react-redux';

const MyReservationsList = () => {
  const myReservations = useSelector((state) => state.reservation.reservations);
  const status = useSelector((state) => state.reservation.status);
  const error = useSelector((state) => state.reservation.error);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'failed') {
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
          <span>{`Car: ${reservation.car.name ? reservation.car.name : 'non nome'}`}</span>
          <span>{`Date: ${reservation.date}`}</span>
          <span>{`City: ${reservation.city}`}</span>
        </div>
      ))}
    </div>
  );
};

export default MyReservationsList;
