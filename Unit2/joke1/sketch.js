let state =0
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
  text("Why shouldn't you invite a yoga instructor to your house?", 100, 225,300,400);
  break;
case 1:
  background("blue");
  text("Because when you ask them to leave, they say ''Namaste!''", 100, 225,300,400);
  break;
case 2:
  background("lime");
  text("Get it? Namaste, like ''Nah, Ima' Stay!'' Funny right?", 100, 225,300,400);
  break;
}
}



function mouseReleased() {
  state++;
  //textSize(random(50));
  if (state > 2) state = 0;
}