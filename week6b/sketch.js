let drunks = []; //array to hold multiple drunk objects
let myArray = [0,5,800,"banana",500505];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0,24,0,255);
  x = width/2;
  y = height/2;
  colorMode(HSB);
  //noFill();
  //stroke("rgba(1, 249, 195, 1)");
  for(let i = 0;i<myArray.length;i++){
    console.log(myArray[i]);
  }


}

function draw() {

  
}


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
