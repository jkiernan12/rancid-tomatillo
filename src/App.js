import React, { Component } from 'react';
import MovieContainer from './MovieContainer';
import './App.css';
import movieData from './MovieData';
import Header from './Header';
import SelectedMovie from './SelectedMovie';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: movieData.movies
    }
  }

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(res => res.json())
    .then(data => this.setState({movies: data.movies}))
  }

  render() {
    return (
      <main className='App'>
        <Header />
        <SelectedMovie />
        <MovieContainer movies={this.state.movies}/>
      </main>
    )
  }


}

export default App;
