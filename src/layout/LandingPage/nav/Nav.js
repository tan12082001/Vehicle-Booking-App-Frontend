import React from 'react';

import styled from '@emotion/styled';

import { InternalNavLink } from '../../../components/Link/Link';
import navConfig from './navConfig';

const Nav = () => (
  <StyledNav>
    {navConfig.map((nav) => (
      <InternalNavLink to={nav.path} key={nav.title}>
        {nav.title}
      </InternalNavLink>
    ))}
  </StyledNav>
);

const StyledNav = styled.div`
  border: 2px solid blue;
  display: flex;
  // flex-direction: column;
  gap: 2rem;
  font-weight: 400;
`;

export default Nav;
