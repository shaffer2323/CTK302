var bubbles = [];
let url = "";
let mLogo,dLogo;
function setup() {
  let key = "1jcAESgeyTTkKeNQjP01_trnIKJMm1cOpwLaWovAEqWM"; // this is KEY of the URL from the sheet
  
  //  let key = "1g6o2AfpufqOBwo1bthRzXYd_S85WxsjYqWIU4t16rzg"; // this is KEY of the URL from the sheet

  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1"; // here I'm making the string for loadJSON.

  loadJSON(url, gotData);

  mLogo=loadImage("assets/marvelLogo.png");
  dLogo=loadImage("assets/DCLogo.png");
  // Regular setup code we usually have
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
  imageMode(CENTER);

}

// The data comes back as an array of objects

function gotData(data) {
  console.log(data); // Print the data in the console

  // add each line to an array of bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(
      new Bubble(
        data[i]["Marvel or DC?"],
        data[i]["Favorite Marvel Character?"],
        data[i]["Favorite DC Character?"])); // THESE NEED TO MATCH SPREADSHEET
    
  }
}

function draw() {
  background("purple");
  image(mLogo,width/4,height/2,500,300);
  image(dLogo,3*width/4,height/2,550,350);
  stroke("red");
  noFill();
  ellipse(width/2, height/2, 250, 250);
  fill("white");
  text(
    "Marvel or DC?" + "\n" + "Favorite Marvel Character?" + "\n" + "Favorite DC Character?",
    width/2,height/2
  );
  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    if (bubbles[i].OR=="Marvel")
    {bubbles[i].displayM();}
    if (bubbles[i].OR=="DC")
    {bubbles[i].displayD();}
    if (bubbles[i].OR=="Other")
    {bubbles[i].displayO();}
    
  }
}

// my Bubble class
class Bubble {
  constructor(OR, Marvel, DC) {
    // only the order of these parameters matters!
    this.OR = OR;
    this.Marvel = Marvel;
    this.DC = DC;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(-3, 3), random(-3, 3));
  }

  displayM() {
    stroke("blue");
    fill("red");
    ellipse(this.pos.x, this.pos.y+10, 120, 120);
    fill("white");
    text(
      this.OR + "\n" + this.Marvel + "\n" + this.DC,
      this.pos.x,
      this.pos.y
    );
  
    this.pos.add(this.vel) ;
    if (this.pos.x > width) this.pos.x = 0 ;
    if (this.pos.x < 0) this.pos.x = width ;
    if (this.pos.y > height) this.pos.y = 0 ; 
    if (this.pos.y < 0) this.pos.y = height ;
  }
  
  displayD() {
    stroke("red");
    fill("blue");
    ellipse(this.pos.x, this.pos.y+10, 120, 120);
    fill("white");
    text(
      this.OR + "\n" + this.Marvel + "\n" + this.DC,
      this.pos.x,
      this.pos.y
    );
  
    this.pos.add(this.vel) ;
    if (this.pos.x > width) this.pos.x = 0 ;
    if (this.pos.x < 0) this.pos.x = width ;
    if (this.pos.y > height) this.pos.y = 0 ; 
    if (this.pos.y < 0) this.pos.y = height ;
  }
  displayO() {
    stroke("black");
    fill("grey");
    ellipse(this.pos.x, this.pos.y+10, 120, 120);
    fill("black");
    text(
      this.OR + "\n" + this.Marvel + "\n" + this.DC,
      this.pos.x,
      this.pos.y
    );
  
    this.pos.add(this.vel) ;
    if (this.pos.x > width) this.pos.x = 0 ;
    if (this.pos.x < 0) this.pos.x = width ;
    if (this.pos.y > height) this.pos.y = 0 ; 
    if (this.pos.y < 0) this.pos.y = height ;
  }
}
