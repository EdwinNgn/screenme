const movies = document.querySelectorAll('.moviecard, .card-index')


if (movies) {
  movies.forEach((movie) => {
    const thumb = movie.querySelector('.fa-thumbs-down')
    thumb.addEventListener('click', (event) => {
      event.currentTarget.classList.toggle("far");
      event.currentTarget.classList.toggle("fas");
    })
  })
}

const showMovie = document.querySelector('.actions')

if (showMovie) {
  const thumb = showMovie.querySelector('.fa-thumbs-down')
  thumb.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle("far");
    event.currentTarget.classList.toggle("fas");
  })
}
