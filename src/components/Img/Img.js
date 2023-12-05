import styled from '@emotion/styled';
import React from 'react';

const Img = ({ src, alt, className }) => {
  return <Imgg className={className} loading="lazy" src={src} alt={alt} decoding="async" />;
};

export default Img;

const Imgg = styled.img`
width: 100%;
`;
