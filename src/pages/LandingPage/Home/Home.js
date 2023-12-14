import React from 'react';
import styled from '@emotion/styled';
import AuthNav from '../../../layout/LandingPage/nav/AuthNav';
import logoimg from '../../../assets/CaBooky-logo-1-preview.png';

const Home = () => (
  <>
    <img src={logoimg} alt="cabooky-logo" id="splash-logo" />
    <Container className="landing-page-container">
      <Content className="landing-page-content">
        <Paragraph className="app-title-p-tag">
          CaBooky
          <br />
          Book A car today!
        </Paragraph>
        <Auth>
          <AuthNav />
        </Auth>
      </Content>
    </Container>
  </>
);

export default Home;

const Container = styled.div`
  border: 12rem solid #ffd700;
  margin-bottom: 8rem;
  margin-top: 6rem;
  @media (min-width: 375px) and (max-width: 768px) {
    border: 20rem solid #ffd700;
  }

  @media (max-width: 380px) {
    border: 0;
    margin-bottom: 0;
    margin-top: 0;
    margin-left: 0;
  }
`;

const Content = styled.div`
  margin-top: 20rem;
  position: relative;
  @media (max-width: 375px) {
   margin-left: -5rem;
  }

  @media (max-width: 380px) {
    display: flex;
    flex-direct: column;
    -webkit-flex-direction: column;
    margin-top: 0;
  }
`;

const Paragraph = styled.p`
  font-size: 3rem;
  margin-top: -40rem;
  margin-left: -4rem;
  background color: blue;
  text-align: center;
  @media (max-width: 375px) {
    margin-left: -5rem;
  }

  @media (max-width: 380px) {
    color: red;
    font-size: 2rem;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 0;
  }
`;

const Auth = styled.div`
  margin-left: -10rem;

  @media (max-width: 768px) {
    margin-left: 0;
    text-align: center;
  }
`;
