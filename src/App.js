import React, { Component } from 'react';
import MovieContainer from './MovieContainer';
import './App.css';
import Header from './Header';
import SelectedMovie from './SelectedMovie';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      currentSection: 'mainPage',
      error: ''
    }
  }

  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(res => res.json())
    .then(data => this.setState({movies: data.movies}))
    .catch(err => {
      this.setState({error: err})
    });
  }

  changeSection = (section) => {
    this.setState({currentSection: section});
  }

  render() {
    return (
      <main className='App'>
        <Header />
        {this.state.error && <p>Something went wrong -- check your network</p>}
        {this.state.currentSection === 'mainPage' ? 
        <MovieContainer movies={this.state.movies} changeSection={this.changeSection}/> : 
        <SelectedMovie changeSection={this.changeSection} />}
      </main>
    )
  }


}

export default App;
