import PropTypes from 'prop-types';

import { NavLink as RouterLink } from 'react-router-dom';

import styled from '@emotion/styled';

export const InternalNavLink = styled(RouterLink)`
  text-decoration: none;
  color: grey;
  font-weight: 400;

  &.footer {
    color: black;
  }
`;

export const ButtonLink = styled(RouterLink)`
  text-decoration: none;
  font-size: rem;
  color: grey;
  font-weight: 500;
`;

export const NavBoxItem = ({ icon, path, children }) => (
  <NavigationBoxLink
    className={(navData) => (navData.isActive ? 'active' : '')}
    to={path}
  >
    {icon}
    {children}
  </NavigationBoxLink>
);

export const NavigationBoxLink = styled(RouterLink)`
  text-decoration: none;
  color: grey;
  display: flex;
  gap: 1.25rem;

  padding: 0.81rem 1.31rem;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: 400;
  display: flex;
  align-items: center;

  &:hover {
    color: grey;
  }

  &.active {
    background-color: #2858d128;
    color: blue;
  }
`;

NavBoxItem.propTypes = {
  icon: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
