import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { allMovieData } from './fetch';
import MovieContainer from './MovieContainer';
import './App.css';
import Header from './Header';
import SelectedPage from './SelectedPage';

class App extends Component {
  constructor() { 
    super()
    this.state = {
      movies: [],
      filteredMovies: [],
      currentSection: 'mainPage',
      selectedID: 0,
      error: ''
    }
  }

  componentDidMount = () => {
    return allMovieData()
      .then(data => this.setState({ movies: data.movies }))
      .catch(err => {
        this.setState({error: err})
      });
  }

  filterMovies = (e) => {
    const filteredMovies = this.state.movies.filter(entry => entry.title.toLowerCase().includes(e.toLowerCase()))
    this.setState({filteredMovies})
  }

  render() {
    return (
      <main className='App'>
        <Header filterMovies={this.filterMovies}/>
        <Routes>
          <Route path="/" element={<MovieContainer movies={this.state.movies} filteredMovies={this.state.filteredMovies} />}/>
          <Route path="/:movieId" element={<SelectedPage />}/>
        </Routes>
        {this.state.error && <p>Something went wrong -- check your network</p>}
      </main>
    )
  }
}

export default App;
