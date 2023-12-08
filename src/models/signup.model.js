import * as Yup from 'yup';

export const SignUpSchema = Yup.object().shape({
  username: Yup.string().required('User Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  password_confirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Password must match').required('Confirm the Password'),
});

export const signUpInitialValues = {
  username: '',
  email: '',
  password: '',
  paswword_confirmation: '',
};
