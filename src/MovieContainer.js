import React, { Component } from 'react';
// import Poster from './Poster'

const Movies = ({movies}) => {
  const movieCards = movies.map(movie => {
    return (
      <Poster 
        id={movie.id}
        poster_path={movie.poster_path}
        backdrop_path={movie.backdrop_path}
        title={movie.title}
        average_rating={movie.average_rating}
        release_date={movie.release_date}
      />
    )


  })
}


export default MovieContainer