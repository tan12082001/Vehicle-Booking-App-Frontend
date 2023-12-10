import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import styled from '@emotion/styled';

import Nav from './sideNav/Nav';

const UsersDashboardLayout = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split('/');

  return (
    <Container>
      <Nav />
      <Section>
        <MainContent>
          <Outlet />
        </MainContent>
      </Section>
    </Container>
  );
};

export default UsersDashboardLayout;

const Container = styled.div`
  background-color: white;
  // border: 1px solid blue;
`;

const Section = styled.section`
  // border: 2px solid blue;
  width: 80%;
  margin-left: 17rem;
`;

const MainContent = styled.main`
  /* border: 2px solid red; */
  margin: 2rem 6.25rem 5.69rem 3.38rem;
  height: fit-content;
`;
