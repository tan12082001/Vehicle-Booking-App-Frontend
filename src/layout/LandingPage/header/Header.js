// import React, { useState, useRef, useEffect } from 'react';
import React from 'react';
import styled from '@emotion/styled';

// import HamburgerMenu from './HamburgerMenu';
import Nav from '../nav/Nav';
import AuthNav from '../nav/AuthNav';

const Header = () => (
  <StyledHeader>
    <NavContainer>
      {/* <Nav /> */}
      {/* <AuthNav /> */}
    </NavContainer>
  </StyledHeader>
);

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FFD700;
  gap: 5rem;
  width: 100%;
`;

const NavContainer = styled.header`
  display: flex;
  width: 100%;
  // border: 1px solid blue;
  justify-content: space-between;
  align-items: center;
  // gap: 14rem;
  // right: 8rem;
  background-color: 3FFD700;
`;

export default Header;
