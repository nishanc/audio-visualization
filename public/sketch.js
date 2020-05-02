let song, buttton, amp;
let volHistory = [];

function toggleSong() {
  if(song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function preload() {
  song = loadSound('audio/the-alphabeat.mp3'); 
  getAudioContext().resume();
}

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES); // Change the mode to DEGREES
  buttton = createButton('Toggle');
  buttton.mousePressed(toggleSong);
  song.play();  
  amp = new p5.Amplitude();
}

function draw() {
  background(0);
  let vol = amp.getLevel();
  volHistory.push(vol);

  translate(width/2, height/2)
  noFill();
  beginShape();
  for (let i = 0; i < 360; i++) {
    stroke(255);
    let r = map(volHistory[i], 0, 1, 10, 300);
    let x = r * cos(i);
    let y = r * sin(i);
    vertex(x, y);
  }
  endShape();

  if(volHistory.length > 360) {
    volHistory.splice(0,1);
  }
  
  // ellipse(300, 300, vol*300, vol*300);
  console.log(vol)
}

// Chrome 70 will require user gestures required to enable web audio api
// Click on the web page to start audio
function touchStarted() {
  getAudioContext().resume();
}