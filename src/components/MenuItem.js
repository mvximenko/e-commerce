import React from 'react';
import { withRouter } from 'react-router-dom';
import './MenuItemStyles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} MenuItem`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className='backgroundImage'
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className='content'>
      <h1 className='title'>{title}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);