const removeTransition = e => {
	if (e.propertyName !== 'transform') return
	e.target.classList.remove('playing');
}

const playSound = e => {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

	if (!audio) return;

	audio.currentTime = 0;
	audio.play();

	const key = document.querySelector(`.container__item[data-key="${e.keyCode}"]`);
	key.classList.add('playing');
}

const keys = document.querySelectorAll('.container__item');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
