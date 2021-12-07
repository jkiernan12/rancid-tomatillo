import React from 'react'
import './Poster.css'

const Poster = ({id, poster_path, backdrop_path, title, average_rating, release_date}) => {
  return (
    <div className='poster'>
      <img className='poster-img' src={poster_path} alt="Movie poster" />
      <h2 className='poster-title'>{title}</h2>
    </div>
  )
}

export default Poster

