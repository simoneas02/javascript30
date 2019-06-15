const inputs = document.querySelectorAll('.list__input');
let lastChecked;

const inBetween = (between, checkbox) => (between ? (checkbox.checked = true) : null);
const changeBetween = (check, between) => (check ? (between = !between) : between);

function handleCheck(event) {
	let between = false;
	const isChecked = event.shiftKey && this.checked;

	if (isChecked) {
		inputs.forEach(checkbox => {
			const check = checkbox === this || checkbox === lastChecked;
			between = changeBetween(check, between);
			inBetween(between, checkbox);
		});
	}

	lastChecked = this;
}

inputs.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
