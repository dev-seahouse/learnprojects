function Playlist(){
	this.songs=[];
	this.currentSongIndex = 0;
}

Playlist.prototype.add = function(song){
	this.songs.push(song);
}

Playlist.prototype.play = function(){
	this.songs[this.currentSongIndex].play();
}


Playlist.prototype.stop = function(){
	this.songs[this.currentSongIndex].stop();
}


Playlist.prototype.next = function(){
	this.stop();
	this.currentSongIndex++;
	if (this.currentSongIndex === this.songs.length)
		this.currentSongIndex = 0;
	this.play();
}

Playlist.prototype.insertInto = function(element){
	element.innerHTML= "";
	var list;
	for (var i = 0 ; i < this.songs.length; i++){
		list = this.songs[i].toHTML();
		element.appendChild(list);
	}

	// ????????????????????????????

}