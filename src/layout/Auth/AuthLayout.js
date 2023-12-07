import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => (
  <main>
    <Outlet />
  </main>
);

export default AuthLayout;
