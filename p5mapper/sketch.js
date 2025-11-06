/*
 * p5.mapper
 * https://github.com/jdeboi/p5.mapper
 *
 * Jenna deBoisblanc
 * jdeboi.com
 *
 */

let particlesBryan =[]; //array for particle system

let bryanPerlin = []; //array for particle count once again
const bryanPerlinNumber = 5000;
const bryanNoiseScale = 0.01 //needs to scale down for noise function

let bryanPerlin1 = []; //array for particle count once again
const bryanPerlinNumber1 = 2500;
const bryanNoiseScale1 = 0.006 //needs to scale down for noise function

let bryanPerlin2 = []; //array for particle count once again
const bryanPerlinNumber2 = 5000;
const bryanNoiseScale2 = 0.004 //needs to scale down for noise function

let bryanPerlin3 = []; //array for particle count once again
const bryanPerlinNumber3 = 2500;
const bryanNoiseScale3 = 0.008 //needs to scale down for noise function




let pMapper;
let quadLeft, quadRight; // my quad surfaces

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  //colorMode(RGB)
  //background(0);

  // create mapper object
  pMapper = createProjectionMapper(this);
  pMapper.load("map.json");

  // create "quads" for each surface of your projection
  quadLeft = pMapper.createQuadMap(400, 400);
  quadRight = pMapper.createQuadMap(400, 400);
  quadTopLeft = pMapper.createQuadMap(400,400);
  quadTopRight = pMapper.createQuadMap(400,400); 

}

function draw() {
  background(0);

  // display each of the projection surfaces in draw
  //quadLeft.displaySketch(perlinOne);
  quadRight.displaySketch(perlinTwo);
  quadTopLeft.displaySketch(perlinThree);
  quadTopRight.displaySketch(topRightSketch);
}

/* function topLeftSketch(pg){
  
  pg.push();
  //pg.background(0,0,0,0);
  //pg.circle(50,50,50)
   for(let i=0;i<5;i++) //for loop where loop continues as long as i is less than 5
  {
    particlesBryan.push(new BryanParticle(200,200, pg));
  }

  for(let i = 0;i<particlesBryan.length;i++)
  {
    particlesBryan[i].update()
    particlesBryan[i].show()

    if(particlesBryan[i].isDead())
    {
      particlesBryan.splice(i,1);
    }
  }
  pg.pop();


} */

function topRightSketch(pg){
pg.push();
for(let i = 0; i < bryanPerlinNumber; i ++) {
    bryanPerlin.push(createVector(random(400),random(400))); //pushes vector based on for loop i
  }
  stroke (0) //white particles 

pg.background(255);

  for(let i = 0; i < bryanPerlinNumber; i ++) {
    let bP = bryanPerlin[i]; //grabs the number in the index, like the number in the array between 1-1000 (bryanPerlinNumber) in this case?
    pg.point(bP.x, bP.y); //places on x and y position pulled from bryanPerlin array
    let bryanNoise = noise(bP.x * bryanNoiseScale, bP.y * bryanNoiseScale); //scales noise down
    let bryanA = TAU * bryanNoise; //TAU is 2xPI?? and * noise to map? converting angle to x,y
    bP.x += cos(bryanA);
    bP.y += sin(bryanA);
    //right now particles leave screen

    if(!bPonScreen(bP)) { //! means not, so if NOT on screen, new particle spawns and random width and height on screen
      bP.x = random(400);
      bP.y = random(400);
    }
  }

  function bPonScreen (v){ //vector checks if particles vector positions are smaller than width and height of canvas
    return v.x >= 0 && v.x <= 400 && v.y >= 0 && v.y <= 400;
  }
  pg.pop();
  
}

function perlinOne (pg){
pg.push();
for(let i = 0; i < bryanPerlinNumber1; i ++) {
    bryanPerlin1.push(createVector(random(400),random(400))); //pushes vector based on for loop i
  }
  stroke (0) //white particles 

pg.background(255);

  for(let i = 0; i < bryanPerlinNumber1; i ++) {
    let bP1 = bryanPerlin1[i]; //grabs the number in the index, like the number in the array between 1-1000 (bryanPerlinNumber) in this case?
    pg.point(bP1.x, bP1.y); //places on x and y position pulled from bryanPerlin array
    let bryanNoise1 = noise(bP1.x * bryanNoiseScale1, bP1.y * bryanNoiseScale1); //scales noise down
    let bryanA1 = 100*PI * bryanNoise1; //TAU is 2xPI?? and * noise to map? converting angle to x,y
    bP1.x += cos(bryanA1);
    bP1.y += sin(bryanA1);
    //right now particles leave screen

    if(!bPonScreen(bP1)) { //! means not, so if NOT on screen, new particle spawns and random width and height on screen
      bP1.x = random(400);
      bP1.y = random(400);
    }
  }

  function bPonScreen (v){ //vector checks if particles vector positions are smaller than width and height of canvas
    return v.x >= 0 && v.x <= 400 && v.y >= 0 && v.y <= 400;
  }
  pg.pop();
  
}

