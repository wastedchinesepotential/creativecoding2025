let circleD = 25;
let circleE = 25;
let circleF = 25;

let circleX;
let thetaX = 0;
let radiusX = 100;

let circleY;
let thetaY = 0;
let radiusY = 100;

//so this came out sort of from a freeball session and is very different from my original ideas but I still like it
//the idea here is to have 3 sets of circles that represent the hours minute and seconds
//each set of circles will have 3 circles that pulse in and out based on sine and cosine functions
//the radius of the pulsing circles is based on the time value (hour minute second) so they move outwards as time progresses
//the circles also overlap at different times to create interesting patterns
//the overlapping trails make a nice effect too
//i left the digital clock in the middel with corresponding colors for clarity
// the pink is seconds, cyan is minutes, and yellow is hours

function setup() {
  createCanvas(windowWidth, windowHeight);
  //colorMode(HSB); //changes to Hue Saturation Brightness for colors
  //angleMode(DEGREES); //changes to degrees (0-360) instead of radians
  //rectMode(CENTER); //changes rect mode to center instead of top left corner
  circleX = width/2;
  circleY = height/2;

}

function draw() {
  
  let s = map(second(),0,60,0,width/2); //maps the seconds (0-60) to a range between 0 and half the width of the canvas to s
  let m = map(minute(),0,60,0,width/2); //same to m for minute
  let h = map(hour(),0,60,0,width/2); //then the same for hours
  
  radiusX_s = s;
  radiusY_s = s;

  radiusX_m = m;
  radiusY_m = m;

  radiusX_h = h;
  radiusY_h = h;

  background(0,0,0,25);
  strokeWeight(2);

circleX_s = cos(radians(thetaX))*radiusX_s; //separate circleX and circleY for second, minute, and hour since I am going to have a circle for each one respectively
circleY_s = sin(radians(thetaY))*radiusY_s;
circleX_m = cos(radians(thetaX))*radiusX_m;
circleY_m = sin(radians(thetaY))*radiusY_m;
circleX_h = cos(radians(thetaX))*radiusX_h;
circleY_h = sin(radians(thetaY))*radiusY_h;

thetaX++;;

  translate(width/2,height/2);
  textSize(30)
  //text(day(),0,0);
  
  //push pop so that i can translate the text without affecting the circles, wanted them in the middle and use fill colors to match the respective circle colors
  push();
  translate(-15,-50);
  translate
  text(hour(),0,30);
  stroke("cyan");
  text(minute(),0,60);
  stroke("pink")
  text(second(),0,90);
  pop();

  noFill();
  stroke("pink")
  circle(circleX_s,circleY_s,circleD); //the circle for seconds it will have a fixed diameter of 25 in the middle of the other 2
  circle(circleX_s,circleY_s,circleX_s); //flipped the circleX and circleY to have more interesting patterns
  circle(circleX_s,circleY_s,circleY_s); // the circles pulse in size in and ouut in opposite directions
  thetaX++;;
  


/*   stroke("rgba(101, 233, 119, 1)");
  circle(circleD,circleX_m,circleD);
  circle(circleD,circleX_m,circleY);
  circle(circleD,circleX_m,circleX_m); */
 
  //everything here is trying to get the circles to overlap at different times to create a more interesting patterns
  stroke("cyan");
  circle(circleX_m,circleY_m,circleE); 
  circle(circleX_m,circleY_m,circleX_m); //circles for minutes 
  circle(circleX_m,circleY_m,circleY_m); 
 thetaX++;; //each extra theta increment changes the speed of the circles but also adds a bit of chaos which I dont fully understand but experimenting made the movement patterns intersting

  stroke("rgba(246, 200, 85, 1)");
  circle(circleX_h,circleY_h,circleF);
  circle(circleX_h,circleY_h,circleX_h); //circles for hours
  circle(circleX_h,circleY_h,circleY_h);
  thetaY++; 

  for(let i = 0; i<12;i++){
let theta = i*(360/12);
let radius = mouseX;
let x = cos(radians(theta))*radius;
let y = sin(radians(theta))*radius;



//circle(x,y,circleD);

  }



}
