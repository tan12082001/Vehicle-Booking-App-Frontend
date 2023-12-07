import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';

const TertiaryButton = ({ children }) => <StyledButton>{children}</StyledButton>;

const StyledButton = styled.button`
  display: flex;
  border: 2px solid blue;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem 7rem;
  border-radius: 2rem;
  background-color: transparent;
  color: blue; /* Set the default text color */
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  & >.grey{
    color: white;
  }

  &:hover {
    background-color: grey;
    color: white;
  }
`;

TertiaryButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TertiaryButton;
