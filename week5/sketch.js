let buttonX = 100;
let buttonY = 100;
let buttonD = 80; //diameteer of button
let hovering = false; //boolean that tracks whether mouse is hovering over button

let r = 0;
let g = 0;
let b = 0;

let ballX = 0;
let ballSpeed = 0.5;
let ballDiameter = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0)

}

function draw() {

  
  background(r,g,b); 
  strokeWeight(3); //put at top so it applies to everything when reset
  fill(0, 255, 255);
  noStroke();
text("x:"+mouseX+" y:"+mouseY, 15,15);
let distance = dist(mouseX, mouseY, buttonX, buttonY);
text("dist:"+distance, 15,30);

//stroke(mouseY/2, mouseX, 100);
stroke(255);
noFill();



if (distance < buttonD/2) { // if the mouse is inside the button (measure distance from mouse to button center and its less than radius)
fill(50);
hovering = true;
if (mouseIsPressed) {
  strokeWeight(5);
}
  ballX = ballX+ballSpeed;

} 

else {
  hovering = false;

}

circle(buttonX,buttonY,buttonD);

fill("red");
noStroke();

//makes ball switch directions once width boundary is reached
if(ballX>width - (ballDiameter/2) || ballX < ballDiameter/2){
  ballSpeed = - ballSpeed;
}

circle(ballX,200,25)

}

function mousePressed(){ //runs enclosed code ONCE when mouse pressed down
if (hovering == true) {
  r = random (255);
  g = random (255);
  b = random (255);
  ballSpeed = -ballSpeed;
}

}
