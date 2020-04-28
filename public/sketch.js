var song;
var buttton;
var amp; //volume

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
  createCanvas(600, 600)
  buttton = createButton('Toggle');
  buttton.mousePressed(toggleSong);
  song.play();  
  amp = new p5.Amplitude();
}

function draw() {
  background(0);
  var vol = amp.getLevel();
  ellipse(300, 300, vol*300, vol*300);
  console.log(vol)
}

// Chrome 70 will require user gestures required to enable web audio api
// Click on the web page to start audio
function touchStarted() {
  getAudioContext().resume();
}