//sorry for the messy ass notes, just rehashing out the fundamentals.

//let myVariable = 5; //let is used to declare a variable. Use this as shortcut for a value you need to use a lot
//const myConstant = 10; //const is used to declare a constant (cannot be changed)
//myVariable = myVariable + 1; //increment variable by 1
//comes before setup() and draw() functions
//you can also declare variable with no value and declare the value of it later after draw

function setup() { //runs once at start
  createCanvas(windowWidth, windowHeight);
  //createCanvas(x,y) is a function from p5.js reference
  console.log(windowWidth);
  print(width, height);
  //console.log() and print() are the same, just different ways to print to console

  strokeWeight(10); //set stroke weight (thickness)
  stroke('teal'); //set stroke color
  fill('orange'); //set fill color
}

function draw() { //runs in loop after setup
  //circle(100,200,90); //draw a circle
  //in p5.js, (0,0) is top left corner
  //x is horizontal position, y is vertical position
  //d is diameter of circle
  background(60, 70, 80); //set background color (R,G,B) with values from 0-255 to determine strength of color
  strokeWeight(10); //set stroke weight (thickness)
  stroke('teal'); //set stroke color
  fill('orange'); //set fill color
  ellipse(100, 220, 90, 90) //draw an ellipse (x,y,w,h)
  ellipse(300, 220, 90, 50) 
  ellipse(frameCount, 220, 50, 90) //frameCount is a variable that increments every frame
  ellipse(200, 220, 90, 20)
  rect(100, 400, 500, 100) //draw a rectangle (x,y,w,h)
  //ellipseMode(CORNER) //change ellipse mode to corner (x,y is top left corner)
  triangle(100, 20, 500, 50, 60, 100) //draw a triangle (x1,y1,x2,y2,x3,y3)

  arc(100, 400, 200, 200, PI / 2, -PI / 4) //draw an arc (x,y,w,h,start,stop)
//Use PI for angles in radians
  quad(10, 80, 50, 60, 250, 80, 80, 150)//draw a quadrilateral (x1,y1,x2,y2,x3,y3,x4,y4)

//beginShape() and endShape() to create custom shapes. example below:  
//beginShape();

  //vertex(width / 2 - 50, height / 2 - 50);
  //vertex(width / 2, 10);

  //vertex(width / 2 + 50, height / 2 - 50);
  //vertex(width - 10, height / 2);

  //vertex(width / 2 + 50, height / 2 + 50);
  //vertex(width / 2, height - 10);

  //vertex(width / 2 - 50, height / 2 + 50);
  //vertex(10, height / 2);

  //endShape(CLOSE);


strokeWeight(5); //change stroke weight to 5px
fill(248,222,126); //change fill to yellow
triangle(100, 600, 100, 500, 200, 500); //draw a triangle
  //fill(248,222,126); //sets fill color to magenta but overrides the SET fill color under CreateCanvas

//noStroke(); //no stroke for this shape
//noFill(); //no fill for this shape

strokeWeight(9); 
fill(248,222,126); 
triangle(30+100, 30+600, 30+100, 30+500, 30+200, 30+500); 
//draw a triangle 30px to the right and 30px down from the previous triangle using EXPRESSIONS

//different ways to set colors:
//fill("#00ff00"); //hex code
//fill("rgb(0,255,0)"); //rgb code
//fill("rgba(0,255,0,0.5)"); //rgba code with alpha (opacity) value
//fill("lightpink") //color name

//noFill(); //no fill color
//noStroke(); //no stroke color

circle(mouseX, mouseY, 20);
//mouseX and mouseY are variables that store the current mouse position
}
