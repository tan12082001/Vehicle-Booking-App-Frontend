import React from 'react';
import ReserveCarFrom from './ReserveCarForm';

const ReserveCar = () => (
  <div className="reserve-car-outer">
    <div className="testing-backdrop">
      <h1>Reserve car page can book a car</h1>
      <div className="reserve-car-inner">
        <h1 id="reserve-car-head-title">Book A Car on Hourly bases!</h1>
        <div className="blank-div" />
        <p id="reserve-page-head-description">
          You can reserve a car from the list of cars present. You can Book the car by selecting the
          {' '}
          <i>City</i>
          {' '}
          and the
          <i>Date</i>
          {' '}
          you want to book
          the Vehicle. We have services all over the globe which some include test-riding facilites.
          To book the car select both City and Date, please use the selector below.
        </p>
        <ReserveCarFrom />
      </div>
    </div>
  </div>
);

export default ReserveCar;
