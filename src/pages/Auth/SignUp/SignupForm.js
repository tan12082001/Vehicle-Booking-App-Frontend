import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  const status = useSelector((state) => state.authentication.status);
  const handleSubmit = (values) => {
    dispatch(registerUser(values));
  };

  if (status === 'succeeded') {
    navigate('/account/signin');
  }

  return (
    <FormComponent
      initialValues={signUpInitialValues}
      schema={SignUpSchema}
      onSubmit={handleSubmit}
      className="sign-up-form"
    >
      <TextInputField label="Name" name="username" placeholder="eg. Jane Doe" className="form-username" id="signup-username" />
      <TextInputField label="Email" name="email" placeholder="eg. example@example.com" className="form-email" id="signup-email" />
      <HideableTextFormField label="Password" name="password" className="password_block" id="signup-password" />
      <HideableTextFormField label="Confirm Password" name="password_confirmation" className="password_block" id="signup-confirm-password" />
      <FormSubmitButton type="submit" className="sign-up-submit">
        Sign Up
      </FormSubmitButton>
    </FormComponent>
  );
};

export default SignUpForm;
