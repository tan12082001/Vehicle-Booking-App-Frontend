import React from 'react';
import { useDispatch } from 'react-redux';
import FormComponent from '../../../components/Form/FormComponent';
import { CarSchema, carInitialValues } from '../../../models/car.model';
import FormSubmitButton from '../../../components/Button/FormSubmitButton';
import { TextAreaInputField, TextInputField } from '../../../components/Form/FormField';


const AddNewCarForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    console.log(values);
    dispatch(userSignUp(values));
  };

  return (
    <FormComponent
      initialValues={carInitialValues}
      schema={CarSchema}
      onSubmit={handleSubmit}
      className=""
    >
      <TextInputField label="Car Name" name="name" placeholder="Car Name" />
      <TextAreaInputField label="Description" name="description" placeholder="Description" />
      <TextInputField label="Price/hr" name="pricePrHr" placeholder="Price"/>
      <TextInputField label="Sitting Capacity" name="sitting_capacity" placeholder="Sitting Capacity" />
      <TextInputField label="Rental Duration" name="rental_duration" placeholder="Duration" />
      <FormSubmitButton type="submit" className="sign-up-submit">
        Create
      </FormSubmitButton>
    </FormComponent>
  );
};

export default AddNewCarForm;
