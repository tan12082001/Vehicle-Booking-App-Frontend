import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './footer/Footer';
import { Header } from './header/Header';

const LandingPageLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default LandingPageLayout;