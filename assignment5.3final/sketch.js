let bryanPerlin3 = []; //array for particle count once again
const bryanPerlinNumber3 = 25000;
const bryanNoiseScale3 = 0.008 //needs to scale down for noise function

//https://www.youtube.com/watch?v=sZBfLgfsvSk

//in the projection map this sketch is called perlinThree and it is on the bottom right

function setup() 
{
  createCanvas(400, 400);
  //background(0);

  //for loop that loops until i (number of loops reacher constant above)
  for(let i = 0; i < bryanPerlinNumber3; i ++) {
    bryanPerlin3.push(createVector(random(width),random(height))); //pushes vector based on for loop i
  }
  stroke (0) //white particles
}



function draw() {
  background(255, 10);

  for(let i = 0; i < bryanPerlinNumber3; i ++) {
    let bP3 = bryanPerlin3[i]; //grabs the number in the index, like the number in the array between 1-1000 (bryanPerlinNumber) in this case?
    point(bP3.x, bP3.y); //places on x and y position pulled from bryanPerlin array
    let bryanNoise3 = noise(bP3.x * bryanNoiseScale3, bP3.y * bryanNoiseScale3); //scales noise down
    let bryanA3 = 20*PI * bryanNoise3; //TAU is 2xPI?? and * noise to map? converting angle to x,y
    bP3.x += cos(bryanA3);
    bP3.y += sin(bryanA3);
    //right now particles leave screen

    if(!bPonScreen(bP3)) { //! means not, so if NOT on screen, new particle spawns and random width and height on screen
      bP3.x = random(width);
      bP3.y = random(height);
    }
  }

  function bPonScreen (v){ //vector checks if particles vector positions are smaller than width and height of canvas
    return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
  }

}

