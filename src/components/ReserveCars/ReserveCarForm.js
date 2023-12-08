import React from 'react';
import { format } from 'date-fns';
// import { useDispatch } from 'react-redux';
import FormComponent from '../Form/FormComponent';
import { ReserveCarSchema, reserveCarInitialValues } from '../../models/reserveCar.model';
import { DateField, SelectField, TextInputField } from '../Form/FormField';

import FormSubmitButton from '../Button/FormSubmitButton';
// import { reserveCar } from '../../redux/thunk';

const ReserveCarFrom = () => {
//   const dispatch = useDispatch();
//   const { carId } = useParams();

  const handleSubmit = (values) => {
    const formattedDate = format(values.selectedDate, 'EEE, dd MMM yyyy');
    // const reservationData = {
    //     userName: values.userName,
    //     selectedDate: formattedDate,
    //     selectedCity: values.selectedCity
    // }
    // dispatch(reserveCar({carId, data: reservationData}));
    console.log('Reservation successful')
    console.log(values);
    console.log('Picked date is:', formattedDate);
    console.log('Picked City is: ', values.selectedCity);
    console.log('User name:', values.userName);
  };

  const options = [
    { value: 'City A', label: 'City A' },
    { value: 'City B', label: 'City B' },
    { value: 'City C', label: 'City C' },
    { value: 'City D', label: 'City D' },
    { value: 'City E', label: 'City E' },
  ];

  const testUsername = 'Fill User Name Boo';
  // const testCarname = 'Fill Car Name Booo'

  return (
    <FormComponent
      initialValues={{ ...reserveCarInitialValues, userName: testUsername }}
      schema={ReserveCarSchema}
      onSubmit={handleSubmit}
      className="book-now-form"
    >
      <TextInputField label="Username" name="userName" />
      <TextInputField label="Car Name" name="carName" />
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

export default ReserveCarFrom;
