import React from 'react';
import styled from '@emotion/styled';

export const TertiaryButton = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
