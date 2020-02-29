const list = document.querySelector('#results');

// If list afficher
if (list) {
  const form = document.querySelector('#search-form');
  form.addEventListener("click", (event) => {
    event.preventDefault();
    const modal = document.getElementById("myOverlay");
    modal.style.display = "block"
  });
  const closing = document.querySelector('.closebtn')
  closing.addEventListener("click", (event) => {
    event.preventDefault();
    const modal = document.getElementById("myOverlay");
    modal.style.display = "none"
  });
  const input = document.querySelector('#search-input');
  input.focus();

  const insertMovies = (data) => {
    data.Search.slice(0,5).forEach((result) => {
      const movie = `
      <a href="/movies/${result.imdbID}" class="link-without-style">
        <li class="autocomplete-modal">
          <img src="${result.Poster}" alt="" />
        </li>
      </a>`;
      list.insertAdjacentHTML('beforeend', movie);
    });
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
