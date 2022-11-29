let cars = [] ;
let frog;
let LfrogFrames=[];
let RfrogFrames=[];
let state = 0;
let timer = 0;
let frame = 0;
let f1, TFrog, LFrog,WFrog, Lpad, s1;

let alpha = 0, beta = 0 , gamma = 0; // gyroscope variablers
let xPosition = 0;
let yPosition = 0;
let x = 0, y = 0, z = 0 ; // accelerometer data
function setup() {
  
  createCanvas(windowWidth, windowHeight);
imageMode(CENTER);
  rectMode(CENTER);
  textAlign(CENTER);
  f1= loadFont("1x/Bubblegum.ttf");
  TFrog=loadImage("1x/TitleFrog.png");
  WFrog=loadImage("1x/WinFrog.png");
  LFrog=loadImage("1x/LoseFrog.png");
  Lpad=loadImage("1x/LPads.png");// Background image taken from https://twitter.com/normanfrog/status/1168000047671177216?lang=zh-Hant

  LfrogFrames[0]=loadImage("1x/LF1.png");
  LfrogFrames[1]=loadImage("1x/LF2.png");
  LfrogFrames[2]=loadImage("1x/LF3.png");
  LfrogFrames[3]=loadImage("1x/LF4.png");
  LfrogFrames[4]=loadImage("1x/LF5.png");
  LfrogFrames[5]=loadImage("1x/LF6.png");
  RfrogFrames[0]=loadImage("1x/rF1.png");
  RfrogFrames[1]=loadImage("1x/rF2.png");
  RfrogFrames[2]=loadImage("1x/rF3.png");
  RfrogFrames[3]=loadImage("1x/rF4.png");
  RfrogFrames[4]=loadImage("1x/rF5.png");
  RfrogFrames[5]=loadImage("1x/rF6.png");

  for (let i = 0 ; i < 25 ; i++) {
    cars.push(new Car()) ;
  }
  
  // initialize the "frog position" vector
 frogPos = createVector(width / 2, height - 80);
 frog= new player();
}

function draw() {
  xPosition = map(gamma, -60, 60, 0, width);
  yPosition = map(beta, -30, 30, 0, height);
  textAlign(LEFT);
  textSize(20);
  fill('black');
  text("orientation data:", 25, 25);
  textSize(15);
  text("alpha: " + alpha, 25, 50);
  text("beta: " + beta, 25, 70);
  text("gamma: " + gamma, 25, 90);
  textSize(20);
  text("acceleration data:", 25, 125);
  textSize(15);
  text("x = " + x.toFixed(2), 25, 150); // .toFixed means just show (x) decimal places
  text("y = " + y.toFixed(2), 25, 170);
  text("z = " + z.toFixed(4), 25, 190);
  textFont(f1,45);
  if(!s1.isPlaying())
      s1.play();
  switch (state) {
    
    case 0: // menu screen
     
     image(Lpad, width / 2, height / 2, width, height)
     fill('green');
     textSize(50);
      text("Help the Frog Catch all the Flies or It Will Starve!", width / 2, height / 2, 2*width/3,height/2);
      image(TFrog, width / 2, height / 2+50, 200, 200)
      text("Click to Release the Flies", width / 2, height / 2+400, 2*width/3,height/2);
      break;

    case 1: // game screen
    image(Lpad, width / 2, height / 2, width, height)
      game();
      timer++;
     if (timer > 20 * 60) {
        timer = 0;
        state = 3;
      }
      break;

    case 2: // win screen
    image(Lpad, width / 2, height / 2, width, height)
      fill("white");
      image(WFrog, width / 2, height / 2+50, 200, 200)
      text("That's a pretty happy frog!", width / 2, height / 2, 2*width/3,height/2);
      text("Well done!", width / 2, height / 2+400, 2*width/3,height/2);

      break;

    case 3: // lose screen
    image(Lpad, width / 2, height / 2, width, height)
      fill("red");
      text("Wow you let the frog starve. ", width / 2, height / 2, 2*width/3,height/2);
      image(LFrog, width / 2, height / 2+50, 200, 200);
      text("Are you happy? The frog sure isn't. you know. Because it's DEAD.", width / 2, height / 2+400, 2*width/3,height/2);

      break;
  }
}

function mouseReleased() {
  switch (state) {
    case 0:
      state = 1; // go to game
      break;

    case 2: // win state
      resetTheGame();
      state = 0;
      break;

    case 3: // lose state
      resetTheGame();
      state = 0;
      break;
  }
}

function game() {
  
  // operate on every car
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    // collision detection
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
    }
  }

  if (cars.length <= 0) {
    timer = 0;
    state = 2;
  }

  // add a "frog"
  push(); // before you use translate, rotate, or scale commands, push and then pop after

  translate(xPosition, yPosition); // move everything over by x, y

  rotate(radians(alpha)); // rotate the bunny depending on the alpha intake

  
  
  frog= new player();
  frog.display();
  frog.move();
  pop();
}

function resetTheGame() {
  cars = [];
  timer = 0;
  for (let i = 0; i < 20; i++) {
    cars.push(new Car());
  }
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 6;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 6;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 6;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 6;
  if (frogPos.x>width) frogPos.x=0;
  if (frogPos.x<0) frogPos.x=width;
  if (frogPos.y>height) frogPos.y=0;
  if (frogPos.y<0) frogPos.y=height;
}

time=0;
class player{
  constructer(){
   
  frame = 0;
 
  }
  // methods
  display(){
   
    if(keyIsDown(LEFT_ARROW))
    {image(LfrogFrames[frame], frogPos.x, frogPos.y, 100, 100);
    time++;
    
    //if (time > this.maxTimer) {
      if(time>0.1*60){
      if (frame > 4) frame = 0;
   else
    frame++;
    time=0;
      }
    }
    else{
    image(RfrogFrames[frame], frogPos.x, frogPos.y, 100, 100);
    time++;
    
    //if (time > this.maxTimer) {
      if(time>0.1*60){
      if (frame > 4) frame = 0;
   else
    frame++;
    time=0;
      }
    }
  }
  move(){
    //push(); // before you use translate, rotate, or scale commands, push and then pop after

    //translate(xPosition, yPosition); // move everything over by x, y
  
    //rotate(radians(alpha)); // rotate the bunny depending on the alpha intake
  
    //pop();
  }
}


class Car {
  // constructor and attributes
  constructor() {
    this.pos = createVector(random(width), 100); // initialize your attributes here
    this.velocity = createVector(random(-3,3), random(-2,2));
    this.size = random(48, 128);
  }

  // methods

  display() {
    // this can be text, images, or shapes
    fill(0);
    rect(this.pos.x, this.pos.y, 25, 25);
    fill(255);
    rect(this.pos.x+15, this.pos.y-15, 15, 10);
    rect(this.pos.x-15, this.pos.y-15, 15, 10);
    // image(this.img, this.pos.x, this.pos.y) ;
  }

  move() {
    this.pos.add(this.velocity);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}

function preload() {
  s1 = loadSound("1x/FrogMusic.mp3");
}
function touchStarted() {
  getAudioContext().resume();
}
window.addEventListener('deviceorientation', function(e) {
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});

// Read in accelerometer data
window.addEventListener('devicemotion', function(e) {
  // get accelerometer values
  x = e.acceleration.x;
  y = e.acceleration.y;
  z = e.acceleration.z;
});
