let x=-600;
let f1;
function setup() {
  createCanvas(500, 500);
  f1= loadFont("Guardians.ttf");
  textAlign(CENTER);

}

function draw() {
  background("black");
  fill("red");
  textFont(f1,50);
  text("Look over here!", x, height/2);

  x =x+5;

  if (x>width+400)
  {
    x=-600;
  }
}
