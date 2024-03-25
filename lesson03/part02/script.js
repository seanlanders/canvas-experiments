
// define a variable called posX, set initial condition to 0
let posX = 0;

// define a function called draw();
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(posX, 50, 100, 100);
  posX += 1;
  // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
  requestAnimationFrame(draw);
}

// invoke function draw();
draw();
