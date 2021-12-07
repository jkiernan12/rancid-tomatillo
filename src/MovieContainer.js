import React from 'react';
import Poster from './Poster'
import { Link } from 'react-router-dom';
import './MovieContainer.css'

const MovieContainer = ({movies, changeSection, filteredMovies}) => {
  const movieCards = movies.map(movie => {
    return (
      <Link to={'/' + movie.id} className='movie-link'>
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
      </Link>
    )
  })

  const filteredMovieCards = filteredMovies.map(movie => {
    return (
      <Link to={'/' + movie.id} className='movie-link'>
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
      </Link>
    )
  })

  return (
      <div className='movie-container'>
        {!filteredMovies.length ? movieCards : filteredMovieCards}
      </div>
  )
}

export default MovieContainer