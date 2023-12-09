import * as Yup from 'yup';

export const SignInSchema = Yup.object().shape({
  username: Yup.string().required('User name is required'),
  password: Yup.string().required('Password is required'),
});

export const signInInitialValues = {
  username: '',
  password: '',
};
