import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import Header from './header/Header';

const LandingPageLayout = () => (
  <>
    <Header />
    <Main>
      <Outlet />
    </Main>
  </>
);

export default LandingPageLayout;

const Main = styled.main`
  background-color: yellow;
  border: 1rem solid yellow;
`;
