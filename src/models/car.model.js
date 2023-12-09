import * as Yup from 'yup';

export const CarSchema = Yup.object().shape({
  name: Yup.string().required('Car Name is required'),
  description: Yup.string().required('Car description is required'),
  pricePerHr: Yup.string().required('Price is required'),
  sitting_capacity: Yup.number().required('State sitting capacity'),
  rental_duration: Yup.number().required('State the duration'),
});

export const carInitialValues = {
  name: '',
  description: '',
  pricePerHr: '',
  sitting_capacity: '',
  rental_duration: '',
};
