function setup() {
  createCanvas(windowWidth, windowHeight);
//in all honesty this was a little rough for me, i understand the concepts but it got confusing as i progressed since i am kind of working backwards with your template
//will show up to office hours next week
}
let r = 100;
function draw() {
  background(mouseX, mouseY/2, 50, 50); //background color changes with mouse position but Y needed to be tamed

  for (let y = 50; y < height - 50; y += 200) {
    for (let x = 50; x < width - 50; x += 200) {


      push();
      translate(x, y);
      let rotation;
      rotation = map(y,1, 100,cos(frameCount*0.02),cos(frameCount*0.01)); //wanted to use sin and cos to make the planets rotate with start values of 1 and 100 to make the rotation speed different for each row but even though it theoreticlaly makes sense I am still a little puzzled
      rotate(rotation); //used frameCount to make it rotate continuously
      scale(mouseY/200); //scales the elipses with mouseY position

      //read about cosine and sine here https://p5js.org/reference/p5/cos/

      strokeWeight(3);
      fill("#fdfdfd");

   if (mouseIsPressed == true) { //on click, adds a little saturn like planet shape made from elipses that rotates in the reverse sin and cos from earlier
    noStroke
fill(mouseY,mouseX,50, mouseY); //also changes fill color with mouse position
ellipse(50, 10, 20, 5);
      ellipse(50, 10, 10, 10);
      rotation = map(y,100, 1,cos(frameCount*0.02),sin(frameCount*0.01));
        }
      
      ellipse(50, 100, 20, 10);
      ellipse(50, 100, 10, 20);
   
      //ellipse(mouseY, mouseX, 20, 10);

        
      pop();
    }
  }
}
