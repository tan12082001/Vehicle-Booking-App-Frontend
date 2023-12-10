import React from 'react';
import DisplayItemCard from '../../../components/Card/DisplayItemCard';
import styled from '@emotion/styled';
import Bike from '../../../../src/components/asset/bike.jpg'

const ItemDetail = () => {
  return(
    <Container>
      <DisplayItemCard
        name='VESPA 946'
        amount='20'
        description='-$350 deposit upon any Vespa purchase'
        imgSrc={Bike}
      />
    </Container>
  )
}

export default ItemDetail;

const Container = styled.div`
//   border: 1px solid blue;
  margin-right: -5rem;
  margin-bottom: -5rem;
//   margin-top: -3rem;
`;