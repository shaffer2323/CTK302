let x=-600;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background('yellow');
  push();
  translate(x,0);
  avatar();
  x+=5;
  if(x>width){
    x=-600;
  }
  pop();

}

function avatar(){
  fill(255, 219, 172);
  rect(260, 275, 80, 15); //arms
  fill("red");
  rect(273, 275, 55, 15);
  rect(290, 250, 25, 100); //shirt
  fill("blue");
  rect(290, 310, 25, 40); //pants
  fill(255, 219, 172);
  ellipse(300, 235, 75, 75); // head

  fill(0);
  arc(300, 220, 73, 60, PI, TWO_PI); //hat
  arc(270, 214, 90, 10, PI / 2, (3 * PI) / 2); // brim

  arc(285, 230, 25, 20, 0, PI); //L Eye
  arc(320, 230, 25, 20, 0, PI); //R Eye
  arc(300, 250, 30, 25, 0, PI); // Mouth
}
