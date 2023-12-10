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
  const {
    name, description, pricePerHr, seatingCapacity,
  } = car;

  return (
    <DisplayItemCard
      key={id}
      id={id}
      name={name}
      pricePerHr={pricePerHr}
      description={description}
      seatingCapacity={seatingCapacity}
      imgSrc={Bike}
    />
  );
};

export default ItemDetail;
