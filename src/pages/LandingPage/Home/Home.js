import React from 'react';
import styled from '@emotion/styled';
import AuthNav from '../../../layout/LandingPage/nav/AuthNav';

import bicycleImage from '../../../components/asset/bicycle.jpg';

const Home = () => (
  <Container>
    <Image>
      <img src={bicycleImage} alt="Bicycle" />
    </Image>
    <Paragraph>CarBooky</Paragraph>
    <Auth>
      <AuthNav />
    </Auth>
  </Container>
);

export default Home;

const Container = styled.div`
  width: 100%;
`;

const Paragraph = styled.p`
  font-size: 3rem;
  margin-top: -40rem;
  margin-left: 25rem;
  color: green;
`;

const Image = styled.div`
  // width: 100%;

  img {
    width: 100%;
  }
`;

const Auth = styled.div`
  margin-left: -10rem;
`;
