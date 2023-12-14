import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Bike from '../../../components/asset/bike.jpg';
import DisplayItemCard from '../../../components/Card/DisplayItemCard';

const ItemDetail = () => {
  const { id } = useParams();
  const cars = useSelector((state) => state.cars.cars);
  const numericId = parseInt(id, 10);
  const car = cars.find((car) => car.id === numericId);

  return (
    <DisplayItemCard
      key={id}
      id={id}
      name={car.name}
      pricePerHr={car.pricePerHr}
      description={car.description}
      seatingCapacity={car.seating_capacity}
      imgSrc={Bike}
      removed={car.removed}
    />
  );
};

export default ItemDetail;
