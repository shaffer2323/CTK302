let f1,f2,f3;
function setup() {
  createCanvas(500, 500);
  f1= loadFont("Guardians.ttf");
  f2= loadFont("game-of-squids.ttf");
  f3= loadFont("computo-monospace.otf");
  textAlign(CENTER);
}

function draw() {
  background("black");
  fill("white");
  textFont(f1,45);
  text("hello there!",width/2,100);
  textFont(f2,40);
  text("General Kenobi!",width/2,200);
  textFont(f3,25);
  text("Star Wars reference!",width/2,300);


}