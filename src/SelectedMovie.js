import React, { Component } from 'react';
import Trailer from './Trailer.js'
import { Link } from 'react-router-dom'; 
import { singleMovieData } from './fetch.js';
import './SelectedMovie.css';

class SelectedMovie extends Component {
  constructor() {
    super()
    this.state = {
      movieInfo: {},
      error: ''
    }
  }

  componentDidMount() {
    return singleMovieData(this.props.id)
      .then(data => this.setState({movieInfo: data.movie}))
      .catch(err => {
        this.setState({error: err})
      });
  }

  getDate = (dateStr) => {
    const months = ['January', 'December', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let date = new Date(dateStr);
    return `${months[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()}`
  }
  
  getTime = (mins) => {
    const hours = Math.floor(mins / 60);
    const remainingMins = mins % 60;
    return `${hours} ${(hours > 1) ? 'hours' : 'hour'} ${remainingMins} minutes`
  }

  formatNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(num);
  }
  
  render() {
    const movie = this.state.movieInfo;
    return (
      <main className='selected-page'>
        <img className='selected-poster' src={movie.poster_path} alt='movie poster' />
        {movie.title && <section className='selected-details'>
          <h2 className='selected-title'>{movie.title}</h2>
          <p className='movie-detail overview'>{movie.overview}</p>
          {movie.tagline && <p className='movie-detail'><strong>Tagline: </strong>{movie.tagline}</p>}
          <p className='movie-detail'><strong>Rating: </strong>⭐️ {Math.round(movie.average_rating)}/10</p>
          <p className='movie-detail'><strong>Genres: </strong> {movie.genres.join(', ')}</p>
          <p className='movie-detail'><strong>Release Date: </strong>{this.getDate(movie.release_date)}</p>
          {Number(movie.budget) > 0 && <p className='movie-detail'><strong>Budget: </strong>${this.formatNumber(movie.budget)}</p>}
          {Number(this.formatNumber(movie.revenue)) > 0 && <p className='movie-detail'><strong>Revenue: </strong>${movie.revenue}</p>}
          <p className='movie-detail'><strong>Runtime: </strong>{this.getTime(movie.runtime)}</p>
          <Trailer id={movie.id}/>
          <Link to="/">
          <button className='return-button'>Return</button>
          </Link>
        </section>}
        {this.state.error && <p>Something went wrong -- check your network</p>}
      </main>
    )
  }
}

export default SelectedMovie;