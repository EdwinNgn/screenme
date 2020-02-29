const list = document.querySelector('#results');
// const overlay = document.querySelector('.myOverlay')

// If list afficher
if (list) {
  const insertMovies = (data) => {
    data.Search.slice(0,5).forEach((result) => {
      const movie = `
      <a href="/movies/${result.imdbID}" class="link-without-style">
        <li class="autocomplete-movies d-flex align-items-center">
          <img src="${result.Poster}" alt="" />
          <span>${result.Title} </span>
        </li>
      </a>`;
      list.insertAdjacentHTML('beforeend', movie);
    });
    const seemore = `
      <a class ="d-flex justify-content-center link-without-style">
        <li class=" autocomplete-movies autocomplete-btn d-flex align-items-center ">
          <button type="submit" value="Search">
            <p>Get more for ${form[0].value}</p>
          </button>
        </li>
      </a>`;
    list.insertAdjacentHTML('beforeend', seemore);
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




// if (overlay) {
  // overlay.addEventListener('keyup', (event) => {
    // console.log("je suis la")
  // });
// }
//Open the full screen search box
// function openSearch() {
  // overlay.style.display = "block";
// }
//
//Close the full screen search box
// function closeSearch() {
  // overlay.style.display = "none";
// }
