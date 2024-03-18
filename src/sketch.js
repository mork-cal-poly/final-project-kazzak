let timer = 0;
let animationSpeed = 2;
let legsOpen = true;
let rr= 0;
let lr = 0;
let xStart = [];
let brickWidth = [];
let ey=0

function setup() {
  // For ordering nodes in the DOM
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
  frameRate(20);
  for (let i = 0; i < 6; i++) {
    xStart.push(random(50) * -1);
    brickWidth.push([]);
    let x = xStart[i];
    let brick = 0;
    while (x <= width) {
      let w = random(50, 100);
      brickWidth[i][brick] = w;
      brick++;
      x += w;
    }
  }
}

function draw(){
  if (timer > 3 && timer < 80) {
    drawLandscape();
    drawWall();
    drawHorse(70,270, ey);
    drawHorse(200,270, ey);
    drawHorse(150,270, ey);
    
    legsOpen =! legsOpen
    
    if (legsOpen){
    lr -= PI / 6.0
    rr += PI / 6.0
    }
    else {
      lr += PI / 6.0
      rr -= PI / 6.0
    }
  }
  timer++;

  if (timer > 80 && timer < 200) {
    drawLandscape();
    drawStillWall();
    drawHorse(100, 270, ey);
    drawHumpity(150,300,0);
    drawHumpity(250,300,5);
    drawGhost();
    drawHorse(50, 270, ey);
    drawHorse(-5, 270, ey);
    if (timer > 90 && timer < 200)
    {
      targetGy -= 400; 
      loop(); 
      frameRate(40); 
      animationSpeed = 5
      while (ey<5)
      ey+=1
    }
  }
}

function drawLandscape() {
  background(135, 206, 250);

  fill(220);
  rect(0, height / 2, width, height / 2);
  
}

function drawStillWall(){
  let y = 100;
  let rowNum = 0;
  while (y <= 250){
    drawStillRow(y, rowNum);
    y += 30;
    rowNum++;
  }
}

// brick row
function drawStillRow(y, rowNum){
  let x = xStart[rowNum];
  let brick = 0;
  while (x <= width) {
    let w = brickWidth[rowNum][brick];
    drawStillBrick(x, y, w);
    x += w;
    brick++;
  }
}

// brick
function drawStillBrick(x, y, w) {
  push();
  translate(x, y);
  fill(139, 69, 19);
  rect(0, 0, w, 30);
  pop();
}

function drawHumpity(eggx, eggy, r){
  push();
  translate(eggx, eggy);
  rotate(r);
  fill(240,234,214);
  arc(0, 0, 100, 100, PI/4, PI*5/4);
  pop();
}

let gy = 0;
let targetGy = 0;

function drawGhost(){
  push();
  translate(200, 200);
  noStroke()
  fill (255);
  triangle(-50,gy,50,gy,0,gy+100)
  ellipse(0, gy, 100);
  stroke(0)
  noFill()
  line(30,gy+10,10,gy-10)
  line(10,gy+10,30,gy-10)
  line(-30,gy+10,-10,gy-10)
  line(-10,gy+10,-30,gy-10)
  line(5,gy,-5,gy)
  pop();
  
  if (gy !== targetGy) {
    let direction = (targetGy - gy) / abs(targetGy - gy); 
    gy += direction * animationSpeed; 
  }
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

function drawHorse(x,y,ey) {
  push();
  translate(x, y);
  fill(196, 164, 132);
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
  ellipse(50, ey -70, 7);
  ellipse(80, ey -70, 7);
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

