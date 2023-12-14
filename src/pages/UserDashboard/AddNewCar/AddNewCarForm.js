import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CarSchema, carInitialValues } from '../../../models/car.model';
import { TextInputField, TextAreaInputField, FileInputField } from '../../../components/Form/FormField';
import FormSubmitButton from '../../../components/Button/FormSubmitButton';
import FormComponent2 from '../../../components/Form/FormComponent2';
import { postNewCar } from '../../../redux/thunk';
import { USERS_DASHBOARD } from '../../../routes/routeConstants';

const AddNewCarForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector((state) => state.cars.status);

  const handleSubmit = (values, { setSubmitting }) => {
    const data = new FormData();

    data.append('car[name]', values.name);
    data.append('car[description]', values.description);
    data.append('car[pricePerHr]', values.pricePerHr);
    data.append('car[seating_capacity]', values.seating_capacity);
    data.append('car[rental_duration]', values.rental_duration);

    if (values.image) {
      data.append('car[image]', values.image);
    }

    dispatch(postNewCar(data)).then(() => {
      setSubmitting(false);
      if (status === 'succeeded') {
        navigate(`${USERS_DASHBOARD}`);
      }
    }).catch((error) => {
      if (error) {
        return error;
      }
      return setSubmitting(false);
    });
  };

  return (
    <FormComponent2
      initialValues={carInitialValues}
      schema={CarSchema}
      onSubmit={handleSubmit}
      className="add-new-car"
    >
      <TextInputField label="Name" name="name" placeholder="Car Name" className="add-new-string" id="add-new-car-form-name" />
      <TextAreaInputField label="Description" name="description" placeholder="Car description" className="add-new-string" id="add-new-car-form-desc" />
      <TextInputField label="Price/Hour" name="pricePerHr" placeholder="Price of rent/hr" className="add-new-string" id="add-new-car-form-price" />
      <TextInputField label="Seating Capacity" name="seating_capacity" placeholder="Seating Capacity of Car" className="add-new-string" id="add-new-car-form-cap" />
      <TextInputField label="Minimum Rent Duration" name="rental_duration" placeholder="Minimum Reantal Duration" className="add-new-string" id="add-new-car-form-duration" />
      <FileInputField label="Add Image of Car" name="image" className="add-new-string" id="add-new-car-form-image" />
      <FormSubmitButton type="submit" className="add-new-car-submit">
        Create Car
      </FormSubmitButton>
    </FormComponent2>
  );
};

export default AddNewCarForm;
