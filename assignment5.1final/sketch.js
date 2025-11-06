let bryanPerlin = []; //array for particle count once again
const bryanPerlinNumber = 5000;
const bryanNoiseScale = 0.01 //needs to scale down for noise function

//in the projection map this sketch is called topRightSketch but it is the one on the left

//https://www.youtube.com/watch?v=sZBfLgfsvSk

function setup() 
{
  createCanvas(400, 400);
  //background(0);

  //for loop that loops until i (number of loops reacher constant above)
  for(let i = 0; i < bryanPerlinNumber; i ++) {
    bryanPerlin.push(createVector(random(width),random(height))); //pushes vector based on for loop i
  }
  stroke (0) //white particles
}



function draw() {
  background(255, 10);

  for(let i = 0; i < bryanPerlinNumber; i ++) {
    let bP = bryanPerlin[i]; //grabs the number in the index, like the number in the array between 1-1000 (bryanPerlinNumber) in this case?
    point(bP.x, bP.y); //places on x and y position pulled from bryanPerlin array
    let bryanNoise = noise(bP.x * bryanNoiseScale, bP.y * bryanNoiseScale); //scales noise down
    let bryanA = TAU * bryanNoise; //TAU is 2xPI?? and * noise to map? converting angle to x,y
    bP.x += cos(bryanA);
    bP.y += sin(bryanA);
    //right now particles leave screen

    if(!bPonScreen(bP)) { //! means not, so if NOT on screen, new particle spawns and random width and height on screen
      bP.x = random(width);
      bP.y = random(height);
    }
  }

  function bPonScreen (v){ //vector checks if particles vector positions are smaller than width and height of canvas
    return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
  }

}
