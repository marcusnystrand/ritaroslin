var iframe = document.getElementById('video');

// $f == Froogaloop
var player = $f(iframe);

// bind events
var playButton = document.getElementById("play-button");
playButton.addEventListener("click", function() {
  player.api("play");
});

var pauseButton = document.getElementById("pause-button");
pauseButton.addEventListener("click", function() {
  player.api("pause");
});
