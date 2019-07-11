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
console.table(players);
console.table(copyOfPlayers);
