let circleD = 25;
let circleX;
let thetaX = 0;
let radiusX = 100;

let circleY;
let thetaY = 0;
let radiusY = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //colorMode(HSB); //changes to Hue Saturation Brightness for colors
  //angleMode(DEGREES); //changes to degrees (0-360) instead of radians
  //rectMode(CENTER); //changes rect mode to center instead of top left corner
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
  //text(day(),0,0);
  text(hour(),0,30);
  text(minute(),0,60);
  text(second(),0,90);

  noFill();
  stroke("pink")
  circle(circleX,circleD,circleD); //dont quite understand why i had to put offset the Y by 20 to get it to center on the pink circles
  //nvm I understand now, cirlceD = 25 so 20 had the illusion of being centered. I just needed to make the Y circleD as well
  //circle(circleY,circleX,circleD);
  circle(circleX,circleD,circleY); //flipped Y and D to let diameter be affected by circleY function
  circle(circleX,circleD,circleX);
  

  stroke("rgba(101, 233, 119, 1)");
  circle(circleD,circleX,circleD);
  circle(circleD,circleX,circleY);
  circle(circleD,circleX,circleX);
 
  //everything here is trying to get the circles to overlap at different times to create a more interesting patterns
  stroke("cyan");
  circleY = sin(radians(thetaY))*radiusY;
  //circle(0,circleY,circleD)
  circle(circleY,circleX,circleD);
  circle(circleY,circleX,circleX);
  circle(circleY,circleX,circleY);
  thetaY++;
  

  stroke("rgba(246, 200, 85, 1)");
  circle(circleX,circleY,circleD);
  circle(circleX,circleY,circleX);
  circle(circleX,circleY,circleY);

  for(let i = 0; i<12;i++){
let theta = i*(360/12);
let radius = mouseX;
let x = cos(radians(theta))*radius;
let y = sin(radians(theta))*radius;
//circle(x,y,circleD);

  }

//still in the experimental phase so kind of barebones and dont have clock elements yet
//based on idea2 in my assignment3 readme, this might end up being 3 circles with smaller circles inside them (mainly for trail) effect
//i will define the min and max diameter of the circles based on hour and minute circles for the pulasation
//I will meet with you to get a more functional method to do this since this is bound to change as I play around
//sorry.



//ignore below it was me brainstorming and writing down ideas
//plan?
//have a line/tube that goes from 1-12 on both sides with little increments of 0.2 in between (12/60 is 0.2 cuz 60 seconds/min)
//one circle is for the hour revolves around the number that is the hour and moves out every hour
//the second circle is for the minute and revolves around the hour circle and moves out every minute
//same with the third circle for the seconds

//OR
//circle size that increases and decreases but max Diameter is based on hour and another circle inside it with size that is based on minute
//perhaps min diameter is based on size of smaller circle
//and a third circle that moves between the two based on seconds
//incorprate a way to add RGB based on size or position of circles hence time of day

}