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
    if (thumb.classList.value.split(" ").includes('far')) {
      const likedown = document.querySelector('.like-down');
      let likedown_number = parseInt(likedown.innerText.replace(/\D+/g, '')) - 1;
      likedown.innerHTML = `<i class="fas fa-thumbs-down"></i> <span>${likedown_number} likes</span>`;
    }
    else {
      const likedown = document.querySelector('.like-down');
      let likedown_number = parseInt(likedown.innerText.replace(/\D+/g, '')) + 1;
      likedown.innerHTML = `<i class="fas fa-thumbs-down"></i> <span>${likedown_number} likes</span>`;
    }
  })
}

const collapses = document.querySelectorAll('.collapse-card')

if(collapses){
  collapses.forEach((collapse) => {
    const thumb = collapse.querySelector('.fa-thumbs-down')
    thumb.addEventListener('click', (event) => {
      console.log(event);
      event.currentTarget.classList.toggle("far");
      event.currentTarget.classList.toggle("fas");
    })
  })
}
