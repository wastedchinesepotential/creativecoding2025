

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  //iteration operaters
  //i++ : adds 1 to i
  //i-- : subtracts 1 from i
  //i+=2 : adds 2 to i
  //i-=2 : subtracts 2 from i
  //i*=2 : multiplies i by 2
  //i/=2 : divides i by 2

  //for(let i = 0; i<10; i++){ //draws 10 circles in a row
    //console.log(i);
   // circle(i*50+50, 50, 30);
  //}

}

function draw() {
background("rgba(29, 134, 135, 1)"); //background color

for(let y = 50;y < height;y += 100){
for(let x = 50;x < width;x += 100){
push();
translate(x,y);
let rotation;
rotation = map(y, 50, height-50, 0, PI);
rotate(rotation)

let randomRotation;
let randomAmount = 0.01;
let randomXDisp;
let randomYDisp;

randomXDisp = random(-y*randomAmount, y*randomAmount);
randomYDisp = random(-y*randomAmount, y*randomAmount);
if mousePressed = true

strokeWeight(4);
fill("rgba(255, 0, 0, 0.5)");

circle(0, 0, 100);
circle(-15, -10, 10);
circle(15, -10, 10);


 //maps the mouseX position to an angle between 0 and 360 degrees

  //circle(x, 100, 100);
}
}
}

//push(); //push and pop to isolate the transformations
//translate(50,50)
//strokeWeight(4);
//fill("rgba(255, 0, 0, 0.5)"); //red with transparency
//circle(100, 100, 100);
////circle(85, 90, 5);
//circle(115, 90, 5);
//arc(100, 115, 50, 20, 0, PI);

//pop(); //restores the original transformation state

//}
