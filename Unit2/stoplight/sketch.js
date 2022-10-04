let x=0
let v=10
let state=0;
let timer=0;
function setup() {
  createCanvas(1000, 1000);
  rectMode(CENTER);
}

function draw() {
  background('purple');
  fill('blue');
rect(x,900,200,100);
fill('black');
ellipse(x+100,950,100,100);
ellipse(x-100,950,100,100);
fill('orange')
rect(width/2,height/2,200,600);
x=x+v;
if (x>width) x=0;
fill('grey')
    ellipse(width/2,height/2+170,150,150);
    ellipse(width/2,height/2,150,150);
    ellipse(width/2,height/2-170,150,150);
switch (state) {
  case 0:
    
    fill('green')
    ellipse(width/2,height/2+170,150,150);
    v=10;
    break;
    case 1:
    fill('yellow')
    ellipse(width/2,height/2,150,150);
    
    v=5;
    break;
    case 2:
    fill('red')
    ellipse(width/2,height/2-170,150,150);
    
    if (x>=width/2&&x<=width/2+v) v=0;
    
    break;
}
    timer++;
if(timer>10*60){
  timer=0;
  state++;
  if (state > 2) state = 0;
}

}

function mouseReleased() {
  state++;
  if (state > 2) state = 0;
}

