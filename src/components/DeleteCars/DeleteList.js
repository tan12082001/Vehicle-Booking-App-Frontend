import React from 'react';
import { useSelector } from 'react-redux';
import EachCarDelete from './EachCarDelete';

const DeleteList = () => {
  const cars = useSelector((state) => state.cars.cars);

  return (
    <>
      <div className="delete-cars-list">
        <h1 id="delete-list-id">Cars List</h1>
        <table>
          <thead>
            <tr>
              <th id="delete-list-car-title">Car Title</th>
              <th id="delete-list-car-status">Status</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => (
              <EachCarDelete key={car.id} car={car} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DeleteList;
