import React from 'react';
import styled from '@emotion/styled';
import AddNewCarForm from './AddNewCarForm';

const AddNewCar = () => {
  return(
    <Container>
      <SignUpContent>
        <Title>CREATE A VEHICLE</Title>
        <AddNewCarForm />
      </SignUpContent>
    </Container>
  )
}

export default AddNewCar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
//   min-height: 100vh;
//   height: fit-content;
`;

const SignUpContent = styled.div`
  margin-top: -.5rem;
  padding: .2rem;
// //   border: 1px solid blue;
  width: 600px;
  align-items: center;
  background-color: white;
  box-shadow: 0 7px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.p`
  font-size: 1rem;
`;

