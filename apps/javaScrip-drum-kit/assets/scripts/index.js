const removeTransition = e =>
	e.propertyName !== 'transform' ?
	null :
	e.target.classList.remove('playing');

const keys = Array.from(document.querySelectorAll('.container__item'));
keys.map(key => key.addEventListener('transitionend', removeTransition));

const addTransition = e => {
	const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
	key.classList.add('playing');
}

const playSound = e => {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

	if (!audio) return;

	audio.currentTime = 0;
	audio.play();

	addTransition(e);
}

window.addEventListener('keydown', playSound);
