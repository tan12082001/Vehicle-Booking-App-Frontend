import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => (
  <main className='auth-main-layout'>
    <Outlet />
  </main>
);

export default AuthLayout;
