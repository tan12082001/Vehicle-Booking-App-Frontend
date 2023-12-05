import React from 'react';
import FormComponent from '../../../components/Form/FormComponent';
import { SignUpSchema, signUpInitialValues } from '../../../models/signup.model';
import FormSubmitButton from '../../../components/Button/FormSubmitButton';
import { TextInputField } from '../../../components/Form/FormField';

const SignUpForm = () => {
  const handleSubmit = (values) => {
    // async method call
  };

  return (
    <FormComponent
      initialValues={signUpInitialValues}
      schema={SignUpSchema}
      onSubmit={handleSubmit}
      className="sign-up-form"
    >
      <TextInputField label="Name" name="userName" />
      <TextInputField label="Email" name="email" />
      <TextInputField label="Password" name="password" />
      <TextInputField label="Confirm Password" name="confirm_password" />
      <FormSubmitButton type="submit" className="sign-up">
        Submit
      </FormSubmitButton>
    </FormComponent>
  );
};

export default SignUpForm;
