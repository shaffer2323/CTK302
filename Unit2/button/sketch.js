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
  rect(100,300,300,100);
  text("Where does Vader like to go shopping?", width/2, height/2);
  fill("black");
  text("Where?", width/2, 350);
  break;
case 1:
  background("black");
  fill("red");
  text("At the DARTH MAUL!", width/2, height/2);
  rect(100,300,300,100);
  fill("white");
  text("What? I don't get it...", width/2, 350);
  break;
case 2:
  background("blue");
  fill("white");
  text("In the Star Wars franchise, Darth Maul was one of Darth Vader's predecessors of the Sith, which are evil Jedi, which are space wizards. And a mall is a collection of stores in one building for shopper convenience. It's a play on words where I replace ''Maul'' with ''Mall.'' Pretty funny stuff, right?", 30, 50, 450);
  rect(100,300,300,100);
  fill("black");
  text("oh... very funny...", width/2, 350);
  break;
}

}
function mouseReleased() {
  if(mouseX>100&&mouseX<400&&mouseY>300&&mouseY<400){
  state++;
  //textSize(random(50));
  if (state > 2) state = 0;}
}