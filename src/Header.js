import React from 'react';
import './Header.css';
import movie from './movie.png';
import Form from './Form'

const Header = ({filterMovies}) => {
  return (
    <header>
      <img className='logo' src={movie} alt='movie' />
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