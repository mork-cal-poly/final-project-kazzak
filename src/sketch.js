let timer = 0;
let cloudX = 0;
let cloudY = 0;
let animationStarted = false;
let smallHumptyClicked = false;

let xStart = [];
let brickWidth = [];

function setup() {
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
  if (animationStarted) {
    background(183, 219, 239);
    drawClouds(cloudX, cloudY);
    cloudX = cloudX + 1;
    cloudY = cloudY + 0;
    drawGround();
    drawWall();

    if (timer < 200) {
      textSize(15);
      fill(0);
      text("Humpty Dumpty sat on a wall...", 105, 15);
      drawHumpty();
      drawRocks();
    }
    if (timer >= 200 && timer < 250) {
      textSize(15);
      fill(0);
      text("Humpty Dumpty had a great fall...", 115, 15);
      drawHumptyShock(100, 350, -PI / 2);
      drawRocks();
    }
    if (timer >= 250 && timer < 300) {
      textSize(15);
      fill(0);
      text("Humpty Dumpty had a great fall...", 115, 15);
      drawHumptyShock(400, 350, PI);
      drawRocks();
    }
    if (timer >= 300) {
      textSize(15);
      fill(0);
      text("Humpty Dumpty had a great fall...", 115, 15);
      drawBrokenHumpty(150, 300, 0);
      drawBrokenHumpty(250, 300, 5);
      drawRocks();
    }

    timer++;
  } else {
    background(183, 219, 239);
    textSize(10);
    textAlign(CENTER, CENTER);
    fill(0);
    text("click me!", 200, 300);
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

function drawHumpty() {
  //body
  fill(240, 234, 214);
  ellipse(200, 100, 100, 130);
  //eyes
  fill(0);
  ellipse(170, 100, 15);
  ellipse(230, 100, 15);
  //eye whites
  fill(255);
  ellipse(173, 95, 5);
  ellipse(233, 95, 5);
  //blush
  fill(255, 192, 203);
  noStroke();
  ellipse(160, 110, 10, 5);
  ellipse(240, 110, 10, 5);
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
  fill(240, 234, 214);
  ellipse(200, 100, 100, 130);
  //eyes
  fill(0);
  ellipse(170, 100, 15);
  ellipse(230, 100, 15);
  //eye whites
  fill(255);
  ellipse(173, 95, 5);
  ellipse(233, 95, 5);
  //blush
  fill(255, 192, 203);
  noStroke();
  ellipse(160, 110, 10, 5);
  ellipse(240, 110, 10, 5);
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

function drawBrokenHumpty(eggx, eggy, r) {
  push();
  translate(eggx, eggy);
  rotate(r);
  fill(240, 234, 214);
  arc(0, 0, 100, 100, PI / 4, (PI * 5) / 4);
  pop();
}

function drawWall() {
  let y = 160;
  let rowNum = 0;
  while (y <= 300) {
    drawRow(y, rowNum);
    y += 30;
    rowNum++;
  }
}

// brick row
function drawRow(y, rowNum) {
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

function drawClouds(x, y) {
  push();
  translate(x, y);
  fill(255);
  noStroke();
  //cloud 1
  ellipse(75, 50, 35, 20);
  ellipse(95, 50, 45, 30);
  ellipse(115, 50, 35, 20);
  //cloud 2
  ellipse(275, 90, 35, 20);
  ellipse(295, 90, 45, 30);
  ellipse(315, 90, 35, 20);
  //cloud 3
  ellipse(0, 90, 35, 20);
  ellipse(25, 90, 45, 30);
  ellipse(50, 90, 35, 20);
  pop();
}

function drawRocks(x, y) {
  stroke(0);
  fill(105, 105, 105);
  ellipse(370, 370, 10);
  ellipse(190, 390, 10);
  ellipse(70, 330, 10);
}
