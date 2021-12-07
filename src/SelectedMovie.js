import React, { Component } from 'react';
import Trailer from './Trailer.js'
import './SelectedMovie.css';

class SelectedMovie extends Component {
  constructor() {
    super()
    this.state = {
      movieInfo: {}
    }
  }

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies/'+ this.props.id)
    .then(res => res.json())
    .then(data => this.setState({movieInfo: data.movie}))
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
        <img className='selected-poster' src={movie.poster_path} />
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
          <button className='return-button' onClick={() => this.props.changeSection('mainPage')}>Return</button>
        </section>}
      </main>
    )
  }
}

export default SelectedMovie;