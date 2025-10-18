let x = 0;
let y = 0;
let d = 20;
let h = 40
let speed = 2;
let hue = 20;
let opacity = 127;
let harry;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0,24,0,255);
  x = width/2;
  y = height/2;
  colorMode(HSB);
  //noFill();
  //stroke("rgba(1, 249, 195, 1)");

  harry = new Drunk(width/2,height/2,10,100,200);

}

function draw() {
  //x = x+random(-speed,speed);
  //y = y+random(-speed,speed);
  //fill(hue, 70, 100, opacity);
  //circle(x,y,d);
  //ellipse(x, y, d, h);
  
  //circle(width/2, height/2, 20);

  //using custom function below to draw the shape
  

  //x = x+random(-speed,speed);
  //y = y+random(-speed,speed);
  //fill(hue, 10, 60, opacity);
  //circle(x,y,d);

  //x2 = x2+random(-speed,speed);
  //y2 = y2+random(-speed,speed);
  //fill(hue+40, 10, 60, opacity);
  //circle(x2,y2,d);

  //drawDrunkshape(9, 1, 10);

  harry.move();
  harry.drawDrunkshape();
  
}

//custom function to draw the drunk shape based on the one in draw
//parameters are speed, hue, diameter that is within the parentheses when called
function drawDrunkshape(drunkSpeed,drunkHue,drunkDiameter) {
  x = x+random(-drunkSpeed,drunkSpeed);
  y = y+random(-drunkSpeed,drunkSpeed);
  fill(drunkHue, 10, 60, opacity);
  circle(x,y,drunkDiameter);
}

//Class is a Factory of Objects
//https://p5js.org/reference/#/p5/class

//Objects are instances of a class

class Drunk { //class declasres a new type of object
  constructor(x,y,speed,diameter,speed,hue,) { //constructor initializes the properties of the object
    this.x = x; //this. refers to the object that is being created
    this.y = y;
    this.speed = speed;
    this.diameter = diameter;
    this.hue = hue;
    this.opacity = random(0,1); //you can also initialize properties with random values
  }
  
  move(){ //you can declare functions or methods inside the class without calling function
    this.x = this.x + random(-this.speed,this.speed);
    this.y = this.y + random(-this.speed,this.speed);
  }
}
