import React from 'react';
import { useLocation } from 'react-router-dom';
import ReserveCar from '../../../components/ReserveCars/ReserveCar';

const ReserveCars = () => {
  const location = useLocation();
  const { id, username, name } = location.state || {};

  return (
    <div className="reserve-cars-page-outer">
      <p id="reserve-page-title">Reserve car</p>
      <ReserveCar id={id} username={username} name={name} />
    </div>
  );
};

export default ReserveCars;
