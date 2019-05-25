const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

const fetchCities_ = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then(data => cities.push(...data));
}

fetchCities_(endpoint);

console.log(cities)

const findMatches = (wordToMatch, cities) => {
  return cities.filter(place => {
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex)
  });
}

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
    return `
        <li>
          <span class="name">${cityName}, ${stateName}</span>
          <span class="population">${numberWithCommas(place.population)}</span>
        </li>
      `;
  }).join('');
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.container__input');
const suggestions = document.querySelector('.list');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);


const fetchCities = (text) => {
  this.setState({
    isLoading: true
  });


  fetch(endpoint)
    .then(
      `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`
    )
    .then(result => this._isMounted && this.setSearchTopStories(result.data))
    .catch(error => this._isMounted && this.setState({
      error
    }));
}
