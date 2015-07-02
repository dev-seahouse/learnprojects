function Song (title, artist, duration){
	 this.title 	= title;
	 this.artist 	= artist;
	 this.duration 	= duration;
	 this.isPlaying = false;
}

Song.prototype.play = function(){
	this.isPlaying = true;
}

Song.prototype.stop = function() {
	this.isPlaying = false;
}

Song.prototype.toHTML = function(){
	var listItem = document.createElement("li");
	var span = document.createElement("span");
	var titleTxt = document.createTextNode(
		this.title +  " - " + this.artist
		);
	var spanTxt = document.createTextNode(this.duration);

	span.appendChild(spanTxt);
	listItem.appendChild(titleTxt);
	listItem.appendChild(span);

	if (this.isPlaying === true){
		listItem.className = "current";
	}else{
		listItem.className ="";
	}

	return listItem;
}