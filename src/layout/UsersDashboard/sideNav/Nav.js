import React from 'react';

import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import userIcon from '../../../assets/user.png';
import navConfig from './navConfig';
import { NavBoxItem } from '../../../components/Link/Link';
import { logoutUser } from '../../../redux/thunk';
import { HOME } from '../../../routes/routeConstants';

const Nav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const username = useSelector((state) => state.authentication.authenticatedUser.username);
  const status = useSelector((state) => state.authentication.status);
  const handleLogout = () => {
    if (status === 'succeeded') {
      dispatch(logoutUser());
      localStorage.removeItem('authenticationStatus');
      navigate(`${HOME}`);
    }
  };
  if (status === 'loading') {
    return <p>{`${username} signin out!`}</p>;
  }

  return (
    <Container>
      <div className="user-icon-name">
        <img src={userIcon} alt="user-icon" className="nav-panel-user-icon" />
        <h4>{username}</h4>
      </div>
      <NavbtnSection>
        {navConfig.map((nav) => (
          <NavBoxItem path={nav.path} key={nav.title}>
            {nav.title}
          </NavBoxItem>
        ))}
      </NavbtnSection>
      <LogoutBtn onClick={handleLogout}>
        <NavBoxItem>
          Logout
        </NavBoxItem>
      </LogoutBtn>
    </Container>
  );
};

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
  margin-top: 2rem;
`;
