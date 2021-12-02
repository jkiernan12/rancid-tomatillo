import React, { Component } from 'react';
import './App.css'
import movieData from './MovieData'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: movieData.movies
    }
  }

  render() {
    return (
      <main className='App'>
        <h1>Movies</h1>
        <MovieContainer movies={this.state.movies}/>
      </main>
    )
  }


}

export default App;
