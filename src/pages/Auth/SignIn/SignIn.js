import React from 'react';
import SignInForm from './SigninForm';

const SignIn = () => (
  <div className='signin-page-outer'>
    <h1 id='login-title'>Login</h1>
    <div className='login-form-outer'>
      <SignInForm />
    </div>
  </div>
);

export default SignIn;
