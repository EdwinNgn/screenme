const movies = document.querySelectorAll('.moviecard')
console.log(movies)


movies.forEach((movie) => {
  const thumb = movie.querySelector('.fa-thumbs-down')
  thumb.addEventListener('click', (event) => {
    console.log(event.currentTarget.classList)
    event.currentTarget.classList.toggle("far");
    event.currentTarget.classList.toggle("fas");
  })
})
