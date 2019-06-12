const sec = 60;
const min = 360;
const hour = 12;
const deg = 90;

const getSeconds = now => {
	let pointerSec = document.querySelector('[data-js="pointerSec"]');
	const seconds = now.getSeconds();
	const secondsDegrees = seconds / sec * min + deg;
	pointerSec.style.transform = `rotate(${secondsDegrees}deg)`;

	return secondsDegrees;
};

const getMinutes = now => {
	let pointerMin = document.querySelector('[data-js="pointerMin"]');
	const minutes = now.getMinutes();
	const minutesDegrees = minutes / sec * min + deg;
	pointerMin.style.transform = `rotate(${minutesDegrees}deg)`;

	return minutes;
};

const getHours = now => {
	let pointerHour = document.querySelector('[data-js="pointerHour"]');
	const hours = now.getHours();
	const hoursDegrees = hours / hour * min + deg;
	pointerHour.style.transform = `rotate(${hoursDegrees}deg)`;

	return hours;
};

const setPointers = (now, allPointers) => {
	getSeconds(now) === deg
		? allPointers.forEach(pointer => (pointer.style.transition = 'none'))
		: allPointers.forEach(pointer => (pointer.style.transition = ''));
};

const movePointers = () => {
	const now = new Date();
	getHours(now);
	getMinutes(now);

	const allPointers = document.querySelectorAll('.pointer');
	setPointers(now, allPointers);
};

setInterval(movePointers, 1000);
