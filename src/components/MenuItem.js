import React from 'react';
import './MenuItemStyles.scss';

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} MenuItem`}>
    <div
      className='backgroundImage'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;