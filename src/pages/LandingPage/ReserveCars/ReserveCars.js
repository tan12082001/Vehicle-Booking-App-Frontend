import React, { useEffect } from 'react';
import ReserveCar from '../../../components/ReserveCars/ReserveCar';
import { useLocation } from 'react-router-dom';

const ReserveCars = () => {
  const location = useLocation();
  const { id,username, name } = location.state || {};
  useEffect(() => {
    console.log('Reached ReserveCars component');
    console.log('ID:', id);
    console.log('Username:', username);
    console.log('Name:', name);
  }, [id, username, name]);

  return (
    <div className='reserve-cars-page-outer'>
      <p id='reserve-page-title'>Reserve car</p>
      <ReserveCar id={id} username={username} name={name} />
    </div>
  )
};

export default ReserveCars;
