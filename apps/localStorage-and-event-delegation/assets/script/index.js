const addItems = document.querySelector('.form');
const itemsList = document.querySelector('.list');

const addItem = e => {
  e.preventDefault();
  const text = getInputValue();
  const element = createElement(text);

  itemsList.insertAdjacentHTML('beforeend', element);

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

addItems.addEventListener('submit', addItem);
