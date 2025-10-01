let circleD = 25;
let circleX;
let thetaX = 0;
let radiusX = 100;

let circleY;
let thetaY = 0;
let radiusY = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  circleX = width/2;
  circleY = height/2;

}

function draw() {
  
  let r = map(second(),0,60,0,width/2);

  radiusX = r;
  radiusY = r;
  background(0,0,0,25);
  strokeWeight(2);

circleX = cos(radians(thetaX))*radiusX;
thetaX++;;

  translate(width/2,height/2);
  textSize(30)
  text(day(),0,0);
  text(hour(),0,30);
  noFill();
  stroke("red")
  circle(circleX,0,25);

 

  stroke("green");
  circleY = sin(radians(thetaY))*radiusY;
  circle(0,circleY,circleD)
  thetaY++;

  stroke(255);
  circle(circleX,circleY,circleD);

  for(let i = 0; i<12;i++){
let theta = i*(360/12);
let radius = mouseX;
let x = cos(radians(theta))*radius;
let y = sin(radians(theta))*radius;
circle(x,y,circleD);

  }


}
