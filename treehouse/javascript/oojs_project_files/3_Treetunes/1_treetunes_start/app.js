var playList = new Playlist();

var playButton = document.getElementById("play");
var nextButton = document.getElementById("next");
var stopButton = document.getElementById("stop");

var playlistContainer = document.getElementById("playlist");

var hereComesTheSun = new Song("Here Comes the Sun", "The Beatles", "2:54");
var walkingOnSunshine = new Song("Walking on Sunshine", "Katrina and the Waves", "3:43");

playList.add(hereComesTheSun);
playList.add(walkingOnSunshine);

playList.insertInto(playlistContainer);

playButton.onclick = function(){
	playList.play();
	playList.insertInto(playlistContainer);
}

nextButton.onclick = function(){
	playList.next();
	playList.insertInto(playlistContainer);
}

stopButton.onclick = function(){
	playList.stop();
	playList.insertInto(playlistContainer);
}