const addItems = document.querySelector('.form');
const itemsList = document.querySelector('.list');
let itemsLocal = JSON.parse(localStorage.getItem('items')) || [];

const addItem = e => {
  e.preventDefault();
  const text = getInputValue();
  const element = createElement(text);

  itemsLocal = [...itemsLocal, text];
  itemsList.insertAdjacentHTML('beforeend', element);

  // itemsList.insertAdjacentHTML('beforeend', useLocalStorage(itemsLocal));
  localStorage.setItem('items', JSON.stringify(itemsLocal));
  e.target.reset();
};

const getInputValue = () => {
  const text = document.querySelector('.form__input').value;
  const item = {
    text,
    done: false
  };
  return item;
};

const createElement = item => `
        <li class="list__item">
          <input class="list__item__checkbox" name="item" type="checkbox" ${
            item.done ? 'checked' : ''
          } />
          <label class="list__item__label" for="item">${item.text}</label>
        </li>
      `;

const useLocalStorage = listLocalStorage =>
  listLocalStorage.map(item => createElement(item)).join('');

addItems.addEventListener('submit', addItem);
