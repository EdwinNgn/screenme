const list = document.querySelector('#results');

// If list afficher
if (list) {
  const form = document.querySelector('#search-button');
  form.addEventListener("click", (event) => {
    event.preventDefault();
    const modal = document.getElementById("myOverlay");
    modal.style.display = "block"
    document.getElementById("search-input").focus()
    document.getElementById("text-td").style.display = "none"
  });
  const closing = document.querySelector('.closebtn')
  closing.addEventListener("click", (event) => {
    event.preventDefault();
    const modal = document.getElementById("myOverlay");
    modal.style.display = "none"
    document.getElementById("text-td").style.display = "block"
  });
  const input = document.querySelector('#search-input');
  input.focus();

  const insertMovies = (data) => {

    if (data.Search) {

      data.Search.slice(0,5).forEach((result) => {
        const movie = `
        <a href="/movies/${result.imdbID}" class="link-without-style autocomplete-modal">
            <img src="${result.Poster}" alt="" />
        </a>`;
        list.insertAdjacentHTML('beforeend', movie);
      });

    }

  };
  const fetchMovies = (query) => {
    fetch(`https://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
      .then(response => response.json())
      .then(insertMovies);
  };

  fetchMovies(''); // on 1st page load

  const request = document.querySelector('#search-form2');
  const btn = document.querySelector('#btn-overlay');
  request.addEventListener('keyup', (event) => {
    event.preventDefault();
    list.innerHTML = '';
    const input = document.querySelector('#search-input');
    fetchMovies(input.value);
    btn.style.display = "block"
  });
}
