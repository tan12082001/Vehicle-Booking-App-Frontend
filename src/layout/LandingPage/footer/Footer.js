import React from 'react';
import styled from '@emotion/styled';

const Footer = () => {
  return (
    <Container>
      <Paragraph>
        This is the footer
      </Paragraph>
    </Container>
  )
}

export default Footer

const Container = styled.div`
  border: 2px solid red;
  display: flex;
  gap: 5rem;
  padding: 4.12rem 7.12rem 5.25rem;
  font-weight: 400;
  font-size: 1.25rem;
  color: black;
`;

const Paragraph = styled.p`
  color: blue;
`;
