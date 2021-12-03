import React from 'react';
import Poster from './Poster'
import './MovieContainer.css'

const MovieContainer = ({movies}) => {
  const movieCards = movies.map(movie => {
    return (
      <Poster 
        id={movie.id}
        poster_path={movie.poster_path}
        backdrop_path={movie.backdrop_path}
        title={movie.title}
        average_rating={movie.average_rating}
        release_date={movie.release_date}
        key={movie.id}
      />
    )
  })

  return (
    <div className='movie-container'>
      {movieCards}
    </div>
  )
}


export default MovieContainer