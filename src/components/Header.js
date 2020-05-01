import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/crown.svg';
import './HeaderStyles.scss';

const Header = () => (
  <div className='Header'>
    <Link to='/'>
      <Logo className='logoContainer' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;