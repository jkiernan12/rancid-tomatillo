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
      movies: movieData.movies,
      currentSection: 'mainPage',
    }
  }

  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(res => res.json())
    .then(data => this.setState({movies: data.movies}));
  }

  changeSection = (section) => {
    this.setState({currentSection: section});
  }

  render() {
    return (
      <main className='App'>
        <Header />
        {(this.state.currentSection === 'mainPage') ? <MovieContainer movies={this.state.movies} currentSection={this.state.currentSection} changeSection={this.changeSection}/> : <SelectedMovie changeSection={this.changeSection} />}
      </main>
    )
  }


}

export default App;
