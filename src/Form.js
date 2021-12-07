import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <form>
        <input 
          className='search-bar' 
          type="text" 
          name="search" 
          placeholder="search for a movie"
          onChange={(e) => this.props.filterMovies(e.target.value)}
        />
      </form>
    )
  }
}

export default Form;