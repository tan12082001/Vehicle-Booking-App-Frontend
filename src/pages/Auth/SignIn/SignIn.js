import React from 'react';
import SignInForm from './SigninForm';

const SignIn = () => (
  <div className='signin-page-outer'>
    <h1 id='login-title'>Sign in</h1>
    <p className='user-headline'>Hello there! Sign in and start managing your application</p>
    <div className='login-form-outer'>
      <SignInForm />
    </div>
  </div>
);

export default SignIn;
