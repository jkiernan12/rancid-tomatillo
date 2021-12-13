export const allMovieData = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(res => res.json())
  }

export const singleMovieData = (id) => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies/'+ id)
    .then(res => res.json())
}


  