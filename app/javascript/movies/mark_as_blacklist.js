

const movies = document.querySelectorAll('.moviecard')



movies.forEach((movie) => {
  const thumb = movie.querySelector('.fa-eye-slash')
  thumb.addEventListener('click', (event) => {
    console.log(event.currentTarget.classList)
    event.currentTarget.classList.toggle("far");
    event.currentTarget.classList.toggle("fas");
  })
})
