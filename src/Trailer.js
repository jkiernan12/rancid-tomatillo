import React, { Component } from 'react';
import './Trailer.css';

class Trailer extends Component {
  constructor() {
    super()
    this.state = {
      trailerInfo: {}
    }
  }
  componentDidMount() {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.id}/videos`)
    .then(res => res.json())
    .then(data => {
      const selectedTrailer = data.videos.find(movie => movie.type === 'Trailer');
      console.log(selectedTrailer)
      this.setState({trailerInfo: selectedTrailer});
    })
  }

  render() {
    const trailer = this.state.trailerInfo;
    return (
      <React.Fragment>
        {trailer.id && <article className="trailer">
          <h3 className="trailer-title">Trailer</h3>
          <iframe className="trailer-video"  src={"https://www.youtube.com/embed/" + trailer.key} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </article>}
      </React.Fragment>
    )
  }
}

export default Trailer;