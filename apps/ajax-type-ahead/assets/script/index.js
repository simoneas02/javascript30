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
    .then(data => places = [...places, ...data]);
};

fetchCities(endpoint);

const matchString = (event, places, text) =>
  places.filter(item =>
    item[text].toLowerCase().match(event.target.value.toLowerCase()),
  );

const onSearchChange = (event, places) => {
  const list = [...matchString(event, places, 'city'), ...matchString(event, places, 'state')];
  const listElement = list.map(item => {
    const regex = new RegExp(event.target.value, 'gi');
    const cityName = item.city.replace(regex, `<span class="list__item_high-light">${event.target.value}</span>`);
    const stateName = item.state.replace(regex, `<span class="list__item_high-light">${event.target.value}</span>`);
    return `<li class="list__item"><p>${cityName},${stateName}</p><span class="list__item__population">${item.population}</span></li>`
  }).join('');

  listCities.innerHTML = listElement;
};

const resetInput = el => {
  el.value = '';
};

searchInput.addEventListener('change', e => onSearchChange(e, places));
searchInput.addEventListener('keyup', e => onSearchChange(e, places));
container.addEventListener('click', e => resetInput(searchInput));