// select the elements on the page canvas and shake button
// canvas
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const { width, height } = canvas;
const SPEED = 50;
const SNAKE_WIDTH = 40;

// get random starting x and y diamension
let x;
let y;

// setup our canvas for drawing
ctx.lineWidth = SNAKE_WIDTH;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;

// Random starting position
function randomStartingPoint() {
  x = Math.floor(Math.random() * width);
  y = Math.floor(Math.random() * height);
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y);
  ctx.stroke();
}

// button
const shakeBtn = document.querySelector('.shake');

// write a draw function
function draw(option) {
  ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(x, y);
  switch (option.key) {
    case 'ArrowUp':
      y -= SPEED;
      break;
    case 'ArrowDown':
      y += SPEED;
      break;
    case 'ArrowLeft':
      x -= SPEED;
      break;
    case 'ArrowRight':
      x += SPEED;
      break;
    default:
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}

// write a handler for keys
function keyUpHandler(e) {
  e.preventDefault();
  if (e.key.includes('Arrow')) {
    draw({ key: e.key });
  }
}

function clearCanvasHandler() {
  canvas.classList.add('shake');
  ctx.clearRect(0, 0, width, height);
  randomStartingPoint();
  canvas.addEventListener('animationend', () =>
    canvas.classList.remove('shake')
  );
}
// clear/shake function
shakeBtn.addEventListener('click', clearCanvasHandler);

// listen for arrow keys
document.addEventListener('keydown', keyUpHandler);

randomStartingPoint();
