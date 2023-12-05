import React from 'react';
import styled from '@emotion/styled';

const IconImg = ({ src }) => {
  return (
    <ImageContainer>
      <Img loading="lazy" src={src} alt="user" />
    </ImageContainer>
  );
};

export default IconImg;

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
