let bryanPerlin2 = []; //array for particle count once again
const bryanPerlinNumber2 = 5000;
const bryanNoiseScale2 = 0.004 //needs to scale down for noise function

//https://www.youtube.com/watch?v=sZBfLgfsvSk

//in the projection map this sketch is called perlinTwo and it is on the top

function setup() 
{
  createCanvas(400, 400);
  //background(0);

  //for loop that loops until i (number of loops reacher constant above)
  for(let i = 0; i < bryanPerlinNumber2; i ++) {
    bryanPerlin2.push(createVector(random(width),random(height))); //pushes vector based on for loop i
  }
  stroke (0) //white particles
}



function draw() {
  background(255, 10);

  for(let i = 0; i < bryanPerlinNumber; i ++) {
    let bP2 = bryanPerlin2[i]; //grabs the number in the index, like the number in the array between 1-1000 (bryanPerlinNumber) in this case?
    point(bP2.x, bP2.y); //places on x and y position pulled from bryanPerlin array
    let bryanNoise2 = noise(bP2.x * bryanNoiseScale2, bP2.y * bryanNoiseScale2); //scales noise down
    let bryanA2 = 3*PI * bryanNoise2; //TAU is 2xPI?? and * noise to map? converting angle to x,y
    bP2.x += cos(bryanA2);
    bP2.y += sin(bryanA2);
    //right now particles leave screen

    if(!bPonScreen(bP)) { //! means not, so if NOT on screen, new particle spawns and random width and height on screen
      bP2.x = random(width);
      bP2.y = random(height);
    }
  }

  function bPonScreen (v){ //vector checks if particles vector positions are smaller than width and height of canvas
    return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
  }

}
