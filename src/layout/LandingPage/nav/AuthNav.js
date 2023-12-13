import React from 'react';

import styled from '@emotion/styled';

import TertiaryButton from '../../../components/Button/TertiaryButton';
import { ButtonLink } from '../../../components/Link/Link';
import { ACCOUNT, SIGNIN, SIGNUP } from '../../../routes/routeConstants';

const AuthNav = () => (
  <Container className='sign-in-signup-buttons-container'>
    <ButtonLink to={`${ACCOUNT}/${SIGNIN}`}>
      <TertiaryButton className="grey">Sign In</TertiaryButton>
    </ButtonLink>

    <ButtonLink to={`${ACCOUNT}/${SIGNUP}`}>
      <TertiaryButton className="grey">Sign Up</TertiaryButton>
    </ButtonLink>
  </Container>
);

const Container = styled.div`
  // border: 2px solid green;
  display: flex;
  gap: 2rem;
  margin-top: 5rem;
  margin-bottom: 5rem;
  margin-left: 2rem;
  // padding-left: -2rem;
  padding-right: -5rem;
  justify-content: center;
  // margin-left: 8rem;
`;

export default AuthNav;
