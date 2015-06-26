var html = '';
var red;
var green;
var blue;
var rgbColor;

for (var i = 0; i < 10 ; i ++){

	rgbColor = randomColor();
	html += '<div style="background-color:' + rgbColor + '"></div>';
}

print(html);

function genColor(){
	return Math.floor(Math.random() * 256 );
}

function randomColor(){
	return 'rgb(' + genColor()+ ',' + genColor() + ',' + genColor() + ')';
}

function print(message){
	document.write(message);
}