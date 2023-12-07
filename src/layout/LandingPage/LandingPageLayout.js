import React from 'react';
import { Outlet } from 'react-router-dom';

// import Footer from './footer/Footer';
import { Header } from './header/Header';

const LandingPageLayout = () => {
  // eslint-disable-next-line arrow-body-style
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default LandingPageLayout;
