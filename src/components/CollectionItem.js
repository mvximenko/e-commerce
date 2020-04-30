import React from 'react';
import './CollectionItemStyles.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className='CollectionItem'>
    <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className='collectionFooter'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
  </div>
);

export default CollectionItem;