var capture;

function setup() {
  createCanvas(400, 320);
  capture = createCapture(VIDEO);
  capture.size(width, height);
  //capture.hide();
}

// function preload(){
// img = loadImage('spaceman.png');
// }

function draw() {
  background(255);
  //image(capture, 0, 0, 320, 240);
  //filter('INVERT');
}
