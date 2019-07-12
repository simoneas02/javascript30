// start with strings, numbers and booleans
let age = 100;
let copyOfAge = age;
console.table({ age });
console.table({ copyOfAge });

age = 200;
console.table({ age });
console.table({ copyOfAge });

let name = 'Simone';
let copyOfName = name;
console.table({ name });
console.table({ copyOfName });

name = 'Beyonce';
console.table({ name });
console.table({ copyOfName });

// Let's say we have an array
const players = ['Lea Verou', 'Sarah Drasner', 'Rachel Anfrew', 'Una Kravets'];

// and we want to make a copy of it.
const copyOfPlayers = players;
console.log('players', players);
console.log('copyOfPlayers', copyOfPlayers);

// You might think we can just do something like this:
copyOfPlayers[3] = 'Ana Tudor';

// however what happens when we update that array?
// now here is the problem!
// oh no - we have edited the original array too!
console.log('players', players);
console.log('copyOfPlayers', copyOfPlayers);

// Why? It's because that is an array reference, not an array copy. They both point to the same array!
// So, how do we fix this? We take a copy instead!
const team2 = players.slice();
console.log('players', players);
console.log('team2', team2);

team2[3] = 'Sara Soueidan';
console.log('players', players);
console.log('team2', team2);

// one way
// or create a new array and concat the old one in
const team3 = [].concat(players);
team3[3] = 'Sophie Alpert';
console.log('players', players);
console.log('team3', team3);

// or use the new ES6 Spread
const team4 = [...players];
console.log('players', players);
console.log('team4', team4);

team4[3] = 'Kat Marchán';
console.log('players', players);
console.log('team4', team4);

const team5 = Array.from(players);
console.log('players', players);
console.log('team5', team5);

team5[3] = 'Val Head';
console.log('players', players);
console.log('team5', team5);

// now when we update it, the original one isn't changed
// The same thing goes for objects, let's say we have a person object
// with Objects
const person = {
  name: 'Lea Verou',
  age: 28
};

// and think we make a copy:
const captain = person;
console.table(person);
console.table(captain);

captain.number = 99;
console.table(person);
console.table(captain);

// how do we take a copy instead?
const cap2 = Object.assign({}, person, { number: 60, age: 12, hear: 'black' });
console.table(person);
console.table(cap2);

// We will hopefully soon see the object ...spread
const cap3 = { ...person };
cap3.job = 'Developer';
console.table(person);
console.table(cap3);

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const girl = {
  name: 'Olga',
  age: 23,
  social: {
    twitter: '@olga',
    facebook: 'olga.developer'
  }
};

const dev = Object.assign({}, girl);
console.table(girl);
console.table(dev);

dev.name = 'Simone';
console.table(girl);
console.table(dev);

const dev2 = JSON.parse(JSON.stringify(girl));
console.table(girl);
console.table(dev2);

dev2.name = 'Willany';
console.table(girl);
console.table(dev2);
