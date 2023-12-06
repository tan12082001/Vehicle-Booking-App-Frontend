import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';

const TertiaryButton = ({ children }) => <StyledButton>{children}</StyledButton>;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

TertiaryButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TertiaryButton;
