// import React, { useState, useRef, useEffect } from 'react';
import React from 'react';
import styled from '@emotion/styled';

// import HamburgerMenu from './HamburgerMenu';
import Nav from '../nav/Nav';
import AuthNav from '../nav/AuthNav';

const Header = () => (
  <StyledHeader>
    <NavContainer>
      <Nav />
      <AuthNav />
    </NavContainer>
  </StyledHeader>
);

const StyledHeader = styled.header`
  display: flex;
  padding: 2.17rem 7.12rem;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  position: fixed;
  top: -1rem;
  gap: 5rem;
  width: 100%;
`;

const NavContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14rem;
  right: 8rem;
  background-color: white;
`;

export default Header;
