let bryanCube = [];
let bryanCubeCount = 100;

function setup() {
  createCanvas(400, 400);
  background(0, 0, 0);
  colorMode(HSB);

  // Create the wanderers in the center
  for (let i = 0; i < bryanCubeCount; i++) {
    let stepSize = random(0.5, 9);       // how far they move each frame
    let tileSize = random(5, 25);        // how big each square is
    let hueShift = random(0, 60);       // random color hue
    let waveOffset = random(TWO_PI);     // phase offset for sin wave
    bryanCube[i] = new Wanderer(width / 2, height / 2, tileSize, stepSize, hueShift, waveOffset);
  }
}

function draw() {
  // Slight fade to create soft trails (instead of harsh ones)
  fill(0, 0, 0, 0.05);
  /* noStroke(); */
  rect(0, 0, width, height);

  // Move and show each wanderer
  for (let i = 0; i < bryanCube.length; i++) {
    bryanCube[i].stumble();
    bryanCube[i].show();
  }
}

// Class defining each wanderer’s behavior
class Wanderer {
  constructor(startX, startY, size, step, hueValue, waveOffset) {
    this.posX = startX;
    this.posY = startY;
    this.size = size;
    this.step = step;
    this.hueValue = hueValue;
    this.alphaValue = random(0.3, 1);
    this.time = 0;             // keeps track of movement over time
    this.waveOffset = waveOffset;
  }

  // Move in a random + sine-driven path
  stumble() {
    this.time += 0.05;

    // Random drift plus wavy sine/cosine motion
    this.posX += random(-this.step, this.step) + sin(this.time + this.waveOffset);
    this.posY += random(-this.step, this.step) + cos(this.time + this.waveOffset);

    // Wrap around the edges
   /*  if (this.posX > width) this.posX = 0;
    if (this.posX < 0) this.posX = width;
    if (this.posY > height) this.posY = 0;
    if (this.posY < 0) this.posY = height; */
  }

  // Draw each wanderer as a soft colored square
  show() {
    noStroke();
    fill(this.hueValue, 80, 100, this.alphaValue);
    square(this.posX, this.posY, this.size);
  }
}
