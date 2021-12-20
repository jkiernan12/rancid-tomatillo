import React, { Component } from 'react';
import './Trailer.css';
import {movieTrailerData} from './fetch';

class Trailer extends Component {
  constructor() {
    super()
    this.state = {
      trailerInfo: {}
    }
  }
  componentDidMount() {
    movieTrailerData(this.props.id)
      .then(data => {
        const selectedTrailer = data.videos.find(movie => {
          return movie.type === 'Trailer'
        });
        this.setState({trailerInfo: selectedTrailer});
      })
  }

  render() {
    const trailer = this.state.trailerInfo;
    return (
      <React.Fragment>
        {trailer && <article className="trailer">
          <h3 className="trailer-title">Trailer</h3>
          <iframe className="trailer-video"  
            src={"https://www.youtube.com/embed/" + trailer.key} 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen></iframe>
        </article>}
      </React.Fragment>
    )
  }
}

export default Trailer;