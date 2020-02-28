const list = document.querySelector('#results');


// If list afficher
if (list) {
  const insertMovies = (data) => {
    var huge_list = [];
    data.Search.slice(0,5).forEach((result) => {
      const movie = `
      <a href="/movies/${result.imdbID}" class="link-without-style">
        <li class="autocomplete-movies d-flex align-items-center">
          <img src="${result.Poster}" alt="" />
          <span>${result.Title} </span>
        </li>
      </a>`;
      huge_list.push(result.Title);
      list.insertAdjacentHTML('beforeend', movie);
    });
  };
  const fetchMovies = (query) => {
    fetch(`https://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
      .then(response => response.json())
      .then(insertMovies);
  };

  fetchMovies(''); // on 1st page load

  const form = document.querySelector('#search-form');
  form.addEventListener('keyup', (event) => {
    event.preventDefault();
    list.innerHTML = '';
    const input = document.querySelector('#search-input');
    fetchMovies(input.value);
  });
}

