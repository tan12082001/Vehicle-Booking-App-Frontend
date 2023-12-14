import React from 'react';
import styled from '@emotion/styled';
import AuthNav from '../../../layout/LandingPage/nav/AuthNav';
import logoimg from '../../../assets/CaBooky-logo-1-preview.png';

// import bicycleImage from '../../../components/asset/bicycle.jpg';

const Home = () => (
  <>
    <img src={logoimg} alt="cabooky-logo" id="splash-logo" />
    <Container>
      <Content>
        <Paragraph>
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
  // backgroun-color: yellow;
  border: 12rem solid #ffd700;
  margin-bottom: 8rem;
  margin-top: 6rem;
  @media (max-width: 375px) {
    border: 20rem solid #ffd700;
  }
  @media (min-width: 375px) and (max-width: 768px) {
    border: 20rem solid #ffd700;
  }
`;

const Content = styled.div`
  margin-top: 20rem;
  position: relative;
  // background-color: green;
  @media (max-width: 375px) {
   margin-left: -5rem;
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
`;

// const Image = styled.div`
//   img {
//     width: 100%;
//   }
// `;

const Auth = styled.div`
  margin-left: -10rem;

  @media (max-width: 768px) {
    margin-left: 0;
    text-align: center;
  }
`;
