import React from 'react';

const EachReservation = ({ reservation }) => {
  return (
    <div className="each-reservation-div" key={reservation.id}>
      <span>{`Booked For 🚗: ${reservation.car && reservation.car.name ? reservation.car.name : 'Meow'}`}</span>
      <span>{`Reservation is on 📆: ${reservation.date}`}</span>
      <span>{`Reservation is at  📍: ${reservation.city}`}</span>
    </div>
  );
};

export default EachReservation;