//https://paulbourke.net/geometry/chladni/
//https://www.youtube.com/watch?v=J-siGcsK2k8

let particles = [];
let number = 2000;
let m = 5; //mode number of cymatic pattern found in equation in cymatic function
let n = 2; //changes the chladni pattern type refer to chart on paul bourke's website
let threshold = 0.2; //threshhold value to use for if the cymatic equation = 0 (location of nodal line), we color the square black. we use a value just above zero because apparently it works better
let controller;
let currentNote = -1;
let noteOn = false;
let noteMappings = {
  48: {m:1, n:1},
  50: {m:9, n:8},
  52: {m:5, n:4},
  53: {m:4, n:3},
  55: {m:3, n:2},
  57: {m:5, n:3},
  59: {m:15, n:8},
  60: {m:2, n:1},
  62: {m:9, n:4},
  64: {m:5, n:2},
  65: {m:8, n:3},
  67: {m:3, n:1},
  69: {m:10, n:3},
  71: {m:15, n:4},
  72: {m:4, n:1},

}

function setup() {
  createCanvas(800, 800);
  WebMidi.enable(onMidiEnabled);
  for (let i = 0; i < number; i++) {
    particles.push(new particle());
  }
}

function draw() {
  background(0,0,0,50);
  m = map(mouseX, 0, width, 2, 5);
  n = map(mouseY,0,width,2,5)

 if (noteMappings[currentNote]) {
    n = noteMappings[currentNote].n;
    m = noteMappings[currentNote].m;
  }

  for (let i=0; i < particles.length; i++) {
    particles[i].update();
    particles[i].display();
  }
}

function cymatic(x,y){
  let L = 1;
  return cos(n * PI * x / L) * cos(m * PI * y / L) + cos(m * PI * x / L) * cos(n * PI * y / L); //Standing Wave equation for chladni patterns for a square plate from Paul Bourke's website, bound to be changed later
} //switched to (+) instead of (-) to prevent empty diagonal line

class particle {
  constructor() {
    this.position = createVector(random(0,width), random(0,height));
    this.velocity = p5.Vector.random2D();
    this.acceleration = createVector();

    this.maxSpeed = 5;
    this.maxForce = 0.3;
  }

  edges() {
    if (this.position.x > width) {
      this.position.x = 0;
    } else if (this.position.x < 0) {
      this.position.x = width;
    }
    if (this.position.y > height) {
      this.position.y = 0;
    } else if (this.position.y < 0) {
      this.position.y = height;
    }

  }

  seek() { //copied from chladni sketch in finalassignment folder
    let x = map(this.position.x, 0, width, 0, 1); //maps i (which goes from 0 to number of columns) to -1-1 as x variable but instead uses this.position.x and width now
      let y = map(this.position.y, 0, height, 0, 1); //maps j (which goes from 0 to number of rows) to -1-1 as y variable... same here remapped j to this.position.y and rows to height
      //^originally mapped to -1 to 1 but the output is supposed to be based on the range of for the specific pattern on paul bourke's website

      //let value = map(cymatic(x,y), -2, 1, 0, 255); //maps the output of cymatic function (which takes in x and y variables) from -2 to 1 to 0-255 for greyscale 
      let value = cymatic(x,y); //gets x,y value from cymatic function
      //print(floor(value));

      let target = this.position.copy();

      /* target.x += random(-20, 20);
      target.y += random(-20, 20); */

      //using a conditional statement to fill the rectangles based on if threshold value is larger than output value from cymatic function
      if (abs(value) > threshold){ //absolute value means it ignores negatives? () in this sketch it is now set to LARGER than threshold
        target.x += random(-4,4);
        target.y += random(-4,4);

        //fill(255); //fills rectangle with black if value is below threshold
      } else {
        fill(0); //fills rectangle with white if value is above threshold
      }

      let desiredVelocity = p5.Vector.sub(target, this.position);
      desiredVelocity.setMag(this.maxSpeed);
      let steeringForce =p5.Vector.sub(desiredVelocity, this.velocity);
      steeringForce.limit(this.maxForce);

      return steeringForce;
  }

  update() {
    this.edges();

    this.acceleration.add(this.seek());
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  display() {
    stroke(255);
    //ellipse(this.position.x, this.position.y, 2, 2);
    
    point(this.position.x, this.position.y);

  }
}

function onMidiEnabled() {
  print("Available MIDI inputs:");
  for (let i = 0; i < WebMidi.inputs.length; i++) {
    print(WebMidi.inputs[i].name);
  }
  
  controller = WebMidi.getInputByName('Akai LPK25 Wireless');
  
  if (!controller) {
    print('Could not find MPKMini2 MIDI controller!');
    return;
  }
  print('Connected to MPKMini2.');
  
  controller.addListener('noteon', 'all', onNoteOn);
  controller.addListener('controlchange', 'all', onControlChange);
  controller.addListener('noteoff', 'all', onNoteOff);
}

function onNoteOn(event) {
  currentNote = event.note.number;
  noteOn = true;
  print('Note: ' + event.note.name + event.note.octave + ', MIDI Number: ' + event.note.number + ', Velocity: ' + event.rawVelocity);
}

function onNoteOff(event) {
  noteOn = false;
}

function onControlChange(event) {
  print('Knob: ' + event.controller.number + ', Value: ' + event.value);
}

