import React from 'react';
import { useDispatch } from 'react-redux';
import FormComponent from '../../../components/Form/FormComponent';
import { SignUpSchema, signUpInitialValues } from '../../../models/signup.model';
import FormSubmitButton from '../../../components/Button/FormSubmitButton';
import { TextInputField } from '../../../components/Form/FormField';
// import { useEffect } from 'react';
import { userSignUp } from '../../../redux/thunk';

const SignUpForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    console.log(values);
    dispatch(userSignUp(values));
  };

  return (
    <FormComponent
      initialValues={signUpInitialValues}
      schema={SignUpSchema}
      onSubmit={handleSubmit}
      className="sign-up-form"
    >
      <TextInputField label="Name" name="userName" placeholder="eg. Jane Doe" />
      <TextInputField label="Email" name="email" placeholder="eg. example@example.com" />
      <TextInputField label="Password" name="password" placeholder="eg. A1@_3er" />
      <TextInputField label="Confirm Password" name="confirm_password" />
      <FormSubmitButton type="submit" className="sign-up-submit">
        Sign Up
      </FormSubmitButton>
    </FormComponent>
  );
};

export default SignUpForm;
