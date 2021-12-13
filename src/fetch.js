export const allMovieData = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        throw res.message
      }
    })
  }

export const singleMovieData = (id) => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies/'+ id)
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        throw res.message
      }
    })
}


  