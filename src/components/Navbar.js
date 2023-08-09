import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <div>
        <nav className='navbar'>
            <img src={require('../images/globe.png')} alt="globe" />
            <h4>my travel journal</h4>
        </nav>
    </div>
  )
}
