import PropTypes from 'prop-types';
import React from 'react';
import DisplayItemCard from '../../../components/Card/DisplayItemCard';
import { useParams } from 'react-router-dom';
import img from '../../../components/asset/bike.jpg'
import { useSelector } from 'react-redux';
const ItemDetail = () => {
  const { id } = useParams();
  console.log('we are currently in the car details page of id: ', id);
  const cars = useSelector((state) => state.cars.cars);
  const numericId = parseInt(id, 10);
  const car = cars.find((car) => car.id === numericId);
  console.log('car is:', car);
  const {name, description, pricePerHr, seating_capacity} = car;

  return(
    <DisplayItemCard
      key={id}
      id={id}
      name={name}
      pricePerHr={pricePerHr}
      description={description}
      seating_capacity={seating_capacity}
      imgSrc={img}
    />
  )
}

ItemDetail.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  pricePerHr: PropTypes.number.isRequired,
  seating_capacity: PropTypes.number.isRequired,
  imgSrc: PropTypes.string.isRequired
};

export default ItemDetail;
