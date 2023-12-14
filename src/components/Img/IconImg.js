import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';

const IconImg = ({ src }) => (
  <ImageContainer>
    <Img loading="lazy" src={src} alt="user" />
  </ImageContainer>
);

const ImageContainer = styled.div`
  /* border: 2px solid red; */
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  overflow: hidden;
`;

const Img = styled.img`
  object-fit: cover;
  object-position: center;
`;

IconImg.propTypes = {
  src: PropTypes.string.isRequired,
};

export default IconImg;
