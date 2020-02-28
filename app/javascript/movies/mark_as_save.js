

const movies = document.querySelectorAll('.moviecard')

if (movies) {
  movies.forEach((movie) => {
    const bookmark = movie.querySelector('.fa-bookmark')
    bookmark.addEventListener('click', (event) => {
      event.currentTarget.classList.toggle("far");
      event.currentTarget.classList.toggle("fas");
    })
  })
}

const showMovie = document.getElementById('on-show-movie')

if (showMovie) {
  console.log('hello')
  const bookmark = showMovie.querySelector('.fa-bookmark')
  bookmark.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle("far");
    event.currentTarget.classList.toggle("fas");
  })
}
