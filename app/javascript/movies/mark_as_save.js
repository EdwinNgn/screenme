

const movies = document.querySelectorAll('.moviecard, .card-index')

if (movies) {
  movies.forEach((movie) => {
    const bookmark = movie.querySelector('.fa-bookmark')
    bookmark.addEventListener('click', (event) => {
      event.currentTarget.classList.toggle("far");
      event.currentTarget.classList.toggle("fas");
    })
  })
}

const showMovie = document.querySelector('.actions')

if (showMovie) {
  console.log('hello')
  const bookmark = showMovie.querySelector('.fa-bookmark')
  bookmark.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle("far");
    event.currentTarget.classList.toggle("fas");
  })
}

const collapses = document.querySelectorAll('.collapse-card')

if(collapses){
  collapses.forEach((collapse) => {
    const thumb = collapse.querySelector('.fa-bookmark')
    thumb.addEventListener('click', (event) => {
      console.log(event);
      event.currentTarget.classList.toggle("far");
      event.currentTarget.classList.toggle("fas");
    })
  })
}
