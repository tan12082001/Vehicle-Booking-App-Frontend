import React from 'react';
import styled from '@emotion/styled';
import Img from '../../../components/Img/Img';
import AuthNav from '../../../layout/LandingPage/nav/AuthNav';

const Home = () => (
  <Container>
    <BigText>
      <Image>
        <Img src="/static/img/bicycle.jpg" alt='Bicycle'/>
      </Image>
      <Paragraph>THE NEW VESPA TRIDENT</Paragraph>
      <Auth>
        <AuthNav />
      </Auth>
    </BigText>
  </Container>
)

export default Home;

const Container = styled.div`
  background-color: #FFD700;
  border: 1px solid #FFD700;
`;

const BigText = styled.div`
  margin-left: 30rem;
  margin-top: 20rem;
  margin-bottom: 3rem;
`;

const Paragraph = styled.p`
  font-size: 3rem;
  margin-top: -3rem;
`;

const Image = styled.div`
  width: 50%;
`;

const Auth = styled.div`
  margin-top: 1rem;
  margin-left: -29rem;
  margin-bottom: 7.2rem;
  border: 1px solid #FFD700;
  padding-left: -20rem;
`;
