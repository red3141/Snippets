var soundFile1 = document.createElement("audio");
soundFile1.preload = "auto";
var soundFile2 = document.createElement("audio");
soundFile2.preload = "auto";

var src1 = document.createElement("source");
src1.src = "file1.mp3";
soundFile1.appendChild(src1);
var src2 = document.createElement("source");
src2.src = "file2.mp3";
soundFile2.appendChild(src2);

soundFile1.load();
soundFile1.volume = 0.000000;
soundFile1.play();

soundFile2.load();
soundFile2.volume = 0.000000;
soundFile2.play();

function play() {
  soundFile1.currentTime = 0.01;
  soundFile1.volume = 1;
  soundFile2.currentTime = 0.01;
  soundFile2.volume = 1;
  soundFile2.muted = true;
  soundFile1.muted = false;

  setTimeout(function() {
    soundFile1.play();
    soundFile2.play();
  },1);
}

function switchMute() {
  soundFile1.muted = !soundFile1.muted;
  soundFile2.muted = !soundFile2.muted;
}
