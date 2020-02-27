

const movies = document.querySelectorAll('.moviecard')


movies.forEach((movie) => {
  const thumb = movie.querySelector('.fa-bookmark')
  thumb.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle("far");
    event.currentTarget.classList.toggle("fas");
  })
})
