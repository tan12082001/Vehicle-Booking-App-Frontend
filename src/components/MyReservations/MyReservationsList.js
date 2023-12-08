import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarReservations } from '../../redux/thunk';

const MyReservationsList = () => {
    const mockData = [
        {
          id: 1,
          car: {
            id: 3,
            name: "Car1"
          },
          date: "2023-01-02",
          city: "No Peace"
        },
        {
          id: 2,
          car: {
            id: 4,
            name: "Car2"
          },
          date: "2023-01-03",
          city: "Tranquil Town"
        },
        // Add more mock data as needed
      ];
  const dispatch = useDispatch();
//   const myReservations = useSelector((state) => state.reservation.reservations);
const myReservations = mockData;
  const status = useSelector((state) => state.reservation.status);
  const error = useSelector((state) => state.reservation.error);

  useEffect(() => {
    dispatch(fetchCarReservations());
  }, [dispatch]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'failed') {
    return <p>Error: {error}</p>;
  }

  return (
    <div className='my-reservations-inner'>
      <h1>My Reservations</h1>
      {myReservations && myReservations.map((reservation) => (
        <div key={reservation.id} className='each-reservation-div'>
          <span>{`Car: ${reservation.car.name}`}</span>
          <span>{`Date: ${reservation.date}`}</span>
          <span>{`City: ${reservation.city}`}</span>
        </div>
      ))}
    </div>
  );
};

export default MyReservationsList;
