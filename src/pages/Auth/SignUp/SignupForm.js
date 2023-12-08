import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FormComponent from '../../../components/Form/FormComponent';
import { SignUpSchema, signUpInitialValues } from '../../../models/signup.model';
import FormSubmitButton from '../../../components/Button/FormSubmitButton';
import { TextInputField } from '../../../components/Form/FormField';
import HideableTextFormField from '../../../components/Form/HideableTextFormField';
import { registerUser } from '../../../redux/thunk';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    console.log(values);
    dispatch(registerUser(values));
    console.log('Sigup successful');
    navigate('/u/dashboard/home');
  };

  return (
    <FormComponent
      initialValues={signUpInitialValues}
      schema={SignUpSchema}
      onSubmit={handleSubmit}
      className="sign-up-form"
    >
      <TextInputField label="Name" name="username" placeholder="eg. Jane Doe" />
      <TextInputField label="Email" name="email" placeholder="eg. example@example.com" />
      <HideableTextFormField label="Password" name="password" className="password_block" />
      <HideableTextFormField label="Confirm Password" name="password_confirmation" />
      <FormSubmitButton type="submit" className="sign-up-submit">
        Sign Up
      </FormSubmitButton>
    </FormComponent>
  );
};

export default SignUpForm;
