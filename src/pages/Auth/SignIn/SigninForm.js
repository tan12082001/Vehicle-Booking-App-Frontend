import React from 'react';
import { useDispatch } from 'react-redux';
import FormComponent from '../../../components/Form/FormComponent';
import { SignInSchema, signInInitialValues } from '../../../models/signin.model';
import FormSubmitButton from '../../../components/Button/FormSubmitButton';
import { TextInputField } from '../../../components/Form/FormField';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import HideableTextFormField from '../../../components/Form/HideableTextFormField';
import { loginUser } from '../../../redux/authentication/authenticationSlice';

const SignInForm = () => {
  const dispatch = useDispatch();
  // const authenticationStatus = useSelector((state) => state.authenticatedUser.status)
  const handleSubmit = (values) => {
    console.log(values);
      dispatch(loginUser(values));
      console.log('Login successful')
  };

  // useEffect(() => {
  //   if (authenticationStatus === 'succeeded') {
  //     console.log('Login successful');
  //   } else {
  //     console.log('Login failed')
  //   }
  // }, [authenticationStatus])

  return (
    <FormComponent
      initialValues={signInInitialValues}
      schema={SignInSchema}
      onSubmit={handleSubmit}
      className="sign-in-form"
    >
      <TextInputField label="User Name" name="userName" placeholder="eg. username" />
      <HideableTextFormField label="Password" name="password" />
      <FormSubmitButton type="submit" className="sign-up-submit">
        Log In
      </FormSubmitButton>
    </FormComponent>
  );
};

export default SignInForm;
