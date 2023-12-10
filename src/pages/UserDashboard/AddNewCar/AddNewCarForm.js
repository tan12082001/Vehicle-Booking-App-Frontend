import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CarSchema, carInitialValues } from '../../../models/car.model';
import { TextInputField, TextAreaInputField } from '../../../components/Form/FormField';
import FormSubmitButton from '../../../components/Button/FormSubmitButton';
import FormComponent2 from '../../../components/Form/FormComponent2';
import { postNewCar } from '../../../redux/thunk';
import { USERS_DASHBOARD } from '../../../routes/routeConstants';

const AddNewCarForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector((state) => state.cars.status);
  const handleSubmit = (values) => {
    dispatch(postNewCar(values));
  };

  if (status === 'succeeded') {
    navigate(`${USERS_DASHBOARD}`);
  }

  return (
    <FormComponent2
      initialValues={carInitialValues}
      schema={CarSchema}
      onSubmit={handleSubmit}
      className="add-new-car"
    >
      <TextInputField label="Name" name="name" placeholder="Car Name" />
      <TextAreaInputField label="Description" name="description" placeholder="Car description" />
      <TextInputField label="Price/Hour" name="pricePerHr" placeholder="Price of rent/hr" />
      <TextInputField label="Seating Capacity" name="seating_capacity" placeholder="Seating Capacity of Car" />
      <TextInputField label="Minimum Rent Duration" name="rental_duration" placeholder="Minimum Reantal Duration" />
      <FormSubmitButton type="submit" className="add-new-car-submit">
        Create Car
      </FormSubmitButton>
    </FormComponent2>
  );
};

export default AddNewCarForm;
