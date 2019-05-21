const panels = [
	...document.querySelectorAll('.panel'),
];

const toggleOpen = e => e.target.classList.toggle('open');
const toggleOpenActive = e =>

		e.propertyName.includes('flex') ? e.target.classList.toggle('open-active') :
		null;

panels.map(panel => panel.addEventListener('click', toggleOpen));
panels.map(panel => panel.addEventListener('transitionend', toggleOpenActive));
