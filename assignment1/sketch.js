let cyan = '#00FFFF';
let pumpkin = '#FF7518';
let bergundy = '#800020';
let violet = '#8F00FF';
let olive = '#808000';
let magenta = '#FF00FF';
let mustard = '#FFDB58';

//let overlayImage;

//function preload() {
//overlayImage = loadImage('assignment1/seamless-texture-crumpled-paper-free-thumb36.png'); 
//}
//tried to add texture as an overlay image but will need more research since it didnt work

function setup() {
createCanvas(windowWidth, windowHeight);
  //createCanvas(500, 600);
  background(220, 200, 200);
  overlayTexture = createGraphics(width, height)
}



function draw() {
  //translate(width/2, height/2); //tried to change origin point of rotation??

  fill(bergundy); // translucent
  noStroke();
  triangle(125, 450, 100, 100, 375, 300); //drew bergundy triangle

  fill(cyan); //decided to start defining colors instead of using rgb
  circle(330, 380, 140);

fill(color(0));
square(25, 490, 30); //bottom left black square


//fill(color(15, 15, 100));
fill(mustard);
rotate(radians(40)) //tried to rotate the shapes instead of using polygon everytime
square(167, 60, 50); //top left yellow square

rotate(radians(-40)) //rotated back to original position becasue hated radians
//angleMode(DEGREES)
//rotate(0);
//rect(210,120,50,250);
angleMode(degrees); //changed to degrees because radians was annoying
rotate(56); //degrees still annoying as hell need to learn how to change origin point of rotation
fill(pumpkin);
rect(-100, 240, 190, 50); //orage rectangle
fill(cyan);
rect(90, 280, 40, 10); //cyan line to right of orange rectangle
fill(0);
rect(70, 290, 150, 10); //blakc line under cyan line

fill(violet);
rect(-10, 270, 30, 35); //violet rectangle in the middle of orange rectangle

rotate(50); //rotated again still hated the guessing game
fill(mustard);
rect(-30, 385, 225, 25);//yellow rectangle
fill(olive);
rect(80, 400, 55, 30); //olive rectangle on top of yellow rectangle
fill(magenta);
rect(-60, 400, 150, 10); //magenta line on top of yellow rectangle and olive rectangle

fill(olive);
rect(-240, 335, 110, 10); //olive line on the left of canvas because it was the same angle as the ones on the right so i did this one first

rotate(-250.1); //started using decimals because the jumps were too big
fill(pumpkin); 
rect(410, 320, 55, 10); //orange line on botoom right of canvas
fill(bergundy);
rect(435, 330, 175, 10); //burgundy line on bottom right of canvas

rotate(0.35); //at this point i dont even know what the rotation origin is
fill(magenta);
rect(285, 200, 110, 10); //magenta line perpendicular to olive line drew before
fill(violet); 
rect(300, 180, 37, 20); //violet attached to magenta line on left of canvas

resetMatrix(); //found out about reset matrix to get original rotation
applyGrain(); //tried learning to add grain texture as a replacement for the scrunched paper texture but didnt work
  
}

function applyGrain() {
  let grainDensity = 200; //number of grain particles in canvas i think
  
  noStroke();
  
  for (let i = 0; i < grainDensity; i++) { //randomly places grain particles i think
    let x = random(width);
    let y = random(height);
    
    let grainColor = color(0, 50); //grain is black and sorta translucent
    fill(grainColor);
    
    
    rect(x, y, 1, 1);
  } 
  //tried learning about i loops for the grain but didnt work
  //nevermind it worked but it looks like shit

  function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

}