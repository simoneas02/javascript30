const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const places = [];

const searchInput = document.querySelector('.input');
const listCities = document.querySelector('.list');

const fetchCities = url => {
  return fetch(url)
    .then(response => response.json())
    .then(data => places.push(...data));
};

const matchCities = (event, places) =>
  places.filter(item =>
    item.city.toLowerCase().match(event.target.value.toLowerCase()),
  );

const matchStates = (event, places) =>
  places.filter(item =>
    item.state.toLowerCase().match(event.target.value.toLowerCase()),
  );

const showList = list => {
  const listElement = list
    .map(
      item =>
      `<p class="list__item">${item.city}, ${item.state}, ${item.population}</p>`,
    )
    .join('');

  listCities.innerHTML = listElement;
};

const onSearchChange = (event, places) => {
  fetchCities(endpoint);
  const list = [...matchCities(event, places), ...matchStates(event, places)];
  showList(list);
};

searchInput.addEventListener('change', e => onSearchChange(e, places));
searchInput.addEventListener('keyup', e => onSearchChange(e, places));
