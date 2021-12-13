import React from 'react';
import './Form.css';

const Form = ( {filterMovies} ) => {
  return (
    <form>
      <input 
        className='search-bar' 
        type="text" 
        name="search" 
        placeholder="search for a movie"
        onChange={(e) => filterMovies(e.target.value)}
      />
    </form>
  )
}

export default Form;