import React from 'react';
import './SelectedMovie.css';

const SelectedMovie = () => {
  let num = 63000000
  return (
    <main className='selected-page'>
      <img className='selected-poster' src = 'https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg' />
      <section className='selected-details'>
       <h2>Fake Movie Title</h2>
       <p className='movie-detail overview'>Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!</p>
       <p className='movie-detail'><strong>Tagline: </strong>It's a movie!</p>
       <p className='movie-detail'><strong>Rating: </strong>⭐️ 6/10</p>
       <p className='movie-detail'><strong>Release Date: </strong>2019-12-04</p>
       <p className='movie-detail'><strong>Budget: </strong>${num.toLocaleString("en-US")}</p>
       <p className='movie-detail'><strong>Revenue: </strong>${num.toLocaleString("en-US")}</p>
       <p className='movie-detail'><strong>Runtime: </strong>139</p>
      </section>
    </main>
  )
}

export default SelectedMovie;