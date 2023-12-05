import React from 'react';

import styled from '@emotion/styled';

import { TertiaryButton } from '../../../components/Button/TertiaryButton';
import { ButtonLink } from '../../../components/Link/Link';
import { ACCOUNT, SIGNIN, SIGNUP } from '../../../routes/routeConstants';

const AuthNav = () => {
  return (
    <Container>
      <ButtonLink to={`${ACCOUNT}/${SIGNIN}`}>
        <TertiaryButton className="grey">Sign In</TertiaryButton>
      </ButtonLink>

      <ButtonLink to={`${ACCOUNT}/${SIGNUP}`}>
        <TertiaryButton>Sign Up</TertiaryButton>
      </ButtonLink>
    </Container>
  );
};

const Container = styled.div`
  /* border: 2px solid green; */
  display: flex;
  gap: 2rem;
`;

export default AuthNav;
