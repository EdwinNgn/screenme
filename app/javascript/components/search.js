const list = document.querySelector('#results');
var huge_list = document.querySelector('#huge_list');

const insertMovies = (data) => {
  var huge_list = [];
  data.Search.forEach((result) => {
    const movie = `<li class="autocomplete-movies d-flex">
      <img src="${result.Poster}" alt="" />
      <a href="https://www.w3schools.com/html/">${result.Title}</a>
    </li>`;
    huge_list.push(result.Title);
    console.log(huge_list);
    list.insertAdjacentHTML('beforeend', movie);
  });
};

const fetchMovies = (query) => {
  fetch(`http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
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
