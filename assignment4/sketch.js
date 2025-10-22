/* let x = x;
let y = x; */
let diameter =  200;
let ingredientPositions = [ ]; //empty array to hold on positions?
let numberOfIngredients = 30; //how many ingredients to draw

let myPokeBowl = []; //empty array to hold pokebowl objects

function setup() {
  createCanvas(windowWidth, windowHeight);
/* myPokeBowl = new PokeBowl(width/2, height/2, diameter,10); //looks for class called pokebowl and makes new one
 */
}
/*   x = width / 2;
  y = height / 2; */

function draw() {
  background(50);
 /*  translate(x,y); */

  for (let i = 0; i<myPokeBowl.length; i++) {
    myPokeBowl[i].display(); //calls the display function from the pokebowl class to draw it
  }
/*   myPokeBowl.display(); //calls the display function from the pokebowl class to draw it */
}

function mousePressed() { 
  let tempPokebowl = new PokeBowl(mouseX, mouseY, diameter, random (5,20),random(20)); //creates a temporary pokebowl at mouse position with random number of ingredients between 5 and 20
  myPokeBowl.push (tempPokebowl); //adds the temporary pokebowl to the array of pokebowls
}

 /*  translate(x, y);
  circle(0, 0, diameter+10);
  circle(0, 0, diameter); */

class PokeBowl { 
  constructor(x, y, diameter,numberOfIngredients) { //takes values from top to assign in this class
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.numberOfIngredients = numberOfIngredients;
    this.ingredientPositions = []; //declaring a variable but not using constuctor to fill it (or thats what you said in the video)

    this.ingredientKind = random(['tobiko','nori','salmon']); //uses random to select one of the three ingredient kinds for this pokebowl and named the ingredientKind so it can be called

    if (this.ingredientKind === 'tobiko') { //if statement to check which ingredient kind was selected will be the same after
      for (let i = 0; i < numberOfIngredients; i++) { //for loop looping from 0 to number of ingredients
        let spacing = 360/ this.numberOfIngredients;
        let tobikoX = cos(radians(i*spacing)) * ((this.diameter/3) - 30); 
        let tobikoY = sin(radians(i*spacing)) * ((this.diameter/3) - 20);
        let newVector = createVector(tobikoX,tobikoY);
        this.ingredientPositions.push(newVector); //fills the array from ingrediant positions array called at start. attaches new position
        
        for (let i = 0; i < numberOfIngredients; i++) {
          let spacing = 360/this.numberOfIngredients;
          let tobikoX2 = cos(radians(i*spacing + spacing/3)) * ((this.diameter/3) - 45); // offset the angle by spacing/3 so these appear not exactly on original ring
          let tobikoY2 = sin(radians(i*spacing + spacing/3)) * ((this.diameter/3) - 35);
          this.ingredientPositions.push(createVector(tobikoX2, tobikoY2)); //tobikoX2 and tobikoY2 for second ring of tobiko
        }
    
        for (let i = 0; i < numberOfIngredients; i++) { //third tobiko ring
          let spacing = 360/this.numberOfIngredients;
          let tobikoX3 = cos(radians(i*spacing)) * ((this.diameter/3) - 15); //furthest out ring becasue it is subtracting least from diameter/3
          let tobikoY3 = sin(radians(i*spacing)) * ((this.diameter/3) - 5);
          this.ingredientPositions.push(createVector(tobikoX3, tobikoY3));
        }
      } 
    }

    if (this.ingredientKind === 'nori') {
      for (let i = 0; i < numberOfIngredients; i++) { //exact same mechanics as tobiko just different variable names and will need different drawing method later
        let spacing = 360/this.numberOfIngredients; //spacing variable to space out the ingredients evenly in a circle i think, at least thats what I understood from the video
        let noriX = cos(radians(i*spacing)) * ((this.diameter/3) - 40); 
        let noriY = sin(radians(i*spacing)) * ((this.diameter/3) - 20);
        this.ingredientPositions.push(createVector(noriX,noriY));
        
        for (let i = 0; i < numberOfIngredients; i++) {
          let spacing = 360/this.numberOfIngredients;
          let noriX2 = cos(radians(i*spacing + spacing/3)) * ((this.diameter/3) - 55); //tweaked the end subtraction from diameter to make nori rings different from tobiko rings just a little
          let noriY2 = sin(radians(i*spacing + spacing/3)) * ((this.diameter/3) - 45);
          this.ingredientPositions.push(createVector(noriX2, noriY2));
        }
    
        for (let i = 0; i < numberOfIngredients; i++) {
          let spacing = 360/this.numberOfIngredients;
          let noriX3 = cos(radians(i*spacing)) * ((this.diameter/3) - 10);
          let noriY3 = sin(radians(i*spacing)) * ((this.diameter/3) - 5);
          this.ingredientPositions.push(createVector(noriX3, noriY3));
        }
      }
    }

    if (this.ingredientKind === 'salmon') { //samething for salmon once again just copied and pasted with variable name and diameter value changes
      for (let i = 0; i < numberOfIngredients; i++) {
        let spacing = 360/ this.numberOfIngredients;
        let salmonX = cos(radians(i*spacing)) * ((this.diameter/3) - 50); 
        let salmonY = sin(radians(i*spacing)) * ((this.diameter/3) - 10);
        this.ingredientPositions.push(createVector(salmonX, salmonY));
        
        for (let i = 0; i < numberOfIngredients; i++) {
          let spacing = 360/this.numberOfIngredients;
          let salmonX2 = cos(radians(i*spacing + spacing/3)) * ((this.diameter/3) - 30);
          let salmonY2 = sin(radians(i*spacing + spacing/3)) * ((this.diameter/3) - 25);
          this.ingredientPositions.push(createVector(salmonX2, salmonY2));
        }
    
        for (let i = 0; i < numberOfIngredients; i++) {
          let spacing = 360/this.numberOfIngredients;
          let salmonX3 = cos(radians(i*spacing)) * ((this.diameter/3) - 5);
          let salmonY3 = sin(radians(i*spacing)) * ((this.diameter/3) - 5);
          this.ingredientPositions.push(createVector(salmonX3, salmonY3));
        }
      }
    }
  }

  display() { //function to display the pokebowl from the class
    push();
    translate(this.x, this.y);
    fill(0); //black for outer bowl
    circle(0, 0, this.diameter + 10); //outer bowl
    fill(255, 255, 200); //light yellow for innder bowl
    circle(0, 0, this.diameter); //inner bowl
    noStroke();

    
    if (this.ingredientKind === 'tobiko') { //draw based on which ingredient this bowl was selected from random earlier
      fill("rgba(223, 64, 154, 1)"); // pink tobiko
      for (let i = 0; i < this.ingredientPositions.length; i++) {
        circle(this.ingredientPositions[i].x, this.ingredientPositions[i].y, 5); 
      }
    }

    if (this.ingredientKind === 'nori') {
      fill("rgba(28, 58, 4, 1)"); 
      rectMode(CENTER);
      for (let i = 0; i < this.ingredientPositions.length; i++) {
        square(this.ingredientPositions[i].x, this.ingredientPositions[i].y, 9); //same thing with the tobiko but using squares for nori pieces
      }
    }

    if (this.ingredientKind === 'salmon') {
      fill("rgba(239, 116, 82, 1)"); 
      rectMode(CENTER);
      for (let i = 0; i < this.ingredientPositions.length; i++) {
        rect(this.ingredientPositions[i].x, this.ingredientPositions[i].y, 20, 10, 3); //rectangular salmon pieces, found out you could round off the corners with the last parameter. still looks like shit really.
      }
    }
    pop();
  }
}
