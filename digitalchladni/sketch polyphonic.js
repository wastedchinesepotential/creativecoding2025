//https://paulbourke.net/geometry/chladni/
//https://www.youtube.com/watch?v=J-siGcsK2k8

let particles = [];
let number = 5000;
let m = 5; //mode number of cymatic pattern found in equation in cymatic function
let n = 2; //changes the chladni pattern type refer to chart on paul bourke's website
let threshold = 0.5; //threshhold value to use for if the cymatic equation = 0 (location of nodal line), we color the square black. we use a value just above zero because apparently it works better
let controller;
/* let currentNote = -2;
let noteOn = false;
let activeKeys = 0; */

let activeNotes = new Set(); //creates a set to hold all currently active notes

let noteMappings = {
  48: {m:1, n:1},  // C3
  49: {m:1, n:1},  // C#3 (black)
  50: {m:9, n:8},  // D3
  51: {m:9, n:8},  // D#3 (black)
  52: {m:5, n:4},  // E3
  53: {m:4, n:3},  // F3
  54: {m:4, n:3},  // F#3 (black)
  55: {m:3, n:2},  // G3
  56: {m:3, n:2},  // G#3 (black)
  57: {m:5, n:3},  // A3
  58: {m:5, n:3},  // A#3 (black)
  59: {m:15, n:8}, // B3
  60: {m:2, n:1},  // C4
  61: {m:2, n:1},  // C#4 (black)
  62: {m:9, n:4},  // D4
  63: {m:9, n:4},  // D#4 (black)
  64: {m:5, n:2},  // E4
  65: {m:8, n:3},  // F4
  66: {m:8, n:3},  // F#4 (black)
  67: {m:3, n:1},  // G4
  68: {m:3, n:1},  // G#4 (black)
  69: {m:10, n:3}, // A4
  70: {m:10, n:3}, // A#4 (black)
  71: {m:15, n:4}, // B4
  72: {m:4, n:1},  // C5
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

/*  if (noteMappings[currentNote]) {
    n = noteMappings[currentNote].n;
    m = noteMappings[currentNote].m;
  } */

  for (let i=0; i < particles.length; i++) {
    particles[i].update();
    particles[i].display();
  }
}

function cymatic(x,y){ //Standing Wave equation for chladni patterns for a square plate from Paul Bourke's website,
/*   let L = 1;
  return cos(n * PI * x / L) * cos(m * PI * y / L) + cos(m * PI * x / L) * cos(n * PI * y / L); */

  let L = 1;
  let totalWaves = 0; 

  for (let note of activeNotes) { //for loop that goes through all currently active notes
    if (noteMappings[note]) { //checks if the note has a mapping from MIDI note number to m and n values and gets specific m and n values for that note
      let noteM = noteMappings[note].m; 
      let noteN = noteMappings[note].n;
      
      let wave = cos(noteN * PI * x / L) * cos(noteM * PI * y / L) + cos(noteM * PI * x / L) * cos(noteN * PI * y / L); //calculates the wave from this specific note
      
      totalWaves += wave; //adds this wave to the total waves

    }

  }

  if (activeNotes.size > 0) {
    return totalWaves / activeNotes.size; //returns the average wave value if there are active notes (total waves divided by number of active notes)
  } else {
    return 0; //returns 0 if no active notes
  }


} //switched to (+) instead of (-) to prevent empty diagonal line

class particle {
  constructor() {
    this.position = createVector(random(0,width), random(0,height));
  /*   this.velocity = p5.Vector.random2D();
    this.acceleration = createVector();

    this.maxSpeed = 5;
    this.maxForce = 0.3; */  //deleted these to go for a different particle method

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

  update() {
    //if (activeKeys > 0) {

    if (activeNotes.size > 0) { //checks if there are any active notes
    let x = map(this.position.x, 0, width, 0, 1); //maps pixels on canvas to 0-1 range for use in cymatic equation (ie. pixel 0 = 0 in formula and pixel 400 = 1 for a 400x400 canvas)
    let y = map(this.position.y, 0, height, 0, 1); //samething for y axis

    let value = cymatic(x,y); //get x y value from cymatic equation (this is now combined wave value from all active notes)

    let vibrate = 0.05 + (abs(value) * 25); //set how much the particle will "vibrate" based on how close it is to a nodal line, closer to 0 means closer to nodal line
    //first number is the base amount of vibration, the second part scales the vibration based on how close to zero the value is (absolute so +- dont matter)
    //last number is a multiplier to scale the amount of vibration, can be adjusted to taste 

    this.position.x += random(-vibrate, vibrate); //picks random point in square around particle to move to based on vibrate value above
    this.position.y += random(-vibrate, vibrate);

    this.edges(); //makes particles that go offscreen reappear on other side
    } else {
      let scatter = 30;
      this.position.x += random(-scatter, scatter); //picks random point in square around particle to move to based on vibrate value above
      this.position.y += random(-scatter, scatter);
    }


  }

  display() {
    stroke(255);
    //ellipse(this.position.x, this.position.y, 0.5, 0.5);

    //square(this.position.x, this.position.y, 0.1);
    
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
 /*  currentNote = event.note.number;
  noteOn = true;
  activeKeys++;
  print('Note: ' + event.note.name + event.note.octave + ', MIDI Number: ' + event.note.number + ', Velocity: ' + event.rawVelocity); */

  activeNotes.add(event.note.number); //adds the note number to the set of active notes
  print('Note On: ' + event.note.name + event.note.octave);

}

function onNoteOff(event) {
/*   noteOn = false;
  activeKeys--;
  if (activeKeys < 0) activeKeys = 0; */

  activeNotes.delete(event.note.number); //removes the note number from the set of active notes

}

function onControlChange(event) {
  print('Knob: ' + event.controller.number + ', Value: ' + event.value);
}


function keyPressed() {
  if (key === 'f' || key === 'F') fullscreen(!fullscreen());
}

