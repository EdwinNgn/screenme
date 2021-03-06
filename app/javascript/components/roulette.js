const roulette = () => {
  const btnOpenModal = document.querySelector('.openBtn')
  const btnAnotherMovie = document.querySelector('.anothermovie')
  const btnCloseModal = document.querySelector('.closerandommovie');
  const modal = document.getElementById("myOverlay");
  const randomMovies = document.getElementById('random-movies');


  // If list afficher d
  if (btnOpenModal && randomMovies ) {
      const movies = JSON.parse(randomMovies.dataset.movies)
      btnOpenModal.addEventListener("click", (event) => {
        event.preventDefault();
        const modal = document.getElementById("myOverlay");
        modal.style.display = "block"
        document.getElementById("profile-page").style.display = "none"
        const movie = movies[Math.floor(Math.random() * movies.length)]

        document.getElementById('modalTitle').innerText = movie.Title
        document.getElementById('modalImage').attributes['src'].value = movie.Poster
        document.getElementById('modalSynopsis').innerText = movie.Plot
        document.getElementById('modalLink').attributes['href'].value = "/movies/" + movie.imdbID

        $(document).ready(function() {
          $('.has-animation').each(function(index) {
            $(this).delay($(this).data('delay')).queue(function(){
              $(this).addClass('animate-in');
            });
          });
        });
      });

      btnAnotherMovie.addEventListener('click', (event) => {
        btnCloseModal.click();
        setTimeout(() => btnOpenModal.click(), 100);
      })

      btnCloseModal.addEventListener("click", (event) => {
        event.preventDefault();
        modal.style.display = "none"
        document.querySelector(".footer").style.display = "block"
        document.getElementById("profile-page").style.display = "block"
      });
  }
}

export { roulette }


