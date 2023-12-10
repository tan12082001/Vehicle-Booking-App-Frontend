import React from "react";

import styled from "@emotion/styled";

import { useDispatch } from "react-redux";

import navConfig from "./navConfig";
import { NavBoxItem } from "../../../components/Link/Link";
import { logoutUser } from "../../../redux/thunk";

const Nav = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    console.log('log out successful');
  }
  return (
    <Container>
      <NavbtnSection>
        {navConfig.map((nav) => (
          <NavBoxItem path={nav.path} key={nav.title}>
            {nav.title}
          </NavBoxItem>
        ))}
      </NavbtnSection>
      <LogoutBtn onClick={handleLogout}>
        <NavBoxItem path={'/'}>
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); 
  position: fixed;
  height: 100%;
  gap: 3.8rem;
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
  margin-top: 8rem;
`;

