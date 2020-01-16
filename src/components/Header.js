import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

export default function Header() {
  return (
    <div className='navbar'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/page-one'>Page One</Link>
        </li>
        <li>
          <Link to='/page-two'>Page Two</Link>
        </li>
      </ul>
    </div>
  );
}
