let iT,iOn,iOff,iW,iB, fr1,fr2,fr3;
let state =-1;
let timer=0;
let s1;
function setup() {
  createCanvas(1000, 700);
  iT= loadImage("1x/title.png");
  iOn= loadImage("1x/whackOn.png");
  iOff= loadImage("1x/whackOff.png");
  iW= loadImage("1x/wham.png");
  iB= loadImage("1x/boom.png");
  fr1= loadImage("1x/Frame1.png");
  fr2= loadImage("1x/Frame2.png");
  fr3= loadImage("1x/Frame3.png");
  
  f1= loadFont("1x/snap.ttf");
  imageMode(CENTER);
  textAlign(CENTER);
  
}

function draw() {
 // background(0,0,200);
 textFont(f1,40)
 if(!s1.isPlaying())
      s1.play();
  switch(state)
{
case -1://Start screen
  background(0,20,200);
  image(iT, width/2, height/2-100, 500, 450);
  image(iB, width/2, 2*height/3+75, 300, 200);
  text("BEGIN!",width/2, 2*height/3+80);
  break;
case 0://auto off
  background("yellow");
  image(fr1, width/2, height/2, 300, 400);
  image(iOff, width/6, height/2, 300, 300);
  image(iW, 5*width/6, height/2, 300, 300);
  text("Case 0",100,100)
  break;
  
case 1://auto on

timer++;
  if(timer>1*10){
    background("yellow");
    image(iOn, width/6, height/2, 300, 300);
   image(fr1, width/2, height/2, 300, 400);
  }
  if(timer>2*10){
    background("yellow");
    image(iOn, width/6, height/2, 300, 300);
  image(fr2, width/2, height/2, 300, 400);
  }
  if(timer>3*10){
   background("yellow");
   image(iOn, width/6, height/2, 300, 300);
  image(fr3, width/2, height/2, 300, 400);
  }
  if(timer>4*10){
   background("yellow");
   image(iOn, width/6, height/2, 300, 300);
  image(fr2, width/2, height/2, 300, 400);
  }
  if(timer>5*10){
    background("yellow");
    image(iOn, width/6, height/2, 300, 300);
   image(fr1, width/2, height/2, 300, 400);
    timer=0;
  }
  text("Case 1",100,100);
  break;
  case 2://auto on
  timer++;
  
    if(timer>1*10){
      background("yellow");
      image(iOff, width/6, height/2, 300, 300);
     image(fr1, width/2, height/2, 300, 400);
    }
    if(timer>2*10){
      background("yellow");
      image(iOff, width/6, height/2, 300, 300);
    image(fr2, width/2, height/2, 300, 400);
    }
    if(timer>3*10){
     background("yellow");
     image(iOff, width/6, height/2, 300, 300);
    image(fr3, width/2, height/2, 300, 400);
    }
    if(timer>4*10){
     background("yellow");
     image(iOff, width/6, height/2, 300, 300);
    image(fr2, width/2, height/2, 300, 400);
    }
    if(timer>5*10){
      background("yellow");
      image(iOff, width/6, height/2, 300, 300);
     image(fr1, width/2, height/2, 300, 400);
      state=0;
    }
    text("Case 2",100,100);
  
    
    break;
}

 // image(iT, width/2, height/2-120, 100, 100);
 // image(iOn, width/2, height/2, 100, 100);
 // image(iOff, width/2, height/2+120, 100, 100);
}

function mouseReleased() {
  timer=0;
  if(state==-1&&mouseX>width/4&&mouseX<3*width/4&&mouseY>2*height/3-125&&mouseY<2*height/3+275)
  state++;
  
  else if(state>-1&&state<2&&mouseX>10&&mouseX<300&&mouseY>200&&mouseY<height/2+150)
  {state++;
    timer=0;}
   else if(state==0&&mouseX>600&&mouseX<983&&mouseY>200&&mouseY<height/2+150)
  state=2;
  
  if (state > 2) state = 0;}
  function preload() {
    s1 = loadSound("1x/UpbeatMusic.mp3");
  }
  function touchStarted() {
    getAudioContext().resume();
  }