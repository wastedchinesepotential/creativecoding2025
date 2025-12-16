let controller;

function setup() {
  createCanvas(400, 400);
  WebMidi.enable(onMidiEnabled);
}

function draw() {
  background(220);
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
}

function onNoteOn(event) {
  print('Note: ' + event.note.name + event.note.octave + ', MIDI Number: ' + event.note.number + ', Velocity: ' + event.rawVelocity);
}

function onControlChange(event) {
  print('Knob: ' + event.controller.number + ', Value: ' + event.value);
}