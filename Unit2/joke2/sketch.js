let state =0
let timer = 0;
function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  textSize(25);

}

function draw() {
switch(state)
{
case 0:
  background("red");
  fill("white");
  text("What kind of Car does a Jedi drive?", width/2, height/2);
  break;
case 1:
  background("Green");
  text("a Toy-YODA", width/2, height/2);
  break;
}
timer++;
if(timer>4*60){
  timer=0;
  state++;
  if (state > 1) state = 0;
}
}
function mouseReleased() {
  state++;
  textSize(50);
  if (state > 1) state = 0;
}