var slideIndex = 1;
var players = [
  {
    id: "ytplayer1",
    videoID: "fscBeKbeNPA",
    index: 2,
  },
  {
    id: "ytplayer2",
    videoID: "5OQl4WTkWTc",
    index: 3,
  },
  {
    id: "ytplayer3",
    videoID: "n_dZNLr2cME",
    index: -1,
  },
  {
    id: "ytplayer4",
    videoID: "n_dZNLr2cME",
    index: -1
  },
  {
    id: "ytplayer5",
    videoID: "n_dZNLr2cME",
    index: -1
  },
]

var ytPlayers = []
showSlides(slideIndex);

// Load the IFrame Player API code asynchronously.

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
var player;
function onYouTubePlayerAPIReady() {
  for (var i = 0; i<players.length; i++) {
    ytPlayers[i] = new YT.Player(players[i].id, {
      height: '349',
      width: '560',
      videoId: players[i].videoID,
      autoplay: 1,
      origin: 'https://www.youtube.com',
      enablejsapi: 1,
      disablekb: 1,
      loop: 1,
      modestbranding: 1,
    });
  }
}

// Next/previous controls
function plusSlides(n) {
  for (var i=0; i<ytPlayers.length; i++) {
    if (players[i].index == slideIndex) {
      ytPlayers[i].stopVideo();
    }
  }
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
