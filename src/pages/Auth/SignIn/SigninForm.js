import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FormComponent from '../../../components/Form/FormComponent';
import { SignInSchema, signInInitialValues } from '../../../models/signin.model';
import FormSubmitButton from '../../../components/Button/FormSubmitButton';
import { TextInputField } from '../../../components/Form/FormField';
import HideableTextFormField from '../../../components/Form/HideableTextFormField';
import { loginUser } from '../../../redux/thunk';

const SignInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector((state) => state.authentication.status);

  const handleSubmit = (values) => {
    dispatch(loginUser(values));
    localStorage.setItem('authenticationStatus', 'succeeded');
  };

  if (status === 'succeeded') {
    navigate('/u/dashboard/home');
  }

  return (
    <>
      <FormComponent
        initialValues={signInInitialValues}
        schema={SignInSchema}
        onSubmit={handleSubmit}
        className="sign-in-form"
      >
        <TextInputField label="User Name" name="username" placeholder="eg. username" className="form-username" id="signin-form-username" />
        <HideableTextFormField label="Password" name="password" className="form-password" id="signin-form-password" />
        <FormSubmitButton type="submit" className="sign-up-submit">
          Log In
        </FormSubmitButton>
      </FormComponent>
    </>
  );
};

export default SignInForm;
