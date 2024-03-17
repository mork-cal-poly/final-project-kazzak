let animationSpeed = 2;
let timer = 0;
let legsOpen = true;
rr= 0;
lr = 0;

function setup() {
  // For ordering nodes in the DOM
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}

function draw(){
  if (timer > 3 && timer < 400) {
    drawLandscape();
    drawWall();
    drawHorse(70,270);
    drawHorse(200,270);
    drawHorse(150,270);
    
    legsOpen =! legsOpen
    
    if (legsOpen){
    lr -= PI / 6.0
    rr += PI / 6.0
    }
    else 
    {lr += PI / 6.0
    rr -= PI / 6.0}
    frameRate(20);
  }
  timer++;
  
}

function drawLandscape() {
  // Sky
  background(135, 206, 250);

  // cement
  fill(220);
  rect(0, height / 2, width, height / 2);
  
}

function drawWall(){
  let y = 100;
  while (y <= 250){
    drawRow(y);
    y += 30;
  }
}

// brick row
function drawRow(y){
  let x = random(50) * -1;
  while (x <= width) {
    let w = random(50, 100);
    drawBrick(x, y, w);
    x += w;
  }
}

// brick
function drawBrick(x, y, w) {
  push();
  translate(x, y);
  fill(139, 69, 19);
  rect(0, 0, w, 30);
  pop();
}

function drawHorse(x,y) {
  push();
  translate(x, y);
  fill(255);
  drawLegs(30, 20, rr);
  drawLegs(10, 20,rr);
  drawLegs(-20, 20, lr);
  drawLegs(-40, 20, lr);
  quad(10, 0, 50, 0, 70, -70, 30, -70);
  ellipse(0, 0, 100, 70);
  triangle(60,-90,70,-90,65,-110)
  triangle(50,-90,60,-90,55,-110)
  ellipse(60, -70, 60, 50);
  fill(255);
  ellipse(50, -70, 15);
  ellipse(80, -70, 15);
  fill(0);
  ellipse(50, -70, 7);
  ellipse(80, -70, 7);
  ellipse(65, -55, 5);
  ellipse(75, -55, 5);
  pop();
}

function drawLegs(x, y, r) {
  push();
  translate(x, y);
  rotate(r);
  rect(0, 0, 10, 50);
  pop();
}
