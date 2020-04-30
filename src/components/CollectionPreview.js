import React from 'react';
import CollectionItem from './CollectionItem';
import './CollectionPreviewStyles.scss';

const CollectionPreview = ({ title, items }) => (
  <div className='CollectionPreview'>
    <h1 className='title'>{title}</h1>
    <div className='preview'>
      {items
        .filter((item, index) => index < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;