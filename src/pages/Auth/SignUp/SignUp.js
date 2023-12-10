import React from 'react';
import { NavLink } from 'react-router-dom';
import SignUpForm from './SignupForm';

const SignUp = () => (
  <div className="signup-page-outer">
    <h1 id="signup-title">Sign up</h1>
    <p className="user-headline">Hello there! Register and start managing your application</p>
    <div className="signup-form-outer">
      <SignUpForm />
    </div>
    <p>Have an existing account ?</p>
    <NavLink to="/account/signin">
      Log In
    </NavLink>
  </div>
);

export default SignUp;
