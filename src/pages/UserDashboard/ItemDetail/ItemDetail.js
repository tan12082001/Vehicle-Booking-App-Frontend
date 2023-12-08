import React from 'react';
import DisplayItemCard from '../../../components/Card/DisplayItemCard';

const ItemDetail = () => {
  return(
    <DisplayItemCard
      name='VESPA 946'
      amount='20'
      description='-$350 deposit upon any Vespa purchase'
      imgSrc='../../../../src/components/asset/bike.jpg'
    />
  )
}

export default ItemDetail;
