let konamiCode = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a'
];

let pressed = [];
window.addEventListener('keyup', ({ key }) => {
  pressed = [...pressed, key];
  konamiCode.every((value, index) => value === pressed[index]) ? cornify_add() : null;
});
