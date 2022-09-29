let state =-1;
let s1, s2, s3;
function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
}

function draw() {
  background("yellow");
  switch (state) {
    case -1:
      
      text("Don't all these sound like they're from a Batman movie? Click to start",width/2,height/2)
     
      break;
    case 0:
      text("Song 1! Click again",width/2,height/2)
      if(!s1.isPlaying())
      s1.play();
      
      break;
    case 1:
      text("Song 2! Click again",width/2,height/2)
      if(!s2.isPlaying())
      s2.play();
      break;
    case 2:
      text("Song 3! That's it, but click again",width/2,height/2)
      if(!s3.isPlaying())
      s3.play();
      break;
}
}
function preload() {
  s1 = loadSound("assets/music1.mp3")
  s2 = loadSound("assets/music2.mp3")
  s3 = loadSound("assets/music3.mp3")
}

function touchStarted() {
  getAudioContext().resume();
}


function mouseReleased() {
  state++;
  s1.stop();
  s2.stop();
  s3.stop();

  if (state > 2) state = 0;
}
