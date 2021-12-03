import React from 'react'
import './Poster.css'

const Poster = ({id, poster_path, backdrop_path, title, average_rating, release_date}) => {
  return (
    <div className='poster'>
      <h1>{title}</h1>
      <p>{average_rating}</p>
    </div>


  )
}

export default Poster

