

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
background("rgba(29, 134, 135, 1)"); //background color
circle(100, 100, 100);
circle(85, 90, 5);
circle(115, 90, 5);
arc(100, 115, 50, 20, 0, PI);

push(); //push and pop to isolate the transformations
//everything within push + pop will only affect the shapes within the enclosure

translate(200,100); //moves the origin point to the right so you can copy and paste the same shape in a different position

circle(100, 100, 100);
circle(85, 90, 5);
circle(115, 90, 5);
arc(100, 115, 50, 20, 0, PI);

pop(); //restores the original transformation state


push(); //push and pop to ISOLATE the transformations
//everything within push + pop will only affect the shapes within the enclosure
fill("rgba(255, 255, 255, 0.5)"); //white with transparency
translate(mouseX,mouseY); //moves the origin point to the right so you can copy and paste the same shape in a different position

//in order it have the shape follow the mouse, you have to put translate(mouseX, mouseY)
//but also the shape has to be drawn at the origin point (0,0)
circle(0, 0, 100);
circle(-15, -10, 5);
circle(15, -10, 5);
arc(0, 0, 60, 60, 0, PI);

pop(); //restores the original transformation state

push();
fill("rgba(190, 118, 221, 0.5)"); 
translate(width/2, height/2); //moves the origin point to the center of the canvas
angle = map(mouseX, 0, width, 0, 360); //maps the mouseX position to an angle between 0 and 360 degrees

rotate(radians(angle)); //rotates the shape by the angle value
//do not rootate before translate because it will rotate the entire canvas

circle(0, 0, 100);
circle(-15, -10, 5);
circle(15, -10, 5);
arc(0, 0, 60, 60, 0, PI);

pop();

push();
let scaleFactor;
scaleFactor = map(mouseY, 0, height, 0.1, 3); //maps the mouseX position to a scale factor between 0.1 and 3
//sclae makes the coordinates bigger or smaller
//scale(0.5); //scales down the shape to half the size. can also use 2 parameters to scale x and y differently
scale(scaleFactor); //scales the shape based on the mouseY position

circle(0, 0, 100);
circle(-15, -10, 5);
circle(15, -10, 5);
arc(0, 0, 60, 60, 0, PI);

pop();


push();
if(mouseX>width/2 && mouseY>height/2){ //if mouseX is greater than half the width of the canvas...
  //run this code
  fill("rgba(220, 64, 64, 0.48)"); //red with transparency
}
else if(mouseX<width/2 && mouseY<height/2){ //otherwise...
  //run this code
  fill("rgba(64, 220, 96, 0.48)"); //green with transparency
}
if(mouseIsPressed == true){ 
  fill("rgba(250, 250, 250, 0.48)"); //blue with transparency
}
else if (mouseIsPressed == false){
  fill("rgba(0, 0, 0, 0.48)"); 
}

}
