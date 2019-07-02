const inputs = document.querySelectorAll('.list__input');
let lastChecked;

const inBetween = (between, checkbox) => (between ? (checkbox.checked = true) : null);
const changeBetween = (check, between) => (check ? (between = !between) : between);

const checked = (isChecked, input, between) => {
  isChecked &&
    inputs.forEach(checkbox => {
      const check = checkbox === input || checkbox === lastChecked;
      between = changeBetween(check, between);
      inBetween(between, checkbox);
    });
  return between;
};

const handleCheck = event => {
  let between = false;
  const input = event.target;
  const isChecked = event.shiftKey && input.checked;
  between = checked(isChecked, input, between);
  lastChecked = input;
};

inputs.forEach(checkbox => checkbox.addEventListener('click', handleCheck, true));
