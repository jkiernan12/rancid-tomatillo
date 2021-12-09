import React from 'react';
import './Header.css';
import logo from './logo.svg';
import Form from './Form'

const Header = ({filterMovies}) => {
  return (
    <header>
    <img className='logo' src={logo} alt='logo' />
    <div className='search-container'>
      <h1>Rancid Tomatillos</h1>
      <Form 
        filterMovies={filterMovies}
      />
    </div>
    </header>
  )
}

export default Header;