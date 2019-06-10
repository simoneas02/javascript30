let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

const getElement = element => document.querySelector(element);
const canvas = getElement('.draw');
const context = canvas.getContext('2d');
const rect = canvas.getBoundingClientRect();

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context.strokeStyle = '#f06';
context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 100;

const addEvent = (element, event, action) => element.addEventListener(event, action);

const xLeft = event => event.clientX - rect.left;
const yTop = event => event.clientY - rect.top;

const isMousemove = event => {
  if (isDrawing === true) {
    drawLine(context, lastX, lastY, xLeft(event), yTop(event));
    lastX = xLeft(event);
    lastY = yTop(event);
  }
};

const isMouseup = event => {
  if (isDrawing === true) {
    drawLine(context, lastX, lastY, xLeft(event), yTop(event));
    lastX = 0;
    lastY = 0;
    isDrawing = false;
  }
};

const isMousedown = event => {
  lastX = xLeft(event);
  lastY = yTop(event);
  isDrawing = true;
};

const calculateHue = hue => (hue >= 360 ? (hue = 0) : null);

const lineWidth = context => {
  if (context.lineWidth >= 100 || context.lineWidth <= 1) {
    direction = !direction;
  }

  direction ? context.lineWidth++ : context.lineWidth--;
};

const drawLine = (context, x1, y1, x2, y2) => {
  context.beginPath();
  context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();

  hue++;
  calculateHue(hue);

  lineWidth(context);
};

addEvent(canvas, 'mousemove', isMousemove);
addEvent(canvas, 'mousedown', isMousedown);
addEvent(canvas, 'mouseup', isMouseup);
