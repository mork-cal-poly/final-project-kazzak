let timer = 0;
let cloudX = 0;
let cloudY = 0;

function setup() {
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}

function draw() {
  background(235,222,240);

  if (timer > 60 && timer < 200) {
    textSize(20);
    text("The Story of Humpty Dumpty", 80, 200);
  }
  if (timer >= 200 && timer < 400) {
    textSize(20);
    text("The Story of Humpty Dumpty", 80, 200);
    textSize(10);
    text("by Abby, Kira and Zoe", 160, 220);
  }
  if (timer >= 400 && timer < 500) {
    textSize(20);
    text("", 80, 200);
  }
  if (timer >= 500 && timer < 800){
    background(183,219,239);
    drawClouds(cloudX,cloudY);
    cloudX = cloudX + 1;
    cloudY = cloudY + 0;
    drawHumpty(240,234);
    textSize(10);
    text("Humpty Dumpty sat on a wall...", 5, 15);
  }
  
  timer++;
}

function drawHumpty(x,y) {
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
  noFill();
  stroke(0);
  arc(200, 110, 20, 15, 0, PI);
  //arms and legs
  line(170, 180, 180, 160);
  line(230, 180, 220, 160);
  line(152, 120, 148, 150);
  line(248, 120, 252, 150);
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
