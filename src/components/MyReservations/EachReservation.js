import PropTypes from 'prop-types';
import React from 'react';

const EachReservation = ({ reservation }) => (
  <div className="each-reservation-div" key={reservation.id}>
    <span>{`Booked For 🚗: ${reservation.car && reservation.car.name ? reservation.car.name : 'Meow'}`}</span>
    <span>{`Reservation is on 📆: ${reservation.date}`}</span>
    <span>{`Reservation is at  📍: ${reservation.city}`}</span>
  </div>
);

EachReservation.propTypes = {
  reservation: PropTypes.shape({
    id: PropTypes.number.isRequired,
    car: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    date: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }).isRequired,
};

export default EachReservation;
