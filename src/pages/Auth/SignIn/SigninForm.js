import React from 'react';
import { useDispatch } from 'react-redux';
import FormComponent from '../../../components/Form/FormComponent';
import { SignInSchema, signInInitialValues } from '../../../models/signin.model';
import FormSubmitButton from '../../../components/Button/FormSubmitButton';
import { TextInputField } from '../../../components/Form/FormField';
// import { useEffect } from 'react';
import { userLogin } from '../../../redux/thunk';
// import { useSelector } from 'react-redux';

const SignInForm = () => {
  const dispatch = useDispatch();
  // const authenticatedUser = (state => state.authentication.authenticatedUser)
  const handleSubmit = (values) => {
    console.log(values);
    dispatch(userLogin(values));
  };

  return (
    <FormComponent
      initialValues={signInInitialValues}
      schema={SignInSchema}
      onSubmit={handleSubmit}
      className="sign-in-form"
    >
      <TextInputField label="Email" name="email" placeholder="eg. example@example.com" />
      <TextInputField label="Password" name="password" placeholder="eg. A1@_3er" />
      <FormSubmitButton type="submit" className="sign-up-submit">
        Log In
      </FormSubmitButton>
    </FormComponent>
  );
};

export default SignInForm;
