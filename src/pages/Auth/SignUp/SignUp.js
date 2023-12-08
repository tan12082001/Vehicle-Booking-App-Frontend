import React from 'react';
import { NavLink } from 'react-router-dom';
import SignUpForm from './SignupForm';

const SignUp = () => (
  <div>
    <h1>Signup page</h1>
    <SignUpForm />
    <p>Have an existing account ?</p>
    <NavLink to="/account/signin">
      Log In
    </NavLink>
  </div>
);

export default SignUp;
