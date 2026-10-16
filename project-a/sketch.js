/*
Template for IMA's Creative Coding Lab 

Project A: Generative Creatures
CCLaboratories Biodiversity Atlas 
*/

let horizon;
let sunHeight;
let sunOpacity = 0;
let posX = 100;
let posY;

function setup() {
  createCanvas(800, 500);
  horizon = height / 2 - 20;
}

function draw() {
  background(220);
  if (sunHeight < 200) {
    background(214, 244, 255);
  } else {
    background(0);
  }

  sunHeight = mouseY;

  //change sun's opacity based on Sun's height(mouse position)
  sunOpacity = 255 - sunHeight;

  //draw the sun
  fill(252, 186, 3, sunOpacity);
  circle(200, sunHeight, 100);

  //draw the landscape
  noStroke();
  fill(63, 200, 242, 100);
  beginShape();
  //make a wave
  splineVertex(0, height / 2);
  splineVertex(width * 0.2, height / 2 + 50);
  splineVertex(width * 0.5, height / 2 - 20);
  splineVertex(width * 0.85, height / 2 + 55);
  splineVertex(width * 1, height / 2 + 30);
  splineVertex(width, height);
  splineVertex(0, height);
  endShape(CLOSE);

  //change the wave color based on sun's height(mouse position)

  if (sunHeight < 200) {
    fill(109, 203, 232);
  } else {
    fill(64, 95, 110);
  }

  beginShape();
  //make a second wave
  splineVertex(0 + 5, height / 2 + 50);
  splineVertex(width * 0.2 + 5, height / 2 + 50 + 50);
  splineVertex(width * 0.5 + 5, height / 2 - 20 + 50);
  splineVertex(width * 0.85 + 5, height / 2 + 55 + 50);
  splineVertex(width * 1 + 5, height / 2 + 30 + 50);
  splineVertex(width + 5, height);
  splineVertex(0, height);
  endShape(CLOSE);

  //draw the fish
  push();
  posY = map(noise(frameCount / 100), 0, 1, 260, 400);
  translate(posX, posY);
  noStroke();
  fill(5, 140, 255);
  ellipse(0, 0, 80, 40); //body
  triangle(0 - 25, 0, -50, -40, -50, 40); //tail
  fill(0);
  circle(0 + 20, 0, 10); //eyes

  posX++;
  if (posX >= 400) {
    posX = 0;
  }
  pop();
}

function drawFish() {
  push();
  posY = map(noise(frameCount / 100), 0, 1, 260, 400);
  translate(posX, posY);
  noStroke();
  fill(5, 140, 255);
  ellipse(0, 0, 80, 40); //body
  triangle(0 - 25, 0, -50, -40, -50, 40); //tail
  fill(0);
  circle(0 + 20, 0, 10); //eyes


  if (posX >= 400) {
    posX = 0;
  }
  pop();
}


