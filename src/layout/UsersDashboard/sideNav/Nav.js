import React from "react";

import styled from "@emotion/styled";

import navConfig from "./navConfig";
import { NavBoxItem } from "../../../components/Link/Link";

const Nav = () => {
  return (
    <Container>
      <NavbtnSection>
        {navConfig.map((nav) => (
          <NavBoxItem path={nav.path} key={nav.title}>
            {nav.title}
          </NavBoxItem>
        ))}
      </NavbtnSection>
      <LogoutBtn>
        <NavBoxItem path={'/account/signin'}>
          Logout
        </NavBoxItem>
      </LogoutBtn>
    </Container>
  )
}

export default Nav;

const Container = styled.nav`
  /* border: 2px solid blue; */
  padding: 2.69rem 2rem 3.75rem 2rem;
  display: flex;
  background-color: white;

  flex-direction: column;
  gap: 3.8rem;
//   position: fixed;
  top: 0;

  & > a > div {
    margin-left: 1rem;
  }
`;

const NavbtnSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const LogoutBtn = styled.div`
  margin-top: auto;
`;

