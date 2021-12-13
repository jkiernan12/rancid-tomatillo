export const allMovieData = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(res => res.json())
    .catch(err => showError(err))
  }

export const singleMovieData = (id) => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies/'+ id)
    .then(res => res.json())
    .catch(err => showError(err))
}


    
   
   
const showError = (err) => {
  const errorField = document.querySelector("#errorField")
  if (err.message === "Failed to fetch") {
    errorField.innerText = `Hey something went wrong - check your network`
  } else {
    errorField.innerText = `${err.message}`
  }