//https://paulbourke.net/geometry/chladni/
//https://www.youtube.com/watch?v=J-siGcsK2k8

let columns, rows;
let size = 4;
let m = 5; //mode number of cymatic pattern found in equation in cymatic function
let n = 2; //changes the chladni pattern type refer to chart on paul bourke's website
let threshold = 0.05; //threshhold value to use for if the cymatic equation = 0 (location of nodal line), we color the square black. we use a value just above zero because apparently it works better


function setup() {
  createCanvas(400, 400);
  columns = width / size;
  rows = height / size;
}

function draw() {
  background(220)
  noStroke();
  m = map(mouseX, 0, width, 2, 10);
  n = map(mouseY,0,width,2,10)
  for (let i=0; i<columns; i++){ //for loop that draws 10*10 (size*size) squares across x axis (columns) in the number of times of canvas width/size 
    for (let j=0; j<rows; j++){ //same for loop except for y axis (rows) 
      let x = map(i, 0, columns, 0, 1); //maps i (which goes from 0 to number of columns) to -1-1 as x variable
      let y = map(j, 0, rows, 0, 1); //maps j (which goes from 0 to number of rows) to -1-1 as y variable
      //^originally mapped to -1 to 1 but the output is supposed to be based on the range of for the specific pattern on paul bourke's website

      //let value = map(cymatic(x,y), -2, 1, 0, 255); //maps the output of cymatic function (which takes in x and y variables) from -2 to 1 to 0-255 for greyscale 
      let value = cymatic(x,y); //gets x,y value from cymatic function
      print(floor(value));

      //using a conditional statement to fill the rectangles based on if threshold value is larger than output value from cymatic function
      if (abs(value) < threshold){ //absolute value means it ignores negatives? ()
        fill(255); //fills rectangle with black if value is below threshold
      } else {
        fill(0); //fills rectangle with white if value is above threshold
      }
      //fill(value); //fills rectangle with greyscale value


      //rect(i*size, j*size, size, size); //rectangles drawn starting at an x position of i*size and y position of j*size (so when the loop is at 3, it will draw it at x position = 30 pixels and y position = 30 pixels) with width and height of size variable (10)
      circle(i*size,j*size,size); //testing circles instead of rectangles
      //ellipse(i*size + size/2, j*size + size/2, i*size, j*size); //testing ellipses instead of rectangles
    }
  }

  //noLoop(); // stops draw function from looping
}

function cymatic(x,y){
  let L = 1;
  return cos(n * PI * x / L) * cos(m * PI * y / L) - cos(m * PI * x / L) * cos(n * PI * y / L); //Standing Wave equation for chladni patterns for a square plate from Paul Bourke's website, bound to be changed later
}