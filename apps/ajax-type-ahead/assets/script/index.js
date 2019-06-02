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

const regex = event => new RegExp(event, 'gi');

const matchString = (event, places, text) =>
  places.filter(item => item[text].match(regex(event.target.value)));

const replaceName = (event, name) => name.replace(regex(event.target.value), `<span class="list__item_high-light">${event.target.value}</span>`);

const showList = (list, event) => {
  const listElement = list.map(item => `<li class="list__item"><p>${replaceName(event, item.city)},${replaceName(event, item.city)}</p><span class="list__item__population">${item.population}</span></li>`).join('');
  listCities.innerHTML = listElement
}

const onSearchChange = (event, places) => {
  const list = [...matchString(event, places, 'city'), ...matchString(event, places, 'state')];
  showList(list, event);
};

const resetInput = el => {
  el.value = '';
};

searchInput.addEventListener('change', e => onSearchChange(e, places));
searchInput.addEventListener('keyup', e => onSearchChange(e, places));
container.addEventListener('click', e => resetInput(searchInput));