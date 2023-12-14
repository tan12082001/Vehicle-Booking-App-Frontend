import * as Yup from 'yup';

export const ReserveCarSchema = Yup.object().shape({
  selectedDate: Yup.date().required('Date is Required'),
  selectedCity: Yup.string().required('City is required'),
});

export const reserveCarInitialValues = {
  selectedDate: null,
  selectedCity: '',
};
