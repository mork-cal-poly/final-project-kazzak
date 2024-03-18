let timer = 0;
let cloudX = 0;
let cloudY = 0;
let animationStarted = false;
let smallHumptyClicked = false;
let animationSpeed = 2;
let legsOpen = true;
let rr= 0;
let lr = 0;
let xStart = [];
let brickWidth = [];
let ey=0
let gy = 0;
let targetGy = 0;

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
  myCanvas.mousePressed(checkClick);
}

function draw() {
  if (animationStarted){
  background(183,219,239);
  drawClouds(cloudX,cloudY);
  cloudX = cloudX + 1;
  cloudY = cloudY + 0;
  drawGround();

  if (timer < 150) {
    textSize(15);
    fill(0);
    drawStillWall();
    text("Humpty Dumpty sat on a wall...",200,20);
    drawHumpty();
    drawRocks();
  }
  if (timer >= 150 && timer < 200) {
    textSize(15);
    fill(0);
    drawStillWall();
    text("Humpty Dumpty had a great fall...", 200,20);
    drawHumptyShock(100, 350, -PI/2);
    drawRocks();
  }
  if (timer >= 200 && timer < 225) {
    textSize(15);
    fill(0);
    drawStillWall();
    text("Humpty Dumpty had a great fall...", 200,20);
    drawHumptyShock(400, 350, PI);
    drawRocks();
  }
  if (timer >= 225 && timer < 330) {
    textSize(15);
    fill(0);
    drawStillWall();
    text("Humpty Dumpty had a great fall...", 200,20);
    drawBrokenHumpty(150,300,0);
    drawBrokenHumpty(250,300,5);
    drawRocks();
  }
  if (timer > 330 && timer < 375) {
    frameRate(20);
    drawLandscape();
    textSize(15);
    fill(0);
    text("All the king's horses (and all the king's men)...", 200,20);
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
  if (timer > 375 && timer < 475) {
    drawLandscape();
    drawStillWall();
    textSize(15);
    fill(0);
    text("Couldn't put Humpty back together again.", 200,20);
    drawHorse(100, 270, ey);
    drawBrokenHumpty(150,300,0);
    drawBrokenHumpty(250,300,5);
    drawGhost();
    drawHorse(50, 270, ey);
    drawHorse(-5, 270, ey);
    if (timer > 380 && timer < 475)
    {
      targetGy -= 400; 
      loop(); 
      frameRate(40); 
      animationSpeed = 5
      while (ey<5)
      ey+=1
    }
  }
  if (timer > 475){
    background(183, 219, 239)
    textSize(10);
    fill(0);
    text("The End!", 200,300);
    drawSmallHumpty();
  }
    timer++;
} else{
  background(183, 219, 239);
  textSize(10);
  textAlign(CENTER, CENTER);
  fill(0);
  text("click Humpty to start!", 200, 300);
  drawSmallHumpty();
}
}
function checkClick() {
  if (!animationStarted) {
    if (
      mouseX >= 175 &&
      mouseX <= 225 &&
      mouseY >= 175 &&
      mouseY <= 225
    ) {
      animationStarted = true;
      smallHumptyClicked = true;
    }
  }
}
function drawSmallHumpty() {
  //body
  fill(240, 234, 214);
  ellipse(200, 200, 50, 65);
  //eyes
  fill(0);
  ellipse(185, 200, 7.5);
  ellipse(215, 200, 7.5);
  //eye whites
  fill(255);
  ellipse(186.5, 198, 2.5);
  ellipse(216.5, 198, 2.5);
  //blush
  fill(255, 192, 203);
  noStroke();
  ellipse(180, 210, 5, 2.5);
  ellipse(220, 210, 5, 2.5);
  //smile
  noFill();
  stroke(0);
  arc(200, 210, 10, 7.5, 0, PI);
  //arms and legs
  line(176, 190, 170, 180);
  line(224, 190, 230, 180);
  line(190, 230, 190, 240);
  line(210, 230, 210, 240);
}

function drawLandscape() {
  background(135, 206, 250);
  fill(220);
  rect(0, height / 2, width, height / 2);
}

function drawStillWall(){
  let y = 150;
  let rowNum = 0;
  while (y <= 300){
    drawStillRow(y, rowNum);
    y += 30;
    rowNum++;
  }
}

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

function drawStillBrick(x, y, w) {
  push();
  translate(x, y);
  fill(139, 69, 19);
  rect(0, 0, w, 30);
  pop();
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
  let y = 150;
  while (y <= 300){
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
