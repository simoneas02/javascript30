const getElement = element => document.querySelector(element);
const canvas = getElement('.draw');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext('2d');
context.strokeStyle = '#f06';
context.lineJoin = 'round';
context.lineCap = 'round';

let isDrawing = false;
let lastX = 0;
let lastY = 0;

const draw = event => {
  if (!isDrawing) return;

  console.log(event);
  context.beginPath();
  context.moveTo(lastX, lastY);
  context.lineTo(event.offsetX, event.offsetY);
  context.stroke();

  [lastX, lastY] = [event.offsetX, event.offsetY];
};

canvas.addEventListener('mousedown', () => {
  isDrawing = true;
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => (isDrawing = false));
canvas.addEventListener('mouseout', () => (isDrawing = false));
