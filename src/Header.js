import React from 'react';
import './Header.css';
import logo from './logo.svg';
import Form from './Form'

const Header = () => {
  return (
    <header>
    <img className='logo' src={logo} />
    <div className='search-container'>
      <h1>Rancid Tomatillos</h1>
      <Form />
    </div>
    </header>
  )
}

export default Header;