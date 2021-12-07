import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
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
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(res => res.json())
    .then(data => this.setState({movies: data.movies}))
    .catch(err => {
      this.setState({error: err})
    });   
  }

  changeSection = (section, id) => {
    this.setState({currentSection: section, selectedID: id});
  }

  filterMovies = (e) => {
    const filteredMovies = this.state.movies.filter(entry => entry.title.toLowerCase().includes(e.toLowerCase()))
    this.setState({
      filteredMovies: filteredMovies
    })
  }

  render() {
    return (
      <main className='App'>
        <Header filterMovies={this.filterMovies}/>
        <Routes>
          <Route path="/" element={<MovieContainer movies={this.state.movies} filteredMovies={this.state.filteredMovies} changeSection={this.changeSection}/>}/>
          <Route path="/:movieId" element={<SelectedPage />}/>
        </Routes>


        {this.state.error && <p>Something went wrong -- check your network</p>}
      </main>
    )
  }
}

export default App;
