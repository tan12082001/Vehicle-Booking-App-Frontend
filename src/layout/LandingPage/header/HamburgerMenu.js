import React from "react";
import styled from "@emotion/styled";
import { FaBars } from 'react-icons/fa'

const HamburgerMenu = ({onClick}) => {
  return <StyledHamburger onClick={onClick}>
    <FaBars />
  </StyledHamburger>
}

const StyledHamburger = styled.div`
  font-size: 24px;
  cursor: pointer;
`;

export default HamburgerMenu;