function perlinTwo (pg){
pg.push();
for(let i = 0; i < bryanPerlinNumber2; i ++) {
    bryanPerlin2.push(createVector(random(400),random(400))); //pushes vector based on for loop i
  }
  stroke (0) //white particles 

pg.background(255);

  for(let i = 0; i < bryanPerlinNumber2; i ++) {
    let bP2 = bryanPerlin2[i]; //grabs the number in the index, like the number in the array between 1-1000 (bryanPerlinNumber) in this case?
    pg.point(bP2.x, bP2.y); //places on x and y position pulled from bryanPerlin array
    let bryanNoise2 = noise(bP2.x * bryanNoiseScale2, bP2.y * bryanNoiseScale2); //scales noise down
    let bryanA2 = 3*PI * bryanNoise2; //TAU is 2xPI?? and * noise to map? converting angle to x,y
    bP2.x += cos(bryanA2);
    bP2.y += sin(bryanA2);
    //right now particles leave screen

    if(!bPonScreen(bP2)) { //! means not, so if NOT on screen, new particle spawns and random width and height on screen
      bP2.x = random(400);
      bP2.y = random(400);
    }
  }

  function bPonScreen (v){ //vector checks if particles vector positions are smaller than width and height of canvas
    return v.x >= 0 && v.x <= 400 && v.y >= 0 && v.y <= 400;
  }
  pg.pop();

}

function perlinThree (pg){
pg.push();
for(let i = 0; i < bryanPerlinNumber3; i ++) {
    bryanPerlin3.push(createVector(random(400),random(400))); //pushes vector based on for loop i
  }
  stroke (0) //white particles 

pg.background(255);

  for(let i = 0; i < bryanPerlinNumber3; i ++) {
    let bP3 = bryanPerlin3[i]; //grabs the number in the index, like the number in the array between 1-1000 (bryanPerlinNumber) in this case?
    pg.point(bP3.x, bP3.y); //places on x and y position pulled from bryanPerlin array
    let bryanNoise3 = noise(bP3.x * bryanNoiseScale3, bP3.y * bryanNoiseScale3); //scales noise down
    let bryanA3 = 20*PI * bryanNoise3; //manipulating the TAU/scale of PI multiplied changes the whole angle of noise
    bP3.x += cos(bryanA3);
    bP3.y += sin(bryanA3);
    //right now particles leave screen

    if(!bPonScreen(bP3)) { //! means not, so if NOT on screen, new particle spawns and random width and height on screen
      bP3.x = random(400);
      bP3.y = random(400);
    }
  }
  
  function bPonScreen (v){ //vector checks if particles vector positions are smaller than width and height of canvas
    return v.x >= 0 && v.x <= 400 && v.y >= 0 && v.y <= 400;
  }
  pg.pop();

}

function mySketch(pg){ // "pg" refers to each canvas "instance"
  pg.clear();
  pg.push();
  // your sketch goes between push and pop. remember to use the 'pg.' prefix for all p5 functions
  pg.background(0,255,0);
  pg.textAlign(CENTER,CENTER);
  pg.textSize(70);
  pg.fill(color('black'));
  pg.text('hello world',200,175);
  // ends here
  pg.pop(); 
}

function myOtherSketch(pg){
  pg.clear();
  pg.push();
  // your mini sketch goes here!
  
  pg.background(255,0,0);
  
  pg.rectMode(CORNERS);  
  // and ends here!
  pg.pop();
}

function keyPressed() { // keypressed toggles different modes
  switch (key) {
    case "c":
      pMapper.toggleCalibration();
      break;
    case "f":
      let fs = fullscreen();
      fullscreen(!fs);
      break;
    case "l":
      pMapper.load("map.json");
      break;

    case "s":
      pMapper.save("map.json");
      break;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

class BryanParticle{
  constructor(x,y,pg){
    this.x=x
    this.y=y
    this.pg = pg
    this.vx=random(-2,2) //random velocity of x value
    this.vy=random(-2,2) //random y velocity?
    this.lifetime=255  //give each particle a timer to fade.out? but dont fully understand
  }
  update()
  {
    this.x+=this.vx
    this.y+=this.vy
    this.lifetime-=1
  }
  show()
  {
    noStroke()
    this.pg.fill(1400,this.lifetime,100)
    this.pg.ellipse(this.x,this.y,5,2)
    //this.pg.ellipse(this.x,this.y,0.5,this.lifetime) //using the this.lifetime as the x or y of the ellipses to cause this increasing factor over time?
  }
  isDead()
  {
    return this.lifetime<0;
  } 
}