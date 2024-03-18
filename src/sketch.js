let timer = 0;
let cloudX = 0;
let cloudY = 0;

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

  if (timer < 100) {
    drawHumpty();
  }
  if (timer >= 100 && timer < 150) {
    drawHumptyShock(100, 350, -PI/2);
  }
  if (timer >= 150 && timer < 200) {
    drawHumptyShock(400, 350, PI);
  }
  if (timer >= 200) {
    drawBrokenHumpty(150,300,0);
    drawBrokenHumpty(250,300,5);
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