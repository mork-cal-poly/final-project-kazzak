let timer = 0;
let cloudX = 0;
let cloudY = 0;
let animationSpeed = 2;
let legsOpen = true;
rr= 0;
lr = 0;

let xStart = [];
let brickWidth = [];
function setup() {
  // For ordering nodes in the DOM
  let myCanvas = createCanvas(400, 400); 
  myCanvas.parent("canvas-parent"); 
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

function draw() {
  background(183,219,239);
  drawClouds(cloudX,cloudY);
  cloudX = cloudX + 1;
  cloudY = cloudY + 0;
  drawGround();
  drawWall();

  if (timer < 200) {
    textSize(15);
    fill(0);
    text("Humpty Dupty sat on a wall...", 5,15);
    drawHumpty();
    drawRocks();
  }
  if (timer >= 200 && timer < 250) {
    textSize(15);
    fill(0);
    text("Humpty Dupty had a great fall...", 5,15);
    drawHumptyShock(100, 350, -PI/2);
    drawRocks();
  }
  if (timer >= 250 && timer < 300) {
    textSize(15);
    fill(0);
    text("Humpty Dupty had a great fall...", 5,15);
    drawHumptyShock(400, 350, PI);
    drawRocks();
  }
  if (timer >= 300) {
    textSize(15);
    fill(0);
    text("Humpty Dupty had a great fall...", 5,15);
    drawBrokenHumpty(150,300,0);
    drawBrokenHumpty(250,300,5);
    drawRocks();
  }
  if (timer > 400 && timer < 500) {
    textSize(15);
    fill(0);
    text("All the king's horses and all the king's men...", 5,15);
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

  if (timer > 500 && timer < 600) {
    drawLandscape();
    drawStillWall();
  drawHumpity(150,300,0);
  drawHumpity(250,300,5);
  drawGhost();
  }
  if (timer >=600){
    background(255);
    fill(255);
    textSize(20);
    fill(0);
    text("~The End~", 150,200);
  }
  timer++;
}

function drawHumpty() {
  //body
  fill(240,234,214);
  ellipse (200, 100, 100, 130);
  //eyes
  fill(0);
  ellipse (170,100, 15);
  ellipse (230,100, 15);
  //eye whites
  fill(255);
  ellipse (173,95, 5);
  ellipse (233,95, 5);
  //blush
  fill(255,192,203);
  noStroke();
  ellipse (160,110, 10,5);
  ellipse (240,110, 10,5); 
  //smile
  noFill();
  stroke(0);
  arc(200, 110, 20, 15, 0, PI);
  //arms and legs
  line(170, 180, 180, 160);
  line(230, 180, 220, 160);
  line(152, 120, 148, 150);
  line(248, 120, 252, 150);
}

function drawHumptyShock(x, y, r) {
  push();
  translate(x, y);
  rotate(r);
  //body
  fill(240,234,214);
  ellipse (200,100, 100, 130);
  //eyes
  fill(0);
  ellipse (170,100, 15);
  ellipse (230,100, 15);
  //eye whites
  fill(255);
  ellipse (173,95, 5);
  ellipse (233,95, 5);
  //blush
  fill(255,192,203);
  noStroke();
  ellipse (160,110, 10,5);
  ellipse (240,110, 10,5); 
  //smile
  fill(0);
  stroke(0);
  ellipse(200, 110, 20, 15);
  //arms and legs
  line(170, 180, 180, 160);
  line(230, 180, 220, 160);
  line(152, 120, 130, 90);
  line(248, 120, 270, 90);
  pop();
}

function drawBrokenHumpty(eggx, eggy, r){
  push();
  translate(eggx, eggy);
  rotate(r);
  fill(240,234,214);
  arc(0, 0, 100, 100, PI/4, PI*5/4);
  pop();
}

function drawWall(){
  let y = 160;
  let rowNum = 0;
  while (y <= 300){
    drawRow(y, rowNum);
    y += 30;
    rowNum++;
  }
}

// brick row
function drawRow(y, rowNum){
  let x = xStart[rowNum];
  let brick = 0;
  while (x <= width) {
    let w = brickWidth[rowNum][brick];
    drawBrick(x, y, w);
    x += w;
    brick++;
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

function drawGround() {
  fill(220);
  rect(0, height / 2, width, height / 2);
}

function drawClouds(x,y) {
  push();  
  translate(x,y);
  fill(255);
  noStroke();
    //cloud 1
    ellipse (75,50,35,20)
    ellipse (95,50,45,30)
    ellipse (115,50,35,20)
    //cloud 2
    ellipse (275,90,35,20)
    ellipse (295,90,45,30)
    ellipse (315,90,35,20)
    //cloud 3
    ellipse (0,90,35,20)
    ellipse (25,90,45,30)
    ellipse (50,90,35,20)
  pop();
}

function drawRocks(x,y){
  stroke(0);
  fill(105,105,105);
  ellipse(370, 370, 10);
  ellipse(190, 390, 10);
  ellipse(70, 330, 10);
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
    drawRow(y, rowNum);
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
    drawBrick(x, y, w);
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
  stroke(0);
  fill (240,234,214);
  arc(0, 0, 100, 100, PI/4, PI*5/4);
  pop();
}

let gy = 0;
let targetGy = 0;

function drawGhost(){
  push();
  translate(200, 200);
  fill (255);
  triangle(-50,gy,50,gy,0,gy+100)
  ellipse(0, gy, 100);
  noFill()
  line(20,gy+10,-20,gy-10)
  line(-20,gy+10,20,gy-10)
  pop();
  
  if (gy !== targetGy) {
    let direction = (targetGy - gy) / abs(targetGy - gy); 
    gy += direction * animationSpeed; 
  }
}

function mouseClicked() {
  targetGy -= 400; 
  //loop(); 
  frameRate(60); 
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
