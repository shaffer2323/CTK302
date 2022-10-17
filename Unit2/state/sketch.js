let state = 0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  switch (state) {
    case 0:
      background("black");
      for (let j = 0; j <= height; j = j + 50) {
        for (let i = 0; i <= width; i = i + 25) {
          fill(0, j, i);
         triangle(i+10, j, i, j+20, i+20, j+20);// rightside up
        }
      }
      for (let j = 25; j <= height; j = j + 50) {
        for (let i = 0; i <= width; i = i + 25) {
          fill(0, 255-j, 255-i);
         triangle(i+10, j+20, i, j, i+20, j);//upsidedown
        }
      }
      break;
    case 1:
      background("green");
      for (let j = 0; j <= height; j = j + 50) {
        for (let i = 0; i <= width; i = i + 25) {
          fill( 255-j,0, 255-i);
         triangle(i, j,  i, j+20,  i+20, j+10);// rightside up
        }
      }
      for (let j = 25; j <= height; j = j + 50) {
        for (let i = 0; i <= width; i = i + 25) {
          fill( j,0, i);
         triangle(i+20, j, i, j+10, i+20, j+20);//upsidedown
        }
      }
      break;
    case 2:
      for (let j = 0; j <= height; j = j + 10) {
        for (let i = 0; i <= width; i = i + 10) {
          fill(j, i,255-j);
          
          ellipse(i, j, 20, 20);
        }
      }
      break;
    case 3:
      background("lime");
      for (let j = 0; j <= height; j = j + 50) {
        for (let i = 0; i <= width; i = i + 25) {
          fill(j, 0, i);
         arc(i, j, 50, 50, PI, TWO_PI);// rightside up
          fill(255-j,0, 255-i);
         arc(i, j, 50, 50, 0, PI);//upsidedown
        }
      }
     
      break;
      case 4:
      background("pink");
      for (let j = 0; j <= height; j = j + 50) {
        for (let i = 0; i <= width; i = i + 50) {
          fill(j, i, 0);
         arc(i, j, 50, 50, 0, PI/2);// rightside up
          fill(255-j, 255-i,0);
         arc(i, j, 50, 50, PI/2, PI);//upsidedown
            fill(0, j, i);
         arc(i, j, 50, 50, PI, 3*PI/2);// rightside up
          fill(255-j,0, 255-i);
         arc(i, j, 50, 50, 3*PI/2, 2*PI);//upsidedown
        }
      }
     
      break;
  }
}
function mouseReleased() {
  state++;
  textSize(random(50));
  if (state > 4) state = 0;
}
