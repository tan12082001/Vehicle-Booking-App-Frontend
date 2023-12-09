import PropTypes from 'prop-types';
import React from 'react';
import { format } from 'date-fns';
import { useDispatch } from 'react-redux';
import FormComponent from '../Form/FormComponent';
import { ReserveCarSchema, reserveCarInitialValues } from '../../models/reserveCar.model';
import { DateField, SelectField, TextInputField } from '../Form/FormField';

import FormSubmitButton from '../Button/FormSubmitButton';
import { postReserveCar } from '../../redux/thunk';

const ReserveCarFrom = ({id, username, name}) => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    const formattedDate = format(values.selectedDate, 'EEE, dd MMM yyyy');
    const reservationData = {
      my_reservation: {
          date: formattedDate,
          city: values.selectedCity
        }
    }
    console.log('id', id)
    dispatch(postReserveCar({ carId: id, reservationData}));
    console.log('Reservation successful');
    console.log(reservationData);
    console.log('Picked date is:', formattedDate);
    console.log('Picked City is: ', values.selectedCity);
    console.log('User name:', username);
    console.log('car name: ', name)
  };

  const options = [
    { value: 'City A', label: 'City A' },
    { value: 'City B', label: 'City B' },
    { value: 'City C', label: 'City C' },
    { value: 'City D', label: 'City D' },
    { value: 'City E', label: 'City E' },
  ];

  return (
    <FormComponent
      initialValues={reserveCarInitialValues}
      schema={ReserveCarSchema}
      onSubmit={handleSubmit}
      className="book-now-form"
    >
      <TextInputField label="Username" name="username" value={username} />
      <TextInputField label="Car Name" name="name" value={name} />
      <DateField label="Select Date" name="selectedDate" />
      <div className="city-submit-div">
        <SelectField className="select-city-field" label="Select City" name="selectedCity" options={options} />
        <FormSubmitButton type="submit" className="book-now-submit">
          Book Now
        </FormSubmitButton>
      </div>
    </FormComponent>
  );
};

ReserveCarFrom.propTypes = {
  id: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ReserveCarFrom;
