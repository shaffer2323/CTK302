let cars = [];
let Camp;
function setup() {
  createCanvas(windowWidth, windowHeight);
  Camp= loadImage("campfire.jpg");
  textAlign(CENTER);
}

function draw() {
  background(Camp);
  cars.push(new Car());
  for (let i = 0; i < cars.length;i++) {
    cars[i].display();
    cars[i].move();
    if(cars[i].op<0)
      cars.splice(i,1);
  }
}

class Car {
  constructor() {
    this.pos = createVector(mouseX, mouseY);
    this.vel = createVector(random(-3, 3), random(-10, -5));
    
    this.op= random(255);
    this.size=random(5,50);
    this.g=random(255);
      
  }

  // methods

  display() {
    textSize(this.size);
    fill(255, this.g, 0,this.op); 
    text("FIRE",this.pos.x, this.pos.y);
  }

  move() {
    this.pos.add(this.vel);
    this.op -= 5;
   
  }
}
