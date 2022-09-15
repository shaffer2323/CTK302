function setup() {
  createCanvas(700, 400);
}

function mouseReleased() {
  print(mouseX + ", " + mouseY);
}

function draw() {
  noStroke();

  //big P

  fill("orange");
  rect(0, 350, 700, 63); //Ground

  fill(200);
  ellipse(400, 100, 100, 40); // cloud
  ellipse(460, 100, 100, 40); // cloud
  ellipse(430, 85, 100, 40); // cloud

  ellipse(500, 200, 100, 40); // cloud2
  ellipse(560, 200, 100, 40); // cloud2
  ellipse(530, 185, 100, 40); // cloud2

  ellipse(50, 200, 100, 40); // cloud3
  ellipse(110, 200, 100, 40); // cloud3
  ellipse(80, 185, 100, 40); // cloud3

  fill("green");
  arc(495, 300, 39, 30, PI, TWO_PI);
  quad(475, 300, 515, 300, 505, 350, 483, 350); //center
  rect(455, 320, 80, 15);
  arc(463, 320, 16, 20, PI, TWO_PI); // left arm
  arc(527, 320, 16, 20, PI, TWO_PI); // right arm
  // right cact

  arc(70, 300, 39, 30, PI, TWO_PI);
  quad(50, 300, 90, 300, 80, 350, 58, 350); //center
  rect(30, 320, 80, 15);
  arc(38, 320, 16, 20, PI, TWO_PI); // left arm
  arc(102, 320, 16, 20, PI, TWO_PI); // right arm
  //left cact

  if (mouseIsPressed) {
    background(0, 0, 100);
    fill(255);
    ellipse(200, 100, 80, 80); // moon

    fill(0, 0, 100);
    ellipse(225, 95, 80, 80); //darkside

    fill("yellow");
    triangle(300, 125, 150, 350, 400, 350);
    fill(255, 204, 0);
    triangle(300, 125, 400, 350, 450, 350);
    //Bed
    fill("brown");
    rect(180, 320, 200, 15);
    rect(180, 320, 20, 30);
    rect(360, 290, 20, 60);
    fill("gray");
    rect(180, 310, 180, 15);
    fill("white");
    rect(330, 310, 30, 15);

    //sleepy
    fill("red");
    rect(180, 300, 150, 15);
    fill("blue");
    rect(180, 300, 75, 15);

    fill(255, 219, 172);
    ellipse(330, 275, 75, 75); // head
    fill(0);
    arc(340, 275, 60, 73, (3 * PI) / 2, PI / 2); //hat
    arc(345, 250, 10, 90, PI, 0); // brim

    rect(330, 245, 5, 20);
    ellipse(310, 260, 20, 10);
  } else {
    background(0, 0, 250);
    fill("yellow");
    ellipse(200, 100, 80, 80); // sun
    triangle(300, 125, 150, 350, 400, 350);
    fill(255, 204, 0);
    triangle(300, 125, 400, 350, 450, 350);
    //Character Day
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

  fill("orange");
  rect(0, 350, 700, 63); //Ground

  

  //Clouds
  fill(200);
  ellipse(400, 100, 100, 40); // cloud
  ellipse(460, 100, 100, 40); // cloud
  ellipse(430, 85, 100, 40); // cloud

  ellipse(500, 200, 100, 40); // cloud2
  ellipse(560, 200, 100, 40); // cloud2
  ellipse(530, 185, 100, 40); // cloud2

  ellipse(50, 200, 100, 40); // cloud3
  ellipse(110, 200, 100, 40); // cloud3
  ellipse(80, 185, 100, 40); // cloud3

  //Cacti
  fill("green");
  arc(495, 300, 39, 30, PI, TWO_PI);
  quad(475, 300, 515, 300, 505, 350, 483, 350); //center
  rect(455, 320, 80, 15);
  arc(463, 320, 16, 20, PI, TWO_PI); // left arm
  arc(527, 320, 16, 20, PI, TWO_PI); // right arm
  // right cact

  arc(70, 300, 39, 30, PI, TWO_PI);
  quad(50, 300, 90, 300, 80, 350, 58, 350); //center
  rect(30, 320, 80, 15);
  arc(38, 320, 16, 20, PI, TWO_PI); // left arm
  arc(102, 320, 16, 20, PI, TWO_PI); // right arm
  //left cact
  
  fill('black')
  textSize(12);
  text("The Crastinater is a self destructive creature that will repeatedly put off doing things it needs to do, choosing instead to watch TV, play games, and/or sleep. He will begin his work, such as an assignment that is due at noon, 2 hours before it's due, knowing it should probably taken longer to finish. Also he's in Egypt for some reason?",10, 353,650);
  
  textSize(30);
  fill('red')
  text("THE CRASTINATER",450,100,100,100);
}
