import * as Yup from 'yup';

export const SignInSchema = Yup.object().shape({
  userName: Yup.string().required('User name is required'),
  password: Yup.string().required('Password is required'),
});

export const signInInitialValues = {
  userName: '',
  password: '',
};
