const removeTransition = event =>
	event.propertyName !== 'transform' ? null : event.target.classList.remove('playing');

const addTransition = event => {
	const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
	key.classList.add('playing');
};

const keys = [...document.querySelectorAll('.container__item')];
keys.map(key => key.addEventListener('transitionend', removeTransition));

const playSound = event => {
	const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);

	if (!audio) return;

	audio.currentTime = 0;
	audio.play();

	addTransition(event);
};

window.addEventListener('keydown', playSound);
