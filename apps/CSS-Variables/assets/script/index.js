const inputs = Array.from(document.querySelectorAll('.controls__input'));

const handleUpdate = e => {
  const suffix = e.target.dataset.sizing || '';
  const {
    name,
    value
  } = e.target

  document.documentElement.style.setProperty(`--${name}`, `${value}${suffix}`);
}

inputs.map(input => input.addEventListener('change', handleUpdate));
