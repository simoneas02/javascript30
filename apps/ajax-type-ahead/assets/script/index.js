const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

let places = [];

const getEl = el => document.querySelector(el);

const searchInput = getEl('.input');
const listCities = getEl('.list');
const container = getEl('.container');

const fetchCities = url => {
  return fetch(url)
    .then(response => response.json())
    .then(data => places.push(...data));
};

fetchCities(endpoint);

const matchString = (event, places, text) =>
  places.filter(item =>
    item[text].toLowerCase().match(event.target.value.toLowerCase()),
  );

const showList = list => {
  const listElement = list.map(item => `<li class="list__item"><p>${item.city}, ${item.state}, ${item.population}</p></li>`).join(' ');

  listCities.innerHTML = listElement;
};

const onSearchChange = (event, places) => {
  const list = [...matchString(event, places, 'city'), ...matchString(event, places, 'state')];
  showList(list);
};

const resetInput = el => {
  el.value = '';
  showList(places);
};

searchInput.addEventListener('change', e => onSearchChange(e, places));
searchInput.addEventListener('keyup', e => onSearchChange(e, places));
container.addEventListener('click', e => resetInput(searchInput));
