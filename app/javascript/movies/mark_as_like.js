const movies = document.querySelectorAll('.moviecard, .card-index')

if (movies) {
  movies.forEach((movie) => {
    const thumb = movie.querySelector('.fa-thumbs-up')
    thumb.addEventListener('click', (event) => {
      event.currentTarget.classList.toggle("far");
      event.currentTarget.classList.toggle("fas");
    })
  })
}

const showMovie = document.querySelector('.actions')

if (showMovie) {
  const thumb = showMovie.querySelector('.fa-thumbs-up')
  thumb.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle("far");
    event.currentTarget.classList.toggle("fas");
    if (thumb.classList.value.split(" ").includes('far')) {
      const likeup = document.querySelector('.like-up');
      let likeup_number = parseInt(likeup.innerText.replace(/\D+/g, '')) - 1;
      likeup.innerHTML = `<i class="fas fa-thumbs-up"></i>${likeup_number} likes`
    }
    else {
      const likeup = document.querySelector('.like-up');
      let likeup_number = parseInt(likeup.innerText.replace(/\D+/g, '')) + 1;
      likeup.innerHTML = `<i class="fas fa-thumbs-up"></i>${likeup_number} likes`
    }
  })

}


const collapses = document.querySelectorAll('.collapse-card')

if(collapses){
  collapses.forEach((collapse) => {
    const thumb = collapse.querySelector('.fa-thumbs-up')
    thumb.addEventListener('click', (event) => {
      console.log(event);
      event.currentTarget.classList.toggle("far");
      event.currentTarget.classList.toggle("fas");
    })
  })
}
