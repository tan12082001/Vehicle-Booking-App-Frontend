import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DisplayCartCard = ({
  id, imgSrc, name, shortNote,
}) => (
  <Container to={`/u/dashboard/item-details/${id}`}>
    <Image src={imgSrc} alt={name} />
    <Content>
      <Name>{name}</Name>
      <Note>{shortNote}</Note>
      <Icons>
        <IconLink href="#" target="_blank">
          <FaFacebook />
        </IconLink>
        <IconLink href="#" target="_blank">
          <FaTwitter />
        </IconLink>
        <IconLink href="#" target="_blank">
          <FaInstagram />
        </IconLink>
      </Icons>
    </Content>
  </Container>
);

DisplayCartCard.propTypes = {
  id: PropTypes.number.isRequired,
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  shortNote: PropTypes.string.isRequired,
};

const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  width: 300px;
//   border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  border: 1px solid blue;
  border-radius: 50%;
  margin-top: 1rem;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 16px;
  align-items: center;
  text-align: center;
`;

const Name = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 8px;
`;

const Note = styled.p`
  font-size: 1rem;
  margin-bottom: 16px;
`;

const Icons = styled.div`
  display: flex;
  gap: 15px;
  margin-left: 5rem;
`;

const IconLink = styled.a`
  color: #333;
  font-size: 1.5rem;
`;

export default DisplayCartCard;
