import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import Header from './header/Header';

const LandingPageLayout = () => (
  <>
    <Header />
    <Main className="landing-page-layout">
      <Outlet />
    </Main>
  </>
);

export default LandingPageLayout;

const Main = styled.main`
  background-color: #ffd700;
  border: 1rem solid yellow;
  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
    border: none;
  }
`;
