let points;
let stepPerFrame;

function setup() {
  stepPerFrame = 5;
  createCanvas(windowWidth, windowHeight);
  noFill();
  strokeWeight(3);
  reset();
}

function draw() {
  for (let i = 0; i < stepPerFrame; i++) {
    stroke(0, 255 - (i * 255) / stepPerFrame);
    drawLine();
  }
}

function reset() {
  background("white");
  resetPoint();
}

function resetPoint() {
  points = [];
  for (let i = 0; i < windowWidth; i++) {
    points.push([i, 0]);
  }
}

function drawLine() {
  beginShape();
  let atLeastOneOnScreen = false;
  points.forEach((p) => {
    vertex(p[0], p[1]);
    p[1] += noise(frameCount / 100 + p[0] / 25);
    if (p[1] < windowHeight * 1.1) {
      atLeastOneOnScreen = true;
    }
  });
  endShape();

  if (!atLeastOneOnScreen) {
    reset();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
