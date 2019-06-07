const getElement = element => document.querySelector(element);
const canvas = getElement('.draw');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext('2d');
context.strokeStyle = '#f06';
context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 100;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

const addEvent = (element, event, action) => element.addEventListener(event, action);

canvas.addEventListener('mousedown', () => {
  isDrawing = true;
  [lastX, lastY] = [event.offsetX, event.offsetY];
});

const draw = event => {
  if (!isDrawing) return;

  context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  context.beginPath();
  context.moveTo(lastX, lastY);
  context.lineTo(event.offsetX, event.offsetY);
  context.stroke();

  [lastX, lastY] = [event.offsetX, event.offsetY];
  hue++;

  if (hue >= 360) {
    hue = 0;
    context.lineWidth = 100;
  }

  if (context.lineWidth >= 100 || context.lineWidth <= 1) {
    direction = !direction;
  }

  direction ? context.lineWidth++ : context.lineWidth;
};

const notDrawing = () => (isDrawing = false);

addEvent(canvas, 'mousemove', draw);
addEvent(canvas, 'mouseup', notDrawing);
addEvent(canvas, 'mouseout', notDrawing);
