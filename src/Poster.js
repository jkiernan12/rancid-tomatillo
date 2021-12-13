import React from 'react'
import './Poster.css'

const Poster = ({poster_path, title}) => {
  return (
    <div className='poster'>
      <img className='poster-img' src={poster_path} alt="Movie poster" />
      <h2 className='poster-title'>{title}</h2>
    </div>
  )
}

export default Poster

