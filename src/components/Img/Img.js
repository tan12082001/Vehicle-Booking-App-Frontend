import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import React from 'react';

const Img = ({ src, alt, className }) => <Imgg className={className} loading="lazy" src={src} alt={alt} decoding="async" />;

const Imgg = styled.img`
width: 100%;
`;

Img.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Img;
