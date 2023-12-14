import React from 'react';
import styled from '@emotion/styled';
import AddNewCarForm from './AddNewCarForm';

const AddNewCar = () => (
  <Container>
    <SignUpContent>
      <Title>CREATE A VEHICLE</Title>
      <AddNewCarForm />
    </SignUpContent>
  </Container>
);

export default AddNewCar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SignUpContent = styled.div`
  margin-top: -.5rem;
  padding: .2rem;
// //   border: 1px solid blue;
  width: 600px;
  align-items: center;
  background-color: white;
  box-shadow: 0 7px 8px rgba(0, 0, 0, 0.1);
  @media (max-width: 375px) {
    margin-left: 20rem;
  }
  @media (min-width: 375px) and (max-width: 768px) {
    width: 100%;
    margin-top: 0;
    padding: 1rem 0;
  }
`;

const Title = styled.p`
  font-size: 1rem;
  @media (max-width: 768px) {
    margin-left: 10rem;
  }

  @media (max-width: 380px) {
    text-align: center;
  }
`;
