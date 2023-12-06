import * as Yup from 'yup';

export const SignUpSchema = Yup.object().shape({
  userName: Yup.string().required('User Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirm_password: Yup.string().oneOf([Yup.ref('password'), null], 'Password must match').required('Confirm the Password'),
});

export const signUpInitialValues = {
  userName: '',
  email: '',
  password: '',
  confirm_password: '',
};
