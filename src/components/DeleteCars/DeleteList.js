import React from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import EachCarDelete from './EachCarDelete';

const DeleteList = () => {
//   const cars = useSelector((state) => state.cars.cars)
  const mockData = [
    {
        "id": 3,
        "name": "Car1",
        "description": "Description for Car1",
        "removed": false
    },
    {
        "id": 4,
        "name": "Car1111",
        "description": "Description for Car1",
        "removed": false
    }
];
const cars = mockData;
//   const status = useSelector((state) => state.cars.status)
//   const error = useSelector((state) => state.cars.error)

//   if (status) {
//     return <span>Loading...</span>;
//   }

//   if (error) {
//     return <span>Something went wrong!</span>;
//   } 


  return (
    <>
      <div>
        <h1>Cars List</h1>
        <table>
            <thead>
                <tr>
                    <th>Car Title</th>
                    <th>Status</th>
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