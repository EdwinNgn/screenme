

const movies = document.querySelectorAll('.moviecard, .card-index')


if (movies) {
  movies.forEach((movie) => {
    const eye = movie.querySelector('.fa-eye-slash')
    eye.addEventListener('click', (event) => {
      event.currentTarget.classList.toggle("far");
      event.currentTarget.classList.toggle("fas");
    })
  })
}

const showMovie = document.querySelector('.actions')

if (showMovie) {
  const eye = showMovie.querySelector('.fa-eye-slash')
  eye.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle("far");
    event.currentTarget.classList.toggle("fas");
  })
}

const collapses = document.querySelectorAll('.collapse-card')

if(collapses){
  collapses.forEach((collapse) => {
    const thumb = collapse.querySelector('.fa-eye-slash')
    thumb.addEventListener('click', (event) => {
      console.log(event);
      event.currentTarget.classList.toggle("far");
      event.currentTarget.classList.toggle("fas");
    })
  })
}

const moviesLike = document.querySelectorAll('.actions-recommendation')
if (moviesLike) {
  moviesLike.forEach((movie) => {
    const thumb = movie.querySelector('.fa-eye-slash')
    thumb.addEventListener('click', (event) => {
      event.currentTarget.classList.toggle("far");
      event.currentTarget.classList.toggle("fas");
    })
  })
}
