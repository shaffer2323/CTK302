
let alpha = 0, beta = 0 , gamma = 0;
let f1;
let xPosition = 0;
let yPosition = 0;
let x = 0, y = 0, z = 0 ; 


function setup() {

  createCanvas(windowWidth, windowHeight);


  f1= loadFont("assets/Ghostz.ttf");
  Spidey = loadImage("assets/spiderLogo.png");
  imageMode(CENTER);
  rectMode(CENTER);

}

function draw() {

  background('red'); 
  textFont(f1,20);
  fill('white');
  noStroke();
  textSize(50);
  textAlign(CENTER);
  text("Thwip!", windowWidth / 2, windowWidth / 2,0.75*width,0.75*height);
  
  xPosition = map(gamma, -60, 60, 0, width);
  yPosition = map(beta, -30, 30, 0, height);

  push(); 

  translate(xPosition, yPosition); 

  rotate(radians(alpha)); 

  image(Spidey, 0, 0, 400, 400);
 
  pop();


 
 
 
  

}




window.addEventListener('deviceorientation', function(e) {
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});


window.addEventListener('devicemotion', function(e) {
 
  x = e.acceleration.x;
  y = e.acceleration.y;
  z = e.acceleration.z;
});
