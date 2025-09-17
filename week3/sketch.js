let swaggerMultiplyer = 0.25; //global variable: "let" is a function that allows you to create variables that can be used anywhere in the code

function setup() {
  //createCanvas(windowWidth, windowHeight);
  createCanvas(400, 400);
  swaggerMultiplyer = width * 2; //setting the variable based on canvas width
  
}

function draw() {
  //background(127); //grayscale is a value 0-255
//background(127,0,0) ; //3 values are (R,G,B) is a value 0-255 determining strength of each. in this case 50% red, 0% green, 0% blue
background("rgba(245, 174, 93, 1)") //use rgb or rgba to bring up colorpicker

strokeWeight(6) //setting new stroke weight for all shapes after
stroke("rgba(8, 173, 168, 1)") //setting new stroke color for all shapes after
fill("rgba(159, 96, 213, 1)") //setting new fill color for all shapes after
circle(200,250,50);

rect(50,50,100,15);
rect(250,50,100,15);

fill("rgba(6, 11, 29, 1)") //new fill color for all shapes after
ellipse(100,200,50,100);
ellipse(300,200,50,100);

//line(50,350,350,350); //line connects two points (x1,y1,x2,y2)

//complex polygons (more than 2 coordinates) can be made with beginShape() and endShape()
//each vertex is defined with vertex(x,y)
beginShape();
vertex(150,350);
vertex(200,280);
vertex(250,350);
endShape(CLOSE); //CLOSE connects last and first vertex

circle(width/2,height/2,25); //circle in center of canvas done with expressions (width and height are p5 variables that store canvas dimensions)

circle(mouseX,mouseY,mouseX*swaggerMultiplyer); //circle that follows mouse (mouseX and mouseY are p5 variables that store mouse position)

arc(width/2,height/2,150,150,radians(30),radians(330),PIE); //arc in center of canvas (x,y,width,height,start angle,end angle,mode)

}
