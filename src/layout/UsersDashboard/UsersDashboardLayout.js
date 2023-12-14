import React from 'react';
import { Outlet } from 'react-router-dom';

import styled from '@emotion/styled';

import Nav from './sideNav/Nav';

const UsersDashboardLayout = () => (
  <>
    <Container>
      <Nav />
      <Section className="main-dashboard-section-tan">
        <MainContent>
          <Outlet />
        </MainContent>
      </Section>
    </Container>
  </>
);

export default UsersDashboardLayout;

const Container = styled.div`
  background-color: white;
`;

const Section = styled.section`
  width: 80%;
  margin-left: 17rem;
  @media (max-width: 380px) {
    width: 100%;
    margin-left: 0;
  }
`;

const MainContent = styled.main`
  margin: 2rem 6.25rem 5.69rem 3.38rem;
  height: fit-content;
  @media (max-width: 380px) {
    margin: 0;
    width: 100%;
  }
`;
