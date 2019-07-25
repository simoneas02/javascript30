const form = document.querySelector('.form');
let list = document.querySelector('.list');
const input = document.querySelector('.form__input');
let items = [];

const addItems = e => {
  e.preventDefault();
  let input = document.querySelector('.form__input');
  items = [...items, input.value];

  createElement(items);

  input.value = '';
};

const createElement = items =>
  items.map(
    (value, index) => `<li><label for="item${index}">${value}</label></li>`
  );

addEventListener('submit', addItems);
