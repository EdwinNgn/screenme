

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
