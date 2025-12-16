let video;
let faceMesh;
let faces = [];
let santaHatImg;
let snowflakes = [];

function preload() {
  // OPTION 1: The "CDN" Link (Most reliable, rarely blocked)
  santaHatImg = loadImage('https://cdn.jsdelivr.net/gh/hwade/SantaHat@master/img/santa_hat.png');

  // OPTION 2: If the above fails, delete it and uncomment the line below:
  // santaHatImg = loadImage('https://i.imgur.com/X4K6b8L.png');
  
  // OPTION 3: A Cartoon Style Hat (Uncomment if you want this style)
  // santaHatImg = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Santa_Claus_hat.svg/640px-Santa_Claus_hat.svg.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // 1. Setup Webcam
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  // 2. Setup FaceMesh
  let options = { maxFaces: 4, flipHorizontal: false };
  faceMesh = ml5.facemesh(video, options, modelReady);

  faceMesh.on('predict', results => {
    faces = results;
  });

  // 3. Create Snow
  for (let i = 0; i < 200; i++) {
    snowflakes.push(new Snowflake());
  }
}

function modelReady() {
  console.log("Model Loaded!");
}

function draw() {
  background(0);

  // --- SCALE VIDEO TO FILL SCREEN (No Stretching) ---
  let scaleF = max(width / video.width, height / video.height);
  let newW = video.width * scaleF;
  let newH = video.height * scaleF;
  let offsetX = (width - newW) / 2;
  let offsetY = (height - newH) / 2;

  image(video, offsetX, offsetY, newW, newH);

  // --- DRAW HAT ---
  for (let i = 0; i < faces.length; i++) {
    let face = faces[i];
    let mesh = face.scaledMesh;

    if (mesh) {
      // 1. Get Coordinates
      let rawTopHead = mesh[10];
      let rawLeftCheek = mesh[234];
      let rawRightCheek = mesh[454];

      // 2. Scale Coordinates to match fullscreen video
      let headX = rawTopHead[0] * scaleF + offsetX;
      let headY = rawTopHead[1] * scaleF + offsetY;

      let leftX = rawLeftCheek[0] * scaleF + offsetX;
      let leftY = rawLeftCheek[1] * scaleF + offsetY;
      let rightX = rawRightCheek[0] * scaleF + offsetX;
      let rightY = rawRightCheek[1] * scaleF + offsetY;

      let faceWidth = dist(leftX, leftY, rightX, rightY);

      // 3. Size and Position the Hat
      let hatWidth = faceWidth * 2.25; 
      let hatHeight = (santaHatImg.height / santaHatImg.width) * hatWidth;

      let hatX = headX - hatWidth / 3;
      let hatY = headY - hatHeight * 0.75; 

      image(santaHatImg, hatX, hatY, hatWidth, hatHeight);
    }
  }

  // --- DRAW SNOW ---
  for (let flake of snowflakes) {
    flake.update();
    flake.display();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  if (key === 'f' || key === 'F') {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}

// --- SNOWFLAKE CLASS ---
class Snowflake {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = random(width);
    this.y = random(-height, 0);
    this.size = random(3, 8);
    this.speed = random(1, 4);
    this.wobble = random(0, 100);
  }

  update() {
    this.y += this.speed;
    this.x += sin((frameCount * 0.05) + this.wobble) * 0.5;
    if (this.y > height) this.reset();
  }

  display() {
    noStroke();
    fill(255, 200);
    circle(this.x, this.y, this.size);
  }
}