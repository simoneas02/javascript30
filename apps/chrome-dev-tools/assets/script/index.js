const women = [
	{ goddess: 'Una Kravts', work: 'Dev Advocate at @google' },
	{ goddess: 'Rachel Andrew', work: 'web developer, writer and speaker' },
	{ goddess: 'Lea Verou', work: 'web developer, writer and speaker' },
	{ goddess: 'Rachel Andrew', work: 'Dev Advocate at W3C/MIT' }
];

const p = document.querySelector('p');
const makeGreen = () => {
	p.style.color = 'purple';
	p.style.fontSize = '50px';
};

p.addEventListener('click', makeGreen);

// Regular
console.log('Hello goddess');

// Interpolated
console.log(`Hello ${women[0].goddess}`);
console.log('Hello I am a %s string!', '💩');

// Styled
console.log('%c I am some great text', 'font-size:25px; background:purple; text-shadow: 10px 10px 0 blue');

// warning!
console.warn('OH NOOO');

// Error :|
console.error('OPPPS!!');

// Info
console.info('IMPORTANT!');

// Testing
console.assert(p.classList.contains('ouch'), 'That is wrong!');

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
const show = () =>
	women.map((woman) => {
		console.groupCollapsed(`${woman.goddess}`);
		console.log(`This is ${woman.goddess}`);
		console.log(`${woman.goddess} is a ${woman.work}`);
		console.groupEnd(`${woman.goddess}`);
	});

console.log(show());

// counting
console.count('Goddess');
console.count('Goddess');
console.count('Wonderful');
console.count('Wonderful');
console.count('Goddess');
console.count('Wonderful');
console.count('Goddess');
console.count('Wonderful');
console.count('Wonderful');
console.count('Wonderful');
console.count('Wonderful');
console.count('Wonderful');

// table
console.table(women);

// timing
console.time('fetching data');
fetch('https://api.github.com/users/simoneas02').then((data) => data.json()).then((data) => {
	console.timeEnd('fetching data');
	console.table(data);
});
