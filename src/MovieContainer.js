import React from 'react';
import Poster from './Poster'
import './MovieContainer.css'

const MovieContainer = ({movies, changeSection, filteredMovies}) => {
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
        changeSection={changeSection}
      />
    )
  })

  const filteredMovieCards = filteredMovies.map(movie => {
    return (
      <Poster 
        id={movie.id}
        poster_path={movie.poster_path}
        backdrop_path={movie.backdrop_path}
        title={movie.title}
        average_rating={movie.average_rating}
        release_date={movie.release_date}
        key={movie.id}
        changeSection={changeSection}
      />
    )
  })

  return (
      <div className='movie-container'>
        {!filteredMovies.length ? movieCards : filteredMovieCards}
      </div>
  )
}

export default MovieContainer