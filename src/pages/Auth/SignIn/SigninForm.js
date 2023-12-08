import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FormComponent from '../../../components/Form/FormComponent';
import { SignInSchema, signInInitialValues } from '../../../models/signin.model';
import FormSubmitButton from '../../../components/Button/FormSubmitButton';
import { TextInputField } from '../../../components/Form/FormField';

import HideableTextFormField from '../../../components/Form/HideableTextFormField';
import { getAuthenticationToken, loginUser } from '../../../redux/thunk';

const SignInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    console.log(values);
    dispatch(loginUser(values));
    if (getAuthenticationToken()) {
      console.log('token status:', getAuthenticationToken());
      console.log('Login successful');
      navigate('/u/dashboard/home');
    }
  };

  return (
    <FormComponent
      initialValues={signInInitialValues}
      schema={SignInSchema}
      onSubmit={handleSubmit}
      className="sign-in-form"
    >
      <TextInputField label="User Name" name="username" placeholder="eg. username" />
      <HideableTextFormField label="Password" name="password" />
      <FormSubmitButton type="submit" className="sign-up-submit">
        Log In
      </FormSubmitButton>
    </FormComponent>
  );
};

export default SignInForm;